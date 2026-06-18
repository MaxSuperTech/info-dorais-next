import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";
import { LocalBusinessJsonLd } from "@/components/structured-data";

export const metadata: Metadata = pageMetadata("en", "home");

export default function EnglishHomePage() {
  return <><LocalBusinessJsonLd locale="en" /><SiteHeader locale="en" pageKey="home" /><SitePage locale="en" pageKey="home" /><SiteFooter locale="en" /></>;
}
