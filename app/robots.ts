import type { MetadataRoute } from "next";

// NOTE: placeholder domain — update once the production domain is known.
const SITE_URL = "https://matco.example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}