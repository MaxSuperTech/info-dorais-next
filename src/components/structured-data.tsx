import { brand, type Locale } from "@/lib/site";

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
