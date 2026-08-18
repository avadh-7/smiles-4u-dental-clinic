import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// Simple custom .env parser to read MONGODB_URI
const envPath = path.resolve(process.cwd(), ".env.local");
let mongodbUri = "";

if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    if (line.startsWith("MONGODB_URI=")) {
      const eqIdx = line.indexOf("=");
      mongodbUri = line.substring(eqIdx + 1).trim().replace(/['"]/g, "").replace(/\r/g, "");
    }
  }
}

if (!mongodbUri) {
  console.error("MONGODB_URI is not defined in .env.local");
  process.exit(1);
}

// Define schemas/models
const TreatmentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  shortDesc: { type: String, required: true },
  longDesc: { type: String, required: true },
  iconName: { type: String, default: "Activity" },
  benefits: { type: [String], default: [] },
  fullDescription: { type: String, required: true },
  whoIsItFor: { type: [String], default: [] },
  process: {
    type: [{
      title: { type: String, required: true },
      description: { type: String, required: true }
    }],
    default: []
  },
  faqs: {
    type: [{
      question: { type: String, required: true },
      answer: { type: String, required: true }
    }],
    default: []
  },
  imageUrl: { type: String }
}, { timestamps: true });

const GalleryItemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true });

const Treatment = mongoose.models.Treatment || mongoose.model("Treatment", TreatmentSchema, "treatments");
const GalleryItem = mongoose.models.GalleryItem || mongoose.model("GalleryItem", GalleryItemSchema, "gallery_images");

// Import default data
import { services } from "../src/data/services";
import { galleryItems } from "../src/data/gallery";

async function run() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(mongodbUri);
  console.log("MongoDB connected successfully.");

  console.log("Deleting all treatments from database...");
  await Treatment.deleteMany({});
  console.log("Deleted treatments.");

  console.log("Deleting all gallery images from database...");
  await GalleryItem.deleteMany({});
  console.log("Deleted gallery images.");

  console.log("Dropping deprecated unique id_1 index on gallery images...");
  try {
    await GalleryItem.collection.dropIndex("id_1");
    console.log("Successfully dropped index id_1.");
  } catch (err) {
    console.log("Note: unique index id_1 was not found or already dropped.");
  }

  console.log("Inserting default treatments (with URL-friendly slug IDs)...");
  await Treatment.insertMany(services);
  console.log(`Successfully seeded ${services.length} treatments.`);

  console.log("Inserting default gallery images (MongoDB auto-generated _id)...");
  const galleryWithoutId = galleryItems.map(({ id, ...rest }) => rest);
  await GalleryItem.insertMany(galleryWithoutId);
  console.log(`Successfully seeded ${galleryItems.length} gallery images.`);

  await mongoose.disconnect();
  console.log("Reseed operation completed. Connection closed.");
}

run().catch(err => {
  console.error("Reseed failed:", err);
  process.exit(1);
});
