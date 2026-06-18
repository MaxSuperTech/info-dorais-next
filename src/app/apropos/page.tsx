import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("fr", "about");

export default function AboutPage() {
  return <><SiteHeader locale="fr" pageKey="about" /><SitePage locale="fr" pageKey="about" /><SiteFooter locale="fr" /></>;
}
