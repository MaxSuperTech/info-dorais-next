import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("fr", "pme");

export default function PmePage() {
  return <><SiteHeader locale="fr" pageKey="pme" /><SitePage locale="fr" pageKey="pme" /><SiteFooter locale="fr" /></>;
}
