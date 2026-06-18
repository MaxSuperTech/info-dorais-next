import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("fr", "repair");

export default function RepairPage() {
  return <><SiteHeader locale="fr" pageKey="repair" /><SitePage locale="fr" pageKey="repair" /><SiteFooter locale="fr" /></>;
}
