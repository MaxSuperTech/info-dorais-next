import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("fr", "services");

export default function ServicesPage() {
  return <><SiteHeader locale="fr" pageKey="services" /><SitePage locale="fr" pageKey="services" /><SiteFooter locale="fr" /></>;
}
