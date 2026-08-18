"use server";

import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_SECRET = process.env.SESSION_SECRET || "fallback_secret_smiles4u_centre";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function signPayload(payload: string): string {
  return crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(payload)
    .digest("hex");
}

export async function loginAdmin(password: string): Promise<{ success: boolean; error?: string }> {
  if (password !== ADMIN_PASSWORD) {
    return { success: false, error: "Incorrect admin password" };
  }

  // Create session payload (expires in 24 hours)
  const expires = Date.now() + 24 * 60 * 60 * 1000;
  const payloadObj = { role: "admin", expires };
  const payloadStr = Buffer.from(JSON.stringify(payloadObj)).toString("base64");
  const signature = signPayload(payloadStr);
  const token = `${payloadStr}.${signature}`;

  // Save to secure HTTP-only cookie
  const cookieStore = await cookies();
  cookieStore.set("admin_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60, // 24 hours in seconds
    path: "/",
  });

  return { success: true };
}

export async function logoutAdmin(): Promise<{ success: boolean }> {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  return { success: true };
}

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("admin_session");

  if (!sessionCookie || !sessionCookie.value) {
    return false;
  }

  try {
    const parts = sessionCookie.value.split(".");
    if (parts.length !== 2) return false;

    const [payloadStr, signature] = parts;
    const expectedSignature = signPayload(payloadStr);

    if (signature !== expectedSignature) {
      return false;
    }

    const payloadObj = JSON.parse(Buffer.from(payloadStr, "base64").toString("utf-8"));
    if (payloadObj.expires < Date.now()) {
      return false;
    }

    return payloadObj.role === "admin";
  } catch (error) {
    return false;
  }
}
