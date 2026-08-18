import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession } from "@/app/actions/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    
    // Ensure the uploads directory exists
    await mkdir(uploadsDir, { recursive: true });

    // Generate unique filename to prevent overrides
    const ext = path.extname(file.name) || ".jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
    const filePath = path.join(uploadsDir, filename);

    await writeFile(filePath, buffer);

    return NextResponse.json({ success: true, url: `/uploads/${filename}` });
  } catch (error: any) {
    console.error("File upload error:", error);
    return NextResponse.json({ error: error.message || "Failed to upload file" }, { status: 500 });
  }
}
