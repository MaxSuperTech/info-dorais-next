import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("fr", "contact");

export default function ContactPage() {
  return <><SiteHeader locale="fr" pageKey="contact" /><SitePage locale="fr" pageKey="contact" /><SiteFooter locale="fr" /></>;
}
