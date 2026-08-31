"use server";

import { dbConnect } from "@/lib/db";
import Blog from "@/models/Blog";
import { verifyAdminSession } from "./auth";
import { revalidatePath } from "next/cache";

export interface BlogInput {
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  readTime: string;
}

export async function getBlogs() {
  await dbConnect();
  try {
    const items = await Blog.find({}).sort({ createdAt: -1 }).lean();
    return items.map((item: any) => ({
      id: item._id.toString(),
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      imageUrl: item.imageUrl,
      category: item.category,
      readTime: item.readTime,
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("Failed to get blogs:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string) {
  await dbConnect();
  try {
    const item: any = await Blog.findOne({ slug }).lean();
    if (!item) return null;
    return {
      id: item._id.toString(),
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      imageUrl: item.imageUrl,
      category: item.category,
      readTime: item.readTime,
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error(`Failed to get blog by slug ${slug}:`, error);
    return null;
  }
}

export async function createBlog(data: BlogInput) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can create blogs.");
  }

  await dbConnect();
  try {
    // Generate a URL-friendly slug from the title
    const slug = data.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Check if slug already exists
    const existing = await Blog.findOne({ slug });
    let finalSlug = slug;
    if (existing) {
      finalSlug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    const newBlog = new Blog({
      ...data,
      slug: finalSlug,
    });

    await newBlog.save();
    revalidatePath("/");
    revalidatePath(`/blog/${finalSlug}`);
    return { success: true, blog: JSON.parse(JSON.stringify(newBlog)) };
  } catch (error: any) {
    console.error("Failed to create blog:", error);
    return { success: false, error: error.message || "Failed to create blog" };
  }
}

export async function updateBlog(id: string, data: BlogInput) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can update blogs.");
  }

  await dbConnect();
  try {
    // Generate slug from the updated title
    const slug = data.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Check if slug exists in another blog
    const existing = await Blog.findOne({ slug, _id: { $ne: id } });
    let finalSlug = slug;
    if (existing) {
      finalSlug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        ...data,
        slug: finalSlug,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return { success: false, error: "Blog post not found" };
    }

    revalidatePath("/");
    revalidatePath(`/blog/${finalSlug}`);
    return { success: true, blog: JSON.parse(JSON.stringify(updatedBlog)) };
  } catch (error: any) {
    console.error("Failed to update blog:", error);
    return { success: false, error: error.message || "Failed to update blog" };
  }
}

export async function deleteBlog(id: string) {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Unauthorized: Only administrators can delete blogs.");
  }

  await dbConnect();
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return { success: false, error: "Blog post not found" };
    }
    revalidatePath("/");
    revalidatePath(`/blog/${deletedBlog.slug}`);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete blog:", error);
    return { success: false, error: error.message || "Failed to delete blog" };
  }
}
