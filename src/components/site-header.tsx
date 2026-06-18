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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="container flex min-h-[76px] items-center justify-between gap-4 xl:min-h-[72px]">
        <Link href={paths.home[locale]} className="flex min-w-[218px] shrink-0 items-center gap-3 2xl:min-w-[248px]" aria-label="Info Dorais">
          <Image src="/images/logo.png" alt="Logo Info Dorais" width={58} height={58} priority className="size-11 shrink-0 object-contain 2xl:size-12" />
          <span className="min-w-0">
            <span className="block whitespace-nowrap font-heading text-sm font-black leading-none text-foreground">{brand.name}</span>
            <span className="mt-1 block whitespace-nowrap text-[11px] font-medium text-muted-foreground">
              {locale === "fr" ? "Technicien informatique à Laval" : "IT technician in Laval"}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm border border-border bg-card xl:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <div
          className={cn(
            "absolute left-0 right-0 top-[76px] hidden border-b border-border bg-background p-4 shadow-premium xl:static xl:flex xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none",
            open && "block",
          )}
        >
          <nav className="grid gap-1 xl:flex xl:items-center xl:gap-1" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
            {nav[locale].map(([label, key]) => {
              const href = paths[key][locale];
              const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
              return (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    "flex min-h-11 items-center whitespace-nowrap border-l-2 border-transparent px-3 py-2 text-sm font-bold text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-foreground xl:min-h-0 xl:border-l-0 xl:border-b-2 xl:px-2.5 xl:py-6 xl:text-[13px] 2xl:px-3 2xl:text-sm",
                    active && "border-primary bg-accent text-primary xl:bg-transparent",
                  )}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2 xl:ml-4 xl:mt-0 xl:flex xl:items-center">
            <Button asChild variant="secondary" className="col-span-2 xl:col-span-1">
              <a href={brand.phoneHref}>
                <Phone className="size-4" />
                {common[locale].callShort}
              </a>
            </Button>
            <Button asChild className="col-span-2 xl:col-span-1">
              <Link href={`${paths.contact[locale]}#diagnostic`}>
                <span className="xl:hidden min-[1400px]:inline">{common[locale].diagnostic}</span>
                <span className="hidden xl:inline min-[1400px]:hidden">{locale === "fr" ? "Diagnostic" : "Diagnostic"}</span>
              </Link>
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
