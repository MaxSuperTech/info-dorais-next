import type { Metadata } from "next";
import { brand, pages, paths, type Locale, type PageKey } from "@/lib/site";

export function pageMetadata(locale: Locale, pageKey: PageKey): Metadata {
  const page = pages[locale][pageKey];
  const path = paths[pageKey][locale];
  const otherLocale = locale === "fr" ? "en" : "fr";

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
      languages: {
        "fr-CA": paths[pageKey].fr,
        "en-CA": paths[pageKey].en,
        "x-default": paths[pageKey].fr,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${brand.baseUrl}${path}`,
      siteName: brand.name,
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      alternateLocale: otherLocale === "fr" ? "fr_CA" : "en_CA",
      images: [{ url: "/images/logo.png", width: 1080, height: 1080, alt: "Info Dorais" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/images/logo.png"],
    },
  };
}
