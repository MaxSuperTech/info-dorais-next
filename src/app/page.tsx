import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";
import { LocalBusinessJsonLd } from "@/components/structured-data";

export const metadata: Metadata = pageMetadata("fr", "home");

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd locale="fr" />
      <SiteHeader locale="fr" pageKey="home" />
      <SitePage locale="fr" pageKey="home" />
      <SiteFooter locale="fr" />
    </>
  );
}
