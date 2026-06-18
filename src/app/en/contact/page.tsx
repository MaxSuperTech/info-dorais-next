import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "contact");

export default function EnglishContactPage() {
  return <><SiteHeader locale="en" pageKey="contact" /><SitePage locale="en" pageKey="contact" /><SiteFooter locale="en" /></>;
}
