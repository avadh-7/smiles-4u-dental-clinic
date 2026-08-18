import mongoose, { Schema, Document } from "mongoose";

export interface ITreatment extends Document {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  benefits: string[];
  fullDescription: string;
  whoIsItFor: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  imageUrl: string;
}

const TreatmentSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortDesc: { type: String, required: true },
    longDesc: { type: String, required: true },
    iconName: { type: String, default: "Activity" },
    benefits: [{ type: String }],
    fullDescription: { type: String, required: true },
    whoIsItFor: [{ type: String }],
    process: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    imageUrl: { type: String, required: true },
  },
  {
    collection: "treatments",
    timestamps: true,
  }
);

// Prevent mongoose from compiling model again on hot-reload in development
export default mongoose.models.Treatment || mongoose.model<ITreatment>("Treatment", TreatmentSchema);
