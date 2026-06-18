import type { MetadataRoute } from "next";
import { brand, paths, type Locale, type PageKey } from "@/lib/site";

export const dynamic = "force-static";

const pageKeys = Object.keys(paths) as PageKey[];
const locales: Locale[] = ["fr", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((key) => ({
      url: `${brand.baseUrl}${paths[key][locale]}`,
      lastModified: new Date(),
      changeFrequency: key === "home" ? "weekly" : "monthly",
      priority: key === "home" ? 1 : key === "contact" || key === "repair" ? 0.9 : 0.75,
    })),
  );
}
