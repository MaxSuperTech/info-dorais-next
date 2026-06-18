import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "pme");

export default function EnglishPmePage() {
  return <><SiteHeader locale="en" pageKey="pme" /><SitePage locale="en" pageKey="pme" /><SiteFooter locale="en" /></>;
}
