import mongoose from "mongoose";
import Treatment from "../models/Treatment";
import GalleryItem from "../models/GalleryItem";
import { services } from "../data/services";
import { galleryItems } from "../data/gallery";

// MONGODB_URI will be checked inside dbConnect to avoid build-time static evaluation crashes.

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}
const cached = global.mongoose as MongooseCache;

async function seedDatabase() {
  try {
    // Seed Treatments if empty
    const treatmentCount = await Treatment.countDocuments();
    if (treatmentCount === 0) {
      console.log("Database: Seeding default treatments...");
      // Map static data directly to mongoose documents
      await Treatment.insertMany(services);
      console.log(`Database: Successfully seeded ${services.length} treatments.`);
    }

    // Seed Gallery Items if empty
    const galleryCount = await GalleryItem.countDocuments();
    if (galleryCount === 0) {
      console.log("Database: Seeding default gallery images...");
      const galleryWithoutId = galleryItems.map(({ id: _, ...rest }) => rest);
      await GalleryItem.insertMany(galleryWithoutId);
      console.log(`Database: Successfully seeded ${galleryItems.length} gallery images.`);
    }
  } catch (error) {
    console.error("Database Seeding Error:", error);
  }
}

export async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside your Vercel Dashboard Settings (or .env.local).");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(async (mongooseInstance) => {
      console.log("MongoDB Connected Successfully");
      // Run seed check upon successful connection
      await seedDatabase();
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
