import fs from "fs";
import path from "path";

// Load .env.local manually first
const envPath = path.resolve(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, "utf-8");
  for (const line of envConfig.split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      value = value.trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.substring(1, value.length - 1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.substring(1, value.length - 1);
      }
      process.env[key] = value.trim();
    }
  }
}

async function run() {
  console.log("Manual Database Re-Seed Tool");
  console.log("=================================");
  
  console.log("Importing db connection module...");
  const { dbConnect } = await import("../src/lib/db");
  const Treatment = (await import("../src/models/Treatment")).default;
  const GalleryItem = (await import("../src/models/GalleryItem")).default;
  
  console.log("Connecting to database...");
  await dbConnect();
  
  console.log("Clearing existing treatments from DB...");
  await Treatment.deleteMany({});
  console.log("Clearing existing gallery images from DB...");
  await GalleryItem.deleteMany({});
  
  console.log("Re-seeding database with updated local image paths...");
  // Re-connect to trigger seedDatabase check
  const mongooseInstance = await dbConnect();
  
  // Since dbConnect uses a cached promise, let's call seedDatabase manually or trigger it
  // Actually, let's call the seed logic directly from db.ts or write it inline to ensure it runs!
  // In src/lib/db.ts: seedDatabase is not exported. But we can write the seed logic directly here:
  const { services } = await import("../src/data/services");
  const { galleryItems } = await import("../src/data/gallery");
  
  console.log("Seeding fresh treatments...");
  await Treatment.insertMany(services);
  console.log(`Successfully seeded ${services.length} treatments.`);
  
  console.log("Seeding fresh gallery images...");
  const galleryWithoutId = galleryItems.map(({ id, ...rest }: any) => rest);
  await GalleryItem.insertMany(galleryWithoutId);
  console.log(`Successfully seeded ${galleryItems.length} gallery images.`);
  
  console.log("=================================");
  console.log("Database re-seed completed successfully with local paths!");
  process.exit(0);
}

run().catch((err) => {
  console.error("Error during manual seeding:", err);
  process.exit(1);
});
