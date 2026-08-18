"use server";

import { dbConnect } from "@/lib/db";
import Treatment from "@/models/Treatment";
import { verifyAdminSession } from "./auth";
import { revalidatePath } from "next/cache";

export interface TreatmentInput {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName?: string;
  benefits: string[];
  fullDescription: string;
  whoIsItFor: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  imageUrl: string;
}

export async function getTreatments() {
  await dbConnect();
  try {
    const items = await Treatment.find({}).sort({ createdAt: 1 }).lean();
    return items.map((item: any) => ({
      id: item.id,
      title: item.title,
      shortDesc: item.shortDesc,
      longDesc: item.longDesc,
      iconName: item.iconName || "Activity",
      benefits: item.benefits || [],
      fullDescription: item.fullDescription,
      whoIsItFor: item.whoIsItFor || [],
      process: (item.process || []).map((p: any) => ({
        title: p.title,
        description: p.description,
      })),
      faqs: (item.faqs || []).map((f: any) => ({
        question: f.question,
        answer: f.answer,
      })),
      imageUrl: item.imageUrl,
    }));
  } catch (error) {
    console.error("Failed to get treatments:", error);
    return [];
  }
}

export async function getTreatmentById(id: string) {
  await dbConnect();
  try {
    const item: any = await Treatment.findOne({ id }).lean();
    if (!item) return null;
    return {
      id: item.id,
      title: item.title,
      shortDesc: item.shortDesc,
      longDesc: item.longDesc,
      iconName: item.iconName || "Activity",
      benefits: item.benefits || [],
      fullDescription: item.fullDescription,
      whoIsItFor: item.whoIsItFor || [],
      process: (item.process || []).map((p: any) => ({
        title: p.title,
        description: p.description,
      })),
      faqs: (item.faqs || []).map((f: any) => ({
        question: f.question,
        answer: f.answer,
      })),
      imageUrl: item.imageUrl,
    };
  } catch (error) {
    console.error(`Failed to get treatment by id ${id}:`, error);
    return null;
  }
}

export async function createTreatment(data: TreatmentInput) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can create treatments.");
  }

  await dbConnect();
  try {
    const existing = await Treatment.findOne({ id: data.id });
    if (existing) {
      return { success: false, error: "A treatment with this ID/Slug already exists" };
    }

    const newTreatment = new Treatment(data);
    await newTreatment.save();

    revalidatePath("/treatments");
    revalidatePath(`/treatments/${data.id}`);
    revalidatePath("/");

    return { success: true, treatment: JSON.parse(JSON.stringify(newTreatment)) };
  } catch (error: any) {
    console.error("Failed to create treatment:", error);
    return { success: false, error: error.message || "Failed to create treatment" };
  }
}

export async function updateTreatment(id: string, data: Partial<TreatmentInput>) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can edit treatments.");
  }

  await dbConnect();
  try {
    const updated = await Treatment.findOneAndUpdate({ id }, data, { new: true }).lean();
    if (!updated) {
      return { success: false, error: "Treatment not found" };
    }

    revalidatePath("/treatments");
    revalidatePath(`/treatments/${id}`);
    if (data.id && data.id !== id) {
      revalidatePath(`/treatments/${data.id}`);
    }
    revalidatePath("/");

    return { success: true, treatment: JSON.parse(JSON.stringify(updated)) };
  } catch (error: any) {
    console.error("Failed to update treatment:", error);
    return { success: false, error: error.message || "Failed to update treatment" };
  }
}

export async function deleteTreatment(id: string) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can delete treatments.");
  }

  await dbConnect();
  try {
    await Treatment.findOneAndDelete({ id });

    revalidatePath("/treatments");
    revalidatePath(`/treatments/${id}`);
    revalidatePath("/");

    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete treatment:", error);
    return { success: false, error: error.message || "Failed to delete treatment" };
  }
}
