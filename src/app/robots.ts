import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smiles4udentalclinic.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
