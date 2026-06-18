import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FormStatus } from "@/components/form-status";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  brand,
  common,
  contactItems,
  pages,
  paths,
  processSteps,
  proof,
  serviceDetails,
  services,
  type Locale,
  type PageKey,
} from "@/lib/site";

const turnstileSiteKey = "REMPLACE_PAR_TA_CLE_SITE_TURNSTILE";

export function SitePage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = common[locale];
  const page = pages[locale][pageKey];
  const isHome = pageKey === "home";
  const isContact = pageKey === "contact";

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_12%,rgba(19,84,156,.14),transparent_34%),linear-gradient(180deg,transparent,rgba(19,84,156,.05))]" />
        <div className="container relative grid min-h-[calc(100vh-5rem)] items-center gap-10 py-10 lg:grid-cols-[1.02fr_.78fr] lg:py-16">
          <div>
            <Badge>{page.eyebrow}</Badge>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{page.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={brand.phoneHref}>
                  <Phone className="size-5" />
                  {t.call}: {brand.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={`${paths.contact[locale]}#diagnostic`}>
                  {t.diagnostic}
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proof[locale].map(([title, text]) => (
                <div key={title} className="border-l-2 border-primary bg-background/70 p-4">
                  <strong className="text-sm text-foreground">{title}</strong>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-foreground shadow-premium sm:min-h-[480px]">
            <Image src={page.image} alt="" fill priority={isHome} sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover opacity-75" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent p-6 text-background">
              <strong className="block text-2xl leading-tight">
                {locale === "fr" ? "Un diagnostic clair avant de perdre votre journée." : "A clear diagnostic before losing your day."}
              </strong>
              <span className="mt-2 block text-sm text-background/80">
                {locale === "fr"
                  ? "Vous savez ce qui bloque, ce qui peut être réparé et quoi faire ensuite."
                  : "You know what is blocking you, what can be fixed and what to do next."}
              </span>
            </div>
          </div>
        </div>
      </section>

      {isContact ? <ContactSection locale={locale} /> : <PageBody locale={locale} pageKey={pageKey} />}
    </main>
  );
}

function PageBody({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = common[locale];

  return (
    <>
      <section className="section">
        <div className="container">
          <SectionIntro
            label={locale === "fr" ? "Services recherchés" : "Popular services"}
            title={
              pageKey === "repair"
                ? locale === "fr"
                  ? "Réparation, nettoyage et remise en état."
                  : "Repair, cleanup and recovery."
                : pageKey === "remote"
                  ? locale === "fr"
                    ? "Une session encadrée, temporaire et claire."
                    : "A guided, temporary and clear session."
                  : pageKey === "pme"
                    ? locale === "fr"
                      ? "Moins d’interruptions, plus de clarté."
                      : "Fewer interruptions, more clarity."
                    : locale === "fr"
                      ? "Les problèmes informatiques courants, traités avec méthode."
                      : "Common computer problems, handled methodically."
            }
            text={
              locale === "fr"
                ? "Chaque section mène vers une action simple : appeler, demander un diagnostic ou démarrer un support à distance lorsque c’est possible."
                : "Each section leads to a simple action: call, request a diagnostic or start remote support when possible."
            }
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services[locale].map((service) => (
              <Card key={service.title} className="group overflow-hidden">
                <div className="relative h-44">
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition-opacity group-hover:opacity-90" />
                </div>
                <CardContent>
                  <service.icon className="mb-4 size-7 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
                  <ul className="mt-4 grid gap-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="secondary" className="mt-5 w-full">
                    <Link href={service.href}>{t.seeServices}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-foreground text-background">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Badge className="border-background/20 bg-background/10 text-background">
              {pageKey === "pme" ? "PME" : "SEO local"}
            </Badge>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
              {locale === "fr"
                ? "Pensé pour Laval, écrit pour les vrais problèmes."
                : "Built for Laval, written for real problems."}
            </h2>
            <p className="mt-5 text-background/75">
              {locale === "fr"
                ? "Le site cible les requêtes locales qui amènent des appels qualifiés, tout en gardant un langage simple pour les clients."
                : "The site targets local searches that bring qualified calls while keeping the language simple for clients."}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={brand.phoneHref}>{t.callShort}</a>
              </Button>
              <Button asChild variant="outline" className="border-background/30 text-background hover:bg-background/10">
                <Link href={paths.contact[locale]}>{t.diagnostic}</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceDetails[locale].map(([title, text, Icon]) => (
              <div key={title} className="rounded-lg border border-background/15 bg-background/5 p-5">
                <Icon className="size-6 text-background" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-background">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-background/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro label={t.process} title={t.processTitle} centered />
          <div className="grid gap-5 md:grid-cols-3">
            {processSteps[locale].map(([title, text], index) => (
              <Card key={title}>
                <CardContent>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 font-black text-primary">{index + 1}</div>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container rounded-lg border border-border bg-card p-6 shadow-premium sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                {locale === "fr" ? "Besoin d’un technicien informatique à Laval?" : "Need an IT technician in Laval?"}
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                {locale === "fr"
                  ? "Appelez maintenant ou envoyez une demande de diagnostic. L’objectif : comprendre vite, réparer proprement et vous redonner le contrôle."
                  : "Call now or send a diagnostic request. The goal: understand quickly, fix cleanly and get you back in control."}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={brand.phoneHref}>{brand.phone}</a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={`${paths.contact[locale]}#diagnostic`}>{t.diagnostic}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactSection({ locale }: { locale: Locale }) {
  const t = common[locale];

  return (
    <section className="section" id="diagnostic">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <Card className="shadow-premium">
          <CardContent>
            <div className="flex items-center gap-3">
              <FileText className="size-7 text-primary" />
              <h2 className="text-3xl font-black">{t.formTitle}</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {locale === "fr"
                ? "Le formulaire envoie la demande par courriel via PHP sur votre hébergement HestiaCP."
                : "The form sends the request by email through PHP on your HestiaCP hosting."}
            </p>
            <Suspense fallback={null}>
              <FormStatus locale={locale} />
            </Suspense>
            <form className="mt-6 grid gap-4" action="/contact.php" method="post">
              <input type="hidden" name="lang" value={locale} />
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-semibold">{t.name}</label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-semibold">{t.email}</label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold">{t.phone}</label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-semibold">{t.message}</label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder={
                    locale === "fr"
                      ? "Exemple : PC lent depuis une mise à jour, virus suspect, courriel bloqué..."
                      : "Example: slow PC after an update, suspected virus, blocked email..."
                  }
                />
              </div>
              <div className="grid gap-2">
                <div
                  className="cf-turnstile"
                  data-sitekey={turnstileSiteKey}
                  data-theme="auto"
                  data-language={locale === "fr" ? "fr" : "en"}
                />
                <p className="text-xs text-muted-foreground">
                  {locale === "fr"
                    ? "Protection anti-spam Cloudflare Turnstile."
                    : "Cloudflare Turnstile anti-spam protection."}
                </p>
              </div>
              <Button type="submit" size="lg">
                <Mail className="size-5" />
                {t.submit}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div>
          <SectionIntro
            label="Info Dorais"
            title={locale === "fr" ? "Appel, courriel ou diagnostic." : "Call, email or diagnostic."}
            text={
              locale === "fr"
                ? "Pour une urgence, l’appel reste le chemin le plus rapide."
                : "For urgent issues, calling remains the fastest path."
            }
          />
          <div className="grid gap-3">
            {contactItems.map((item) => {
              const content = (
                <div className="focus-card flex gap-4 p-4">
                  <item.icon className="mt-1 size-5 shrink-0 text-primary" />
                  <span>
                    <strong className="block text-sm">{item.label}</strong>
                    <span className="mt-1 block text-sm text-muted-foreground">{item.value}</span>
                  </span>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>{content}</a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
          <Button asChild variant="secondary" className="mt-5">
            <a href="https://anydesk.com/fr/downloads/windows" target="_blank" rel="noreferrer">
              {locale === "fr" ? "Télécharger AnyDesk" : "Download AnyDesk"}
              <ExternalLink className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  label,
  title,
  text,
  centered,
}: {
  label: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-2xl text-center" : "mb-10 max-w-3xl"}>
      <Badge>{label}</Badge>
      <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-muted-foreground">{text}</p> : null}
    </div>
  );
}
