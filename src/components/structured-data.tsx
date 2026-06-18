import { brand, faqByPage, pages, paths, type Locale, type PageKey } from "@/lib/site";

export function LocalBusinessJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    image: `${brand.baseUrl}/images/logo.png`,
    url: brand.baseUrl,
    telephone: "+14502410302",
    email: brand.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Laval",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    areaServed: ["Laval", "Chomedey", "Sainte-Dorothée", "Sainte-Rose", "Fabreville", "Rive-Nord"],
    description:
      locale === "fr"
        ? "Réparation ordinateur, technicien informatique et support informatique à Laval pour particuliers et PME."
        : "Computer repair, IT technician and IT support in Laval for homes and small businesses.",
    makesOffer: [
      "Réparation ordinateur Laval",
      "Technicien informatique Laval",
      "Support informatique Laval",
      "Réparation PC Laval",
      "Support à distance",
      "Suppression de virus",
      "Installation Windows",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const faqs = faqByPage[locale][pageKey];
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceJsonLd({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  if (!["services", "repair", "remote", "pme"].includes(pageKey)) {
    return null;
  }

  const page = pages[locale][pageKey];
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title.replace(" | Info Dorais", ""),
    description: page.description,
    image: `${brand.baseUrl}${page.image}`,
    areaServed: {
      "@type": "City",
      name: "Laval",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    provider: {
      "@type": "LocalBusiness",
      name: brand.name,
      telephone: "+14502410302",
      url: brand.baseUrl,
    },
    url: `${brand.baseUrl}${paths[pageKey][locale]}`,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
