import mongoose from "mongoose";
import Treatment from "../models/Treatment";
import GalleryItem from "../models/GalleryItem";
import Blog from "../models/Blog";
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

const defaultBlogs = [
  {
    slug: "7-simple-ways-to-keep-your-teeth-healthy-every-day",
    title: "7 Simple Ways to Keep Your Teeth Healthy Every Day",
    excerpt: "Discover the daily habits that make a massive difference in your long-term oral hygiene. From brushing patterns to eating habits, learn how to protect your smile.",
    content: `
<h2>Introduction</h2>
<p>Maintaining a healthy, radiant smile does not require complex dental procedures. It is built on small, daily habits that prevent tooth decay, gum disease, and bad breath. Implementing these seven simple tips will help keep your teeth healthy, strong, and sparkling every single day.</p>

<h2>1. Brush Twice a Day with Fluoride Toothpaste</h2>
<p>Brushing is the foundation of oral care, but frequency and technique matter. Always brush at least twice a day—once in the morning and once before going to bed. Use a soft-bristled toothbrush to protect your enamel and gums, and ensure your toothpaste contains fluoride. Fluoride strengthens tooth enamel and helps prevent cavities by fighting off decay-causing bacteria.</p>

<h2>2. Don't Neglect Flossing</h2>
<p>Even the best toothbrush cannot reach the tight spaces between your teeth. Flossing is essential to remove plaque and food particles that accumulate where toothbrush bristles cannot enter. Neglecting to floss allows plaque to harden into tartar, which can lead to gingivitis and tooth decay. Try to floss at least once a day, preferably before bedtime.</p>

<h2>3. Clean Your Tongue</h2>
<p>Plaque can also build up on your tongue, leading to bad breath (halitosis) and oral hygiene issues. Every time you brush your teeth, take a moment to gently brush your tongue with your toothbrush or use a dedicated tongue scraper. This removes bacteria and keeps your breath feeling fresh.</p>

<h2>4. Stay Hydrated and Rinse After Meals</h2>
<p>Water is the best beverage for your overall health—including your oral health. Drinking water helps wash away food particles and acid left behind after eating. If you cannot brush your teeth immediately after a meal, rinsing your mouth thoroughly with water is a great temporary way to reduce bacteria and protect your enamel.</p>

<h2>5. Limit Sugary and Acidic Foods</h2>
<p>Sugary and acidic foods are primary culprits behind tooth decay. The bacteria in your mouth feed on sugars, converting them into acid that attacks your enamel. Acidic foods and drinks (like citrus fruit juices, sodas, and sports drinks) can directly erode tooth enamel. Enjoy these treats in moderation and rinse your mouth with water afterward.</p>

<h2>6. Avoid Using Your Teeth as Tools</h2>
<p>Using your teeth to open plastic packaging, tear tape, crack nuts, or hold objects can cause micro-fractures, chips, or even complete tooth breakage. Always take a few extra seconds to find a pair of scissors or tools, protecting your teeth from unnecessary physical trauma.</p>

<h2>7. Schedule Regular Dental Checkups Twice a Year</h2>
<p>Even with excellent home care, you still need to see a dentist regularly. A professional dental cleaning removes hardened tartar that home brushing cannot clear. Regular checkups also allow your dentist to detect early signs of cavities, gum issues, or oral health concerns before they develop into painful, expensive problems. Plan to visit Smiles 4 Dental at least twice a year to keep your smile in perfect condition.</p>
    `,
    imageUrl: "/7-ways-to-keep-your-teeth-healthy.webp",
    category: "Prevention",
    readTime: "4 min read"
  },
  {
    slug: "6-signs-that-you-should-visit-a-dentist",
    title: "6 Signs That You Should Visit a Dentist",
    excerpt: "Are you ignoring small dental issues? Learn the six crucial warning signs that indicate it's time to book a professional checkup before problems escalate.",
    content: `
<h2>Introduction</h2>
<p>Many people wait until they are in severe pain before booking a dental appointment. However, dental problems are much easier—and less expensive—to treat when caught early. If you experience any of these six warning signs, it is time to schedule a visit to the dentist immediately.</p>

<h2>1. Persistent Toothache or Throbbing Pain</h2>
<p>Pain is your body's way of telling you that something is wrong. A persistent toothache, throbbing discomfort when chewing, or sudden sharp pain can indicate deep cavities, a cracked tooth, or a serious dental infection (abscess). Ignoring tooth pain will not make it go away; in fact, it can lead to losing the tooth or the infection spreading.</p>

<h2>2. Bleeding or Swollen Gums</h2>
<p>Healthy gums do not bleed when you brush or floss. If you notice blood in the sink after cleaning your teeth, or if your gums appear red, swollen, or tender, it could be an early sign of gingivitis (gum disease). When diagnosed early, gum disease is fully reversible with professional cleaning and improved hygiene.</p>

<h2>3. Tooth Sensitivity to Hot or Cold</h2>
<p>If hot coffee or ice water causes sharp pain or lingering discomfort in your teeth, your enamel may be worn down, or your gum line may have receded, exposing the sensitive roots. Dental sensitivity can also indicate a cracked tooth or a leaking filling. Your dentist can pinpoint the cause and provide protective coatings or fillings to restore comfort.</p>

<h2>4. Chronic Bad Breath (Halitosis)</h2>
<p>Occasional bad breath after eating garlic is normal, but persistent bad breath that does not go away with brushing or mouthwash is a warning sign. It often points to a build-up of bacteria, hidden gum infections, decaying teeth, or dry mouth. A professional dental cleaning and checkup can address the root cause of chronic odor.</p>

<h2>5. Dry Mouth (Xerostomia)</h2>
<p>Saliva is your mouth's natural defense mechanism; it washes away food particles, neutralizes harmful acids, and contains minerals that protect enamel. A constant dry feeling in your mouth can lead to rapid tooth decay and gum disease. Your dentist can help determine why your saliva production is low and recommend moisturizing products.</p>

<h2>6. Sores or Patches That Do Not Heal</h2>
<p>It is common to get occasional mouth sores from accidental cheek bites or spicy foods, which usually heal within a week or two. However, any ulcer, sore, or red/white patch inside your cheeks, gums, or tongue that persists for more than two weeks should be examined by a dentist to rule out serious infections or oral conditions.</p>
    `,
    imageUrl: "/6-signs-that-you-should-visit-dentist.webp",
    category: "Dental Health",
    readTime: "3 min read"
  },
  {
    slug: "what-you-should-know-before-dental-treatment",
    title: "What You Should Know Before Dental Treatment",
    excerpt: "Preparing for a dental procedure? Read this essential guide on how to prepare, what details to share with your dentist, and what to expect during recovery.",
    content: `
<h2>Introduction</h2>
<p>Undergoing a dental treatment—whether it is a simple filling, a root canal, or a dental implant—can feel intimidating. Being well-prepared and knowing what to expect can significantly reduce anxiety and ensure a smooth, comfortable procedure and recovery.</p>

<h2>1. Discuss and Clarify Your Diagnosis</h2>
<p>Before any procedure begins, make sure you fully understand what the treatment entails and why it is recommended. Don't hesitate to ask your dentist questions: How long will it take? What are the benefits? Are there alternative options? Understanding the process builds confidence and helps you make informed choices.</p>

<h2>2. Share Your Full Medical History</h2>
<p>Your oral health is connected to your overall body health. Always provide your dentist with an updated list of your medical conditions, active prescriptions, and over-the-counter medications. Certain conditions (like high blood pressure or diabetes) and medications (like blood thinners) can influence how your body reacts to anesthesia and how quickly your gums heal.</p>

<h2>3. Ask About Anesthesia and Sedation Options</h2>
<p>Modern dentistry offers various ways to make treatments completely painless. From local anesthesia numbing gels to oral sedatives, discuss which option is best suited for your comfort and the complexity of your procedure. If you have dental anxiety, let your dentist know so they can take extra steps to keep you relaxed.</p>

<h2>4. Understand the Costs and Financial Planning</h2>
<p>To avoid unexpected surprises, request a clear estimate of the treatment costs beforehand. If you have dental insurance or a health card (such as MediBuddy), check if the clinic supports cashless settlement or reimbursement options. Knowing the financial details in advance allows you to plan comfortably.</p>

<h2>5. Follow Pre-Procedure and Recovery Instructions</h2>
<p>Your dentist will provide specific pre-op guidelines, especially if you are undergoing sedation (e.g., fasting rules). You should also prepare for the recovery phase. Buy soft foods, arrange for a ride home if you will be receiving deep sedation, and understand the post-care instructions (such as pain management and oral hygiene limits) to ensure quick, complication-free healing.</p>
    `,
    imageUrl: "/what-you-should-know-before-your-treatment.webp",
    category: "Education",
    readTime: "4 min read"
  }
];

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

    // Seed Blogs if empty
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0) {
      console.log("Database: Seeding default blogs...");
      await Blog.insertMany(defaultBlogs);
      console.log(`Database: Successfully seeded ${defaultBlogs.length} blogs.`);
    }
  } catch (error: any) {
    if (error.code === 11000) {
      console.log("Database: Seeding skipped (records already created by another worker).");
    } else {
      console.error("Database Seeding Error:", error);
    }
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
