"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { brand, common, nav, paths, type Locale, type PageKey } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const otherLocale: Locale = locale === "fr" ? "en" : "fr";
  const langHref = paths[pageKey][otherLocale];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/92 backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href={paths.home[locale]} className="flex min-w-[220px] shrink-0 items-center gap-3 2xl:min-w-[250px]" aria-label="Info Dorais">
          <Image src="/images/logo.png" alt="Logo Info Dorais" width={58} height={58} priority className="size-12 shrink-0 object-contain 2xl:size-14" />
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-sm font-black leading-none text-foreground">{brand.name}</span>
            <span className="mt-1 block whitespace-nowrap text-xs text-muted-foreground">
              {locale === "fr" ? "Technicien informatique à Laval" : "IT technician in Laval"}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card xl:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <div
          className={cn(
            "absolute left-0 right-0 top-20 hidden border-b border-border bg-background p-4 shadow-premium xl:static xl:flex xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none",
            open && "block",
          )}
        >
          <nav className="grid gap-2 xl:flex xl:items-center" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
            {nav[locale].map(([label, key]) => {
              const href = paths[key][locale];
              const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
              return (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground xl:px-3 xl:text-sm",
                    active && "bg-accent text-primary",
                  )}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2 xl:ml-3 xl:mt-0 xl:flex xl:items-center">
            <Button asChild variant="secondary" className="col-span-2 xl:col-span-1">
              <a href={brand.phoneHref}>
                <Phone className="size-4" />
                {common[locale].callShort}
              </a>
            </Button>
            <Button asChild className="col-span-2 xl:col-span-1">
              <Link href={`${paths.contact[locale]}#diagnostic`}>{common[locale].diagnostic}</Link>
            </Button>
            <Button asChild variant="secondary" size="icon" aria-label={otherLocale === "fr" ? "Version française" : "English version"}>
              <Link href={langHref} hrefLang={otherLocale === "fr" ? "fr-CA" : "en-CA"}>
                {otherLocale.toUpperCase()}
              </Link>
            </Button>
            <ThemeToggle locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
