import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePage } from "@/components/site-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("fr", "remote");

export default function RemotePage() {
  return <><SiteHeader locale="fr" pageKey="remote" /><SitePage locale="fr" pageKey="remote" /><SiteFooter locale="fr" /></>;
}
