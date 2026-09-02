import { MetadataRoute } from "next";
import { getTreatments } from "@/app/actions/treatments";
import { getBlogs } from "@/app/actions/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smiles4udentalclinic.in";

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic treatments
  let treatmentRoutes: MetadataRoute.Sitemap = [];
  try {
    const treatments = await getTreatments();
    treatmentRoutes = treatments.map((t) => ({
      url: `${baseUrl}/treatments/${t.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating treatments for sitemap:", error);
  }

  // Dynamic blogs
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getBlogs();
    blogRoutes = blogs.map((b) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating blogs for sitemap:", error);
  }

  return [...staticRoutes, ...treatmentRoutes, ...blogRoutes];
}
