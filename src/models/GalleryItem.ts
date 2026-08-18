import mongoose, { Schema, Document } from "mongoose";

export interface IGalleryItem extends Document {
  category: "award" | "happy-patients" | "our-clinic" | "after-treatment";
  title: string;
  description: string;
  imageUrl: string;
}

const GalleryItemSchema: Schema = new Schema(
  {
    category: { 
      type: String, 
      required: true, 
      enum: ["award", "happy-patients", "our-clinic", "after-treatment"] 
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    collection: "gallery_images",
    timestamps: true,
  }
);

// Prevent mongoose from compiling model again on hot-reload in development
export default mongoose.models.GalleryItem || mongoose.model<IGalleryItem>("GalleryItem", GalleryItemSchema);
