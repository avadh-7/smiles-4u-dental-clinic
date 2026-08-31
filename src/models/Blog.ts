import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  readTime: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true, default: "Dental Care" },
    readTime: { type: String, required: true, default: "5 min read" },
  },
  {
    collection: "blogs",
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
