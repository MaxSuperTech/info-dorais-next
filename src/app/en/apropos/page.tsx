import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "about");

export default function EnglishAboutPage() {
  return <><SiteHeader locale="en" pageKey="about" /><SitePage locale="en" pageKey="about" /><SiteFooter locale="en" /></>;
}
