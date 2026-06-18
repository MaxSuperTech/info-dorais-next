import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "services");

export default function EnglishServicesPage() {
  return <><SiteHeader locale="en" pageKey="services" /><SitePage locale="en" pageKey="services" /><SiteFooter locale="en" /></>;
}
