import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "remote");

export default function EnglishRemotePage() {
  return <><SiteHeader locale="en" pageKey="remote" /><SitePage locale="en" pageKey="remote" /><SiteFooter locale="en" /></>;
}
