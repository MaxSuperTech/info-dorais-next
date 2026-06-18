import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "repair");

export default function EnglishRepairPage() {
  return <><SiteHeader locale="en" pageKey="repair" /><SitePage locale="en" pageKey="repair" /><SiteFooter locale="en" /></>;
}
