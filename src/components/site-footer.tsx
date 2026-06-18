import Link from "next/link";
import { brand, common, nav, paths, type Locale } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <strong className="text-foreground">{brand.name}</strong>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">{common[locale].footer}</p>
        </div>
        <div>
          <strong className="text-sm text-foreground">Navigation</strong>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            {nav[locale].slice(1, 5).map(([label, key]) => (
              <Link key={key} href={paths[key][locale]} className="hover:text-primary">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <strong className="text-sm text-foreground">Contact</strong>
          <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <a href={brand.phoneHref} className="hover:text-primary">{brand.phone}</a>
            <a href={brand.emailHref} className="hover:text-primary">{brand.email}</a>
            <span>{common[locale].area}</span>
          </div>
        </div>
      </div>
      <div className="container border-t border-border py-5 text-xs text-muted-foreground">
        © 2026 {brand.name}. {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
      </div>
    </footer>
  );
}
