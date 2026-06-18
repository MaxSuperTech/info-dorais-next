import Image from "next/image";
import Link from "next/link";
import { Suspense, type CSSProperties } from "react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  HardDrive,
  Laptop,
  Mail,
  MonitorCog,
  Network,
  Phone,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  Wifi,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FormStatus } from "@/components/form-status";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaqJsonLd, ServiceJsonLd } from "@/components/structured-data";
import {
  brand,
  common,
  contactItems,
  faqByPage,
  localSeoTerms,
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
      <FaqJsonLd locale={locale} pageKey={pageKey} />
      <ServiceJsonLd locale={locale} pageKey={pageKey} />
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-primary" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(20,85,155,.12),transparent_34%),radial-gradient(circle_at_86%_16%,rgba(20,85,155,.16),transparent_28%)]" />
        <div className="container relative grid min-h-[calc(100dvh-76px)] items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_430px] lg:py-16 xl:grid-cols-[minmax(0,1fr)_470px]">
          <div className="max-w-4xl">
            <Badge className="motion-fade-up">{page.eyebrow}</Badge>
            <h1 className="motion-fade-up motion-delay-1 mt-5 text-4xl font-black leading-[1.02] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              {page.h1}
            </h1>
            <p className="motion-fade-up motion-delay-2 mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{page.lead}</p>
            <div className="motion-fade-up motion-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={brand.phoneHref}>
                  <Phone className="size-5" />
                  {t.call}: {brand.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href={`${paths.contact[locale]}#diagnostic`}>
                  {t.diagnostic}
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
            <div className="motion-fade-up motion-delay-4 mt-9 grid border-y border-border sm:grid-cols-3">
              {proof[locale].map(([title, text]) => (
                <div key={title} className="border-b border-border py-4 sm:border-b-0 sm:border-r sm:px-4 first:sm:pl-0 last:sm:border-r-0">
                  <strong className="font-heading text-sm font-black text-foreground">{title}</strong>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="motion-fade-left motion-delay-2 border border-border bg-card shadow-premium" aria-label={locale === "fr" ? "Résumé du diagnostic" : "Diagnostic summary"}>
            <HybridHeroVisual
              locale={locale}
              pageKey={pageKey}
              image={page.image}
              title={page.title}
              priority={isHome}
            />
            <div className="grid divide-y divide-border">
              {(locale === "fr"
                ? [
                    ["1", "Symptôme", "Vous décrivez ce qui bloque."],
                    ["2", "Cause", "On identifie la meilleure piste."],
                    ["3", "Action", "Appel, distance ou intervention."],
                  ]
                : [
                    ["1", "Symptom", "You describe what is blocking you."],
                    ["2", "Cause", "We identify the best lead."],
                    ["3", "Action", "Call, remote support or service."],
                  ]).map(([number, title, text]) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 p-5">
                  <span className="flex size-10 items-center justify-center bg-primary font-heading text-sm font-black text-primary-foreground">
                    {number}
                  </span>
                  <span>
                    <strong className="block font-heading text-sm font-black">{title}</strong>
                    <span className="mt-1 block text-sm text-muted-foreground">{text}</span>
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {isContact ? <ContactSection locale={locale} /> : <PageBody locale={locale} pageKey={pageKey} />}
    </main>
  );
}

function HybridHeroVisual({
  locale,
  pageKey,
  image,
  title,
  priority,
}: {
  locale: Locale;
  pageKey: PageKey;
  image: string;
  title: string;
  priority: boolean;
}) {
  const config = getHeroVisual(locale, pageKey);
  const Icon = config.Icon;
  const positions = [
    "left-4 top-5",
    "right-4 top-8",
    "left-4 bottom-32",
    "right-4 bottom-36",
  ];

  return (
    <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-foreground">
      <Image
        src={image}
        alt={title}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 430px, 100vw"
        className="image-drift object-cover opacity-70 saturate-[.88]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(7,17,31,.92),rgba(7,17,31,.48)_48%,rgba(20,85,155,.12))]" />
      <div className="hybrid-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute left-8 right-8 top-[45%] h-px bg-background/20" aria-hidden="true" />
      <div className="absolute left-1/2 top-[45%] h-[31%] w-px -translate-x-1/2 bg-background/20" aria-hidden="true" />
      <div className="hybrid-center absolute left-1/2 top-[45%] z-20 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-background/25 bg-background text-primary shadow-premium">
        <Icon className="size-9" strokeWidth={1.8} aria-hidden="true" />
      </div>

      {config.nodes.map(([NodeIcon, label], index) => (
        <div key={label} className={`hybrid-node absolute ${positions[index]} z-20 flex items-center gap-2 border border-background/20 bg-foreground/80 px-3 py-2 text-background shadow-line backdrop-blur`}>
          <NodeIcon className="size-4 shrink-0 text-background" strokeWidth={1.8} aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-background/80">{label}</span>
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 p-5 text-foreground backdrop-blur">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {locale === "fr" ? "Diagnostic express" : "Express diagnostic"}
        </span>
        <strong className="mt-2 block font-heading text-2xl leading-tight">
          {locale === "fr" ? "Comprendre vite. Réparer proprement." : "Understand quickly. Fix cleanly."}
        </strong>
      </div>
    </div>
  );
}

function ContextServiceImage({
  image,
  title,
  Icon,
  items,
  index,
}: {
  image: string;
  title: string;
  Icon: LucideIcon;
  items: string[];
  index: number;
}) {
  const bars = [
    ["w-14", "w-9", "w-12"],
    ["w-10", "w-16", "w-8"],
    ["w-12", "w-8", "w-14"],
    ["w-16", "w-10", "w-12"],
  ][index % 4];

  return (
    <div className="relative h-44 overflow-hidden border-b border-border bg-foreground">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover opacity-[.82] saturate-[.9] transition duration-500 group-hover:scale-[1.035] group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-foreground/92 via-foreground/34 to-primary/10" />
      <div className="hybrid-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="absolute left-4 top-4 flex size-12 items-center justify-center border border-background/20 bg-background text-primary shadow-line">
        <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <div className="absolute right-4 top-4 grid gap-1.5" aria-hidden="true">
        {bars.map((width, barIndex) => (
          <span key={`${width}-${barIndex}`} className={`block h-1.5 ${width} bg-background/55`} />
        ))}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 border border-background/15 bg-foreground/85 px-3 py-2 text-background shadow-line backdrop-blur">
        <span className="min-w-0 truncate text-xs font-bold uppercase tracking-[0.08em]">{items[0]}</span>
        <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
      </div>
    </div>
  );
}

function PageBody({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = common[locale];
  const faqs = faqByPage[locale][pageKey];
  const terms = localSeoTerms[locale];

  return (
    <>
      <section className="section bg-card">
        <div className="container">
          <SectionIntro
            label={locale === "fr" ? "Interventions" : "Interventions"}
            title={
              pageKey === "repair"
                ? locale === "fr"
                  ? "Réparer, nettoyer, réinstaller ou stabiliser."
                  : "Repair, clean, reinstall or stabilize."
                : pageKey === "remote"
                  ? locale === "fr"
                    ? "Résoudre sans déplacement quand c’est possible."
                    : "Solve without a visit when possible."
                  : pageKey === "pme"
                    ? locale === "fr"
                      ? "Un soutien TI clair pour petites équipes."
                      : "Clear IT support for small teams."
                    : locale === "fr"
                      ? "Des services informatiques faciles à comprendre."
                      : "IT services that are easy to understand."
            }
            text={
              locale === "fr"
                ? "Chaque service mène vers une prochaine étape simple: appeler, expliquer le problème ou démarrer une session à distance."
                : "Each service leads to a simple next step: call, explain the issue or start a remote session."
            }
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services[locale].map((service, index) => (
              <Card
                key={service.title}
                className="motion-card group overflow-hidden shadow-none"
                data-animate="lift"
                style={{ "--motion-delay": `${index * 80}ms` } as CSSProperties}
              >
                <ContextServiceImage
                  image={service.image}
                  title={service.title}
                  Icon={service.icon}
                  items={service.items}
                  index={index}
                />
                <CardContent>
                  <service.icon className="mb-4 size-7 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
                  <ul className="mt-5 grid gap-2 border-t border-border pt-4">
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
        <div className="container grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
          <div>
            <Badge className="border-background/70 bg-background/10 text-background">
              {locale === "fr" ? "Laval et environs" : "Laval area"}
            </Badge>
            <h2 className="mt-5 font-heading text-3xl font-black leading-tight sm:text-5xl">
              {locale === "fr"
                ? "Le bon service TI, sans jargon ni attente inutile."
                : "The right IT service, without jargon or unnecessary waiting."}
            </h2>
            <p className="mt-5 max-w-xl text-background/75">
              {locale === "fr"
                ? "Info Dorais cible les vrais besoins locaux: réparation ordinateur Laval, technicien informatique Laval, support informatique Laval et réparation PC Laval."
                : "Info Dorais targets real local needs: computer repair Laval, IT technician Laval, IT support Laval and PC repair Laval."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={brand.phoneHref}>{t.callShort}</a>
              </Button>
              <Button asChild variant="outline" className="border-background/35 text-background hover:bg-background/10">
                <Link href={paths.contact[locale]}>{t.diagnostic}</Link>
              </Button>
            </div>
          </div>
          <div className="grid border border-background/15 sm:grid-cols-2">
            {serviceDetails[locale].map(([title, text, Icon], index) => (
              <div
                key={title}
                className="border-b border-background/15 p-5 sm:border-r even:sm:border-r-0"
                data-animate="fade-up"
                style={{ "--motion-delay": `${index * 55}ms` } as CSSProperties}
              >
                <Icon className="size-6 text-background" aria-hidden="true" />
                <h3 className="mt-4 font-heading font-black text-background">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-background/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            label={t.process}
            title={t.processTitle}
            text={
              locale === "fr"
                ? "Une approche en trois temps pour éviter les suppositions et aller vers la solution la plus logique."
                : "A three-step approach to avoid guessing and move toward the most logical solution."
            }
            centered
          />
          <div className="grid border border-border bg-card md:grid-cols-3">
            {processSteps[locale].map(([title, text], index) => (
              <div
                key={title}
                className="border-b border-border p-6 md:border-b-0 md:border-r last:md:border-r-0"
                data-animate="fade-up"
                style={{ "--motion-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="flex size-10 items-center justify-center bg-primary font-heading text-sm font-black text-primary-foreground">{index + 1}</div>
                <h3 className="mt-5 font-heading text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div data-animate="fade-up">
            <Badge>{locale === "fr" ? "À Laval" : "Laval area"}</Badge>
            <h2 className="mt-4 font-heading text-3xl font-black leading-tight sm:text-5xl">
              {locale === "fr" ? "Trouvez vite le bon technicien informatique à Laval." : "Find the right IT technician in Laval quickly."}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {locale === "fr"
                ? "Que vous cherchiez une réparation ordinateur Laval, un support informatique Laval ou une réparation PC Laval, l’objectif reste le même: comprendre vite le problème et choisir la bonne intervention."
                : "Whether you need computer repair Laval, IT support Laval or PC repair Laval, the goal stays the same: understand the issue quickly and choose the right intervention."}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {terms.map((term) => (
                <span key={term} className="border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-bold text-primary">
                  {term}
                </span>
              ))}
            </div>
          </div>
          <FaqSection locale={locale} faqs={faqs} />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="border border-primary/30 bg-primary/10 p-6 shadow-line sm:p-10" data-animate="zoom">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl">
                  {locale === "fr" ? "Besoin d’un technicien informatique à Laval?" : "Need an IT technician in Laval?"}
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  {locale === "fr"
                    ? "Appelez maintenant ou envoyez une demande de diagnostic. Le but: comprendre vite, réparer proprement et vous redonner le contrôle."
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
        </div>
      </section>
    </>
  );
}

function FaqSection({ locale, faqs }: { locale: Locale; faqs: [string, string][] }) {
  return (
    <div className="border border-border bg-background shadow-line" data-animate="fade-left">
      <div className="border-b border-border p-5 sm:p-6">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {locale === "fr" ? "Questions courantes" : "Common questions"}
        </span>
        <h3 className="mt-2 font-heading text-2xl font-black">
          {locale === "fr" ? "Réponses rapides avant d’appeler." : "Quick answers before calling."}
        </h3>
      </div>
      <div className="divide-y divide-border">
        {faqs.map(([question, answer], index) => (
          <details key={question} className="group p-5 open:bg-primary/5 sm:p-6" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-black">
              <span>{question}</span>
              <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function ContactSection({ locale }: { locale: Locale }) {
  const t = common[locale];
  const faqs = faqByPage[locale].contact;

  return (
    <section className="section" id="diagnostic">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <Card className="shadow-premium" data-animate="zoom">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <FileText className="size-7 text-primary" />
              <h2 className="font-heading text-3xl font-black">{t.formTitle}</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {locale === "fr"
                ? "Ajoutez les symptômes, le type d’appareil et l’urgence. Vous recevrez la prochaine étape la plus logique."
                : "Add the symptoms, device type and urgency. You will receive the most logical next step."}
            </p>
            <div className="mt-5 border-l-2 border-primary bg-primary/10 p-4 text-sm">
              <ShieldCheck className="mb-2 size-5 text-primary" aria-hidden="true" />
              {locale === "fr"
                ? "Pour une urgence, appelez directement. Pour un diagnostic détaillé, le formulaire est idéal."
                : "For urgent issues, call directly. For a detailed diagnostic, the form is ideal."}
            </div>
            <Suspense fallback={null}>
              <FormStatus locale={locale} />
            </Suspense>
            <form className="mt-6 grid gap-4" action="/contact.php" method="post">
              <input type="hidden" name="lang" value={locale} />
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-bold">{t.name}</label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-bold">{t.email}</label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-bold">{t.phone}</label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-bold">{t.message}</label>
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
                  {locale === "fr" ? "Vérification anti-spam." : "Anti-spam verification."}
                </p>
              </div>
              <Button type="submit" size="lg">
                <Mail className="size-5" />
                {t.submit}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div data-animate="fade-left">
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
            {contactItems.map((item, index) => {
              const content = (
                <div
                  className="focus-card flex gap-4 p-4"
                  data-animate="fade-up"
                  style={{ "--motion-delay": `${index * 60}ms` } as CSSProperties}
                >
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
      <div className="container mt-10">
        <FaqSection locale={locale} faqs={faqs} />
      </div>
    </section>
  );
}

function VectorShowcase({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const config = getHeroVisual(locale, pageKey);
  const positions = ["left-5 top-[34%]", "right-5 top-[39%]", "left-6 top-[56%]", "right-6 top-[60%]"];
  const Icon = config.Icon;

  return (
    <div className="absolute inset-x-0 top-0 bottom-28 overflow-hidden">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute left-6 right-6 top-6 border border-background/15 bg-background/10 p-4 text-background">
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-background/60">
          {locale === "fr" ? "Plan d’intervention" : "Service map"}
        </span>
        <strong className="mt-2 block font-heading text-xl font-black leading-tight">{config.title}</strong>
      </div>

      <div className="absolute left-1/2 top-[68%] z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-background/20 bg-background text-primary shadow-premium sm:size-24">
        <Icon className="size-9 sm:size-10" strokeWidth={1.7} aria-hidden="true" />
      </div>

      <div className="absolute left-1/2 top-[68%] h-px w-[72%] -translate-x-1/2 bg-background/20" />
      <div className="absolute left-1/2 top-[38%] h-[42%] w-px bg-background/20" />

      {config.nodes.map(([NodeIcon, label], index) => (
        <div
          key={label}
          className={`absolute ${positions[index]} z-20 flex min-w-[8.5rem] items-center gap-2 border border-background/15 bg-foreground/75 p-3 text-background shadow-line`}
        >
          <NodeIcon className="size-5 shrink-0 text-background/90" strokeWidth={1.8} aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-background/80">{label}</span>
        </div>
      ))}
    </div>
  );
}

function ServiceVectorTile({ Icon, index }: { Icon: LucideIcon; index: number }) {
  const bars = [
    ["h-6 bg-background/45", "h-12 bg-background/80", "h-8 bg-background/45"],
    ["h-10 bg-background/45", "h-7 bg-background/80", "h-14 bg-background/45"],
    ["h-8 bg-background/45", "h-14 bg-background/80", "h-10 bg-background/45"],
    ["h-12 bg-background/45", "h-8 bg-background/80", "h-6 bg-background/45"],
  ][index % 4];

  return (
    <div className="relative h-44 overflow-hidden border-b border-border bg-foreground" aria-hidden="true">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="absolute left-5 top-5 flex size-14 items-center justify-center border border-background/20 bg-background text-primary">
        <Icon className="size-7" strokeWidth={1.8} />
      </div>
      <div className="absolute right-5 top-6 grid gap-2">
        <span className="block h-2 w-20 bg-background/75" />
        <span className="block h-2 w-14 bg-background/40" />
        <span className="block h-2 w-24 bg-background/25" />
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-end gap-3 border-t border-background/20 pt-5">
        {bars.map((height, barIndex) => (
          <span key={`${height}-${barIndex}`} className={`${height} w-1/3`} />
        ))}
      </div>
      <div className="absolute bottom-5 right-5 size-9 border border-background/20 bg-primary/80" />
    </div>
  );
}

function getHeroVisual(locale: Locale, pageKey: PageKey): { Icon: LucideIcon; title: string; nodes: [LucideIcon, string][] } {
  const fr = locale === "fr";

  switch (pageKey) {
    case "repair":
      return {
        Icon: Wrench,
        title: fr ? "Diagnostic PC et remise en état" : "PC diagnostics and recovery",
        nodes: [
          [Laptop, "PC"],
          [HardDrive, fr ? "Données" : "Data"],
          [Settings, "Windows"],
          [Cpu, fr ? "Matériel" : "Hardware"],
        ],
      };
    case "remote":
      return {
        Icon: MonitorCog,
        title: fr ? "Session à distance encadrée" : "Guided remote session",
        nodes: [
          [Wifi, "Connexion"],
          [ShieldCheck, fr ? "Accès sûr" : "Safe access"],
          [Settings, "Windows"],
          [CheckCircle2, fr ? "Résolu" : "Solved"],
        ],
      };
    case "pme":
      return {
        Icon: Building2,
        title: fr ? "Postes, réseau et sauvegardes" : "Workstations, network and backups",
        nodes: [
          [Server, "PME"],
          [Network, fr ? "Réseau" : "Network"],
          [Database, fr ? "Sauvegarde" : "Backup"],
          [ShieldCheck, fr ? "Sécurité" : "Security"],
        ],
      };
    case "about":
      return {
        Icon: Sparkles,
        title: fr ? "Support humain et méthode claire" : "Human support and clear process",
        nodes: [
          [CheckCircle2, fr ? "Clarté" : "Clarity"],
          [ShieldCheck, fr ? "Confiance" : "Trust"],
          [Wrench, fr ? "Résultat" : "Result"],
          [Laptop, fr ? "Terrain" : "Hands-on"],
        ],
      };
    case "contact":
      return {
        Icon: FileText,
        title: fr ? "Demande claire, réponse utile" : "Clear request, useful reply",
        nodes: [
          [Phone, fr ? "Appel" : "Call"],
          [Mail, fr ? "Courriel" : "Email"],
          [FileText, fr ? "Détails" : "Details"],
          [CheckCircle2, fr ? "Suite" : "Next"],
        ],
      };
    case "services":
      return {
        Icon: Settings,
        title: fr ? "Services TI organisés par besoin" : "IT services organized by need",
        nodes: [
          [Laptop, fr ? "Réparation" : "Repair"],
          [ShieldCheck, fr ? "Virus" : "Virus"],
          [MonitorCog, fr ? "Distance" : "Remote"],
          [Building2, "PME"],
        ],
      };
    default:
      return {
        Icon: MonitorCog,
        title: fr ? "Réparer, sécuriser, stabiliser" : "Repair, secure, stabilize",
        nodes: [
          [Laptop, fr ? "Ordinateur" : "Computer"],
          [ShieldCheck, fr ? "Virus" : "Virus"],
          [Wifi, "Wi-Fi"],
          [Building2, "PME"],
        ],
      };
  }
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
    <div className={centered ? "mx-auto mb-10 max-w-2xl text-center" : "mb-10 max-w-3xl"} data-animate="fade-up">
      <Badge>{label}</Badge>
      <h2 className="mt-4 font-heading text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-muted-foreground">{text}</p> : null}
    </div>
  );
}
