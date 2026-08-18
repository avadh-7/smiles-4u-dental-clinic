"use server";

import { dbConnect } from "@/lib/db";
import GalleryItem from "@/models/GalleryItem";
import { verifyAdminSession } from "./auth";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

export interface GalleryItemInput {
  category: "award" | "happy-patients" | "our-clinic" | "after-treatment";
  title: string;
  description: string;
  imageUrl: string;
}

export async function getGalleryItems() {
  await dbConnect();
  try {
    const items = await GalleryItem.find({}).sort({ createdAt: -1 }).lean();
    return items.map((item: any) => ({
      id: item._id.toString(),
      category: item.category,
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
    }));
  } catch (error) {
    console.error("Failed to get gallery items:", error);
    return [];
  }
}

export async function createGalleryItem(data: GalleryItemInput) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can add gallery images.");
  }

  await dbConnect();
  try {
    const newItem = new GalleryItem({
      category: data.category,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
    });

    await newItem.save();
    revalidatePath("/gallery");
    return { success: true, item: JSON.parse(JSON.stringify(newItem)) };
  } catch (error: any) {
    console.error("Failed to create gallery item:", error);
    return { success: false, error: error.message || "Failed to add image" };
  }
}

export async function deleteGalleryItem(id: string) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can delete gallery images.");
  }

  await dbConnect();
  try {
    await GalleryItem.findByIdAndDelete(id);
    revalidatePath("/gallery");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete gallery item:", error);
    return { success: false, error: error.message || "Failed to delete image" };
  }
}
