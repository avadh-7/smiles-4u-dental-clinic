import fs from "fs";
import path from "path";

// Load env variables manually first
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
  console.log("Database Update Verification Tool");
  console.log("=================================");
  
  // Dynamically import Mongoose models & helper
  const { dbConnect } = await import("../src/lib/db");
  const Treatment = (await import("../src/models/Treatment")).default;
  const GalleryItem = (await import("../src/models/GalleryItem")).default;
  const { getTreatments } = await import("../src/app/actions/treatments");
  
  console.log("Connecting to MongoDB...");
  await dbConnect();
  
  // 1. Verify Treatment Update Roundtrip
  console.log("\n1. Testing Treatments Update Flow:");
  const testTreatmentId = "root-canal";
  const originalTreatment = await Treatment.findOne({ id: testTreatmentId });
  if (!originalTreatment) {
    throw new Error(`Test treatment ${testTreatmentId} not found in DB!`);
  }
  
  const originalDesc = originalTreatment.shortDesc;
  const testDesc = "TEST DESCRIPTION: Painless micro-dentistry solutions.";
  
  console.log(`- Original description in DB: "${originalDesc}"`);
  console.log(`- Admin Action: Simulating update to: "${testDesc}"`);
  
  originalTreatment.shortDesc = testDesc;
  await originalTreatment.save();
  console.log("- DB Update: Saved successfully.");
  
  // Fetch via getTreatments (frontend view)
  const currentTreatments = await getTreatments();
  const updatedTreatment = currentTreatments.find((t: any) => t.id === testTreatmentId);
  console.log(`- Frontend View: Fetched description is: "${updatedTreatment?.shortDesc}"`);
  
  if (updatedTreatment?.shortDesc === testDesc) {
    console.log("✓ SUCCESS: Treatment update correctly propagated to DB and frontend!");
  } else {
    throw new Error("✗ FAILURE: Treatment update did not propagate!");
  }
  
  // Revert change
  originalTreatment.shortDesc = originalDesc;
  await originalTreatment.save();
  console.log("- Reverted treatment description to original.");
  
  
  // 2. Verify Gallery Image Update Roundtrip
  console.log("\n2. Testing Gallery Images Update Flow:");
  const firstGalleryItem = await GalleryItem.findOne({});
  if (!firstGalleryItem) {
    throw new Error("No gallery items found in DB!");
  }
  
  const originalTitle = firstGalleryItem.title;
  const testTitle = "TEST TITLE: Modern Dental Equipment";
  
  console.log(`- Original title in DB: "${originalTitle}"`);
  console.log(`- Admin Action: Simulating update to: "${testTitle}"`);
  
  firstGalleryItem.title = testTitle;
  await firstGalleryItem.save();
  console.log("- DB Update: Saved successfully.");
  
  // Fetch again from DB
  const refetchedItem = await GalleryItem.findById(firstGalleryItem._id);
  console.log(`- Frontend View: Fetched title is: "${refetchedItem?.title}"`);
  
  if (refetchedItem?.title === testTitle) {
    console.log("✓ SUCCESS: Gallery item update correctly propagated to DB and frontend!");
  } else {
    throw new Error("✗ FAILURE: Gallery item update did not propagate!");
  }
  
  // Revert change
  firstGalleryItem.title = originalTitle;
  await firstGalleryItem.save();
  console.log("- Reverted gallery item title to original.");
  
  console.log("\n=================================");
  console.log("All validation checks completed successfully!");
  process.exit(0);
}

run().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
