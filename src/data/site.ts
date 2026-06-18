import { brandColors } from "@/data/brand-colors";

export type Locale = "fr" | "en";

export type PageKey =
  | "home"
  | "services"
  | "repair"
  | "remote"
  | "maintenance"
  | "business"
  | "emailWeb"
  | "about"
  | "faq"
  | "contact"
  | "privacy";

export type IconName =
  | "arrow"
  | "building"
  | "check"
  | "clock"
  | "database"
  | "globe"
  | "hard-drive"
  | "laptop"
  | "mail"
  | "monitor"
  | "phone"
  | "shield"
  | "sparkles"
  | "tool"
  | "wifi";

export const brand = {
  name: "Info Dorais",
  owner: "Maxime Dorais",
  phone: "(450) 241-0302",
  phoneHref: "tel:+14502410302",
  email: "contact@infodorais.com",
  emailHref: "mailto:contact@infodorais.com",
  baseUrl: "https://infodorais.com",
  logo: "/images/logo.png",
  primary: brandColors.primary,
  city: "Laval",
  region: "QC",
  country: "CA",
  areaServed: [
    "Laval",
    "Montréal",
    "Rive-Nord",
    "Terrebonne",
    "Blainville",
    "Boisbriand",
    "Sainte-Thérèse",
    "Rosemère",
    "Lorraine",
    "Mascouche",
    "Repentigny",
    "Saint-Eustache",
    "Deux-Montagnes",
    "Québec à distance",
  ],
};

export const paths: Record<PageKey, Record<Locale, string>> = {
  home: { fr: "/", en: "/en/" },
  services: { fr: "/services", en: "/en/services" },
  repair: { fr: "/reparation-ordinateur", en: "/en/reparation-ordinateur" },
  remote: { fr: "/support-distance", en: "/en/support-distance" },
  maintenance: { fr: "/entretien-optimisation", en: "/en/maintenance-optimization" },
  business: { fr: "/pme", en: "/en/small-business" },
  emailWeb: { fr: "/courriel-solutions-web", en: "/en/email-web-solutions" },
  about: { fr: "/apropos", en: "/en/about" },
  faq: { fr: "/faq", en: "/en/faq" },
  contact: { fr: "/contact", en: "/en/contact" },
  privacy: { fr: "/politique-confidentialite", en: "/en/privacy-policy" },
};

export const nav: Record<Locale, { label: string; key: PageKey }[]> = {
  fr: [
    { label: "Accueil", key: "home" },
    { label: "Services", key: "services" },
    { label: "Réparation", key: "repair" },
    { label: "À distance", key: "remote" },
    { label: "PME", key: "business" },
    { label: "FAQ", key: "faq" },
    { label: "Contact", key: "contact" },
  ],
  en: [
    { label: "Home", key: "home" },
    { label: "Services", key: "services" },
    { label: "Repair", key: "repair" },
    { label: "Remote", key: "remote" },
    { label: "Business", key: "business" },
    { label: "FAQ", key: "faq" },
    { label: "Contact", key: "contact" },
  ],
};

export const ui = {
  fr: {
    call: "Appeler maintenant",
    diagnostic: "Demander un diagnostic",
    message: "Écrire un message",
    quote: "Demander une soumission",
    remote: "Support à distance",
    services: "Voir les services",
    learn: "En savoir plus",
    theme: "Changer de thème",
    language: "English",
    menu: "Menu",
    close: "Fermer",
    contactTitle: "Demande de diagnostic",
    name: "Nom",
    email: "Courriel",
    phone: "Téléphone",
    details: "Description du besoin",
    submit: "Envoyer la demande",
    privacy: "Politique de confidentialité",
  },
  en: {
    call: "Call now",
    diagnostic: "Request a diagnostic",
    message: "Send a message",
    quote: "Request a quote",
    remote: "Remote support",
    services: "View services",
    learn: "Learn more",
    theme: "Change theme",
    language: "Français",
    menu: "Menu",
    close: "Close",
    contactTitle: "Diagnostic request",
    name: "Name",
    email: "Email",
    phone: "Phone",
    details: "Describe the need",
    submit: "Send request",
    privacy: "Privacy policy",
  },
};

export const pages = {
  fr: {
    home: {
      title: "Support informatique et réparation ordinateur Laval | Info Dorais",
      description:
        "Info Dorais offre réparation ordinateur, support informatique, entretien, virus, Windows, courriel professionnel et soutien PME à Laval et environs.",
      eyebrow: "Service informatique Laval et environs",
      h1: "Un service informatique simple, humain et efficace pour régler vos problèmes rapidement.",
      lead:
        "Réparation d’ordinateur, ordinateur lent, virus, installation Windows, courriel professionnel ou soutien PME: Info Dorais vous aide avec des explications claires et des solutions concrètes.",
      image: "/images/hero-refresh.webp",
      intro: "Dès le premier contact, on cherche la meilleure intervention: appel, diagnostic, support à distance ou déplacement si nécessaire.",
    },
    services: {
      title: "Services informatiques Laval et environs | Info Dorais",
      description:
        "Réparation PC, soutien informatique, entretien, suppression de virus, support à distance, courriel professionnel et services PME à Laval.",
      eyebrow: "Services informatiques",
      h1: "Des services informatiques clairs pour particuliers, travailleurs autonomes et petites entreprises.",
      lead:
        "Une offre complète, sans jargon inutile, pour diagnostiquer, réparer, optimiser et stabiliser vos outils informatiques.",
      image: "/images/repair-refresh.webp",
      intro: "Les services sont regroupés par besoin pour vous aider à trouver rapidement la bonne solution.",
    },
    repair: {
      title: "Réparation ordinateur Laval | Réparation PC et portable | Info Dorais",
      description:
        "Réparation ordinateur Laval, réparation PC Laval, portable lent, diagnostic, matériel informatique, transfert de données et installation Windows.",
      eyebrow: "Réparation ordinateur Laval",
      h1: "Votre PC ou portable ralentit, bloque ou ne démarre plus?",
      lead:
        "Info Dorais identifie la cause, protège vos données quand c’est possible, puis propose une réparation réaliste: optimisation, matériel, Windows ou transfert.",
      image: "/images/repair-refresh.webp",
      intro: "L’objectif n’est pas de vendre une intervention inutile: on clarifie le problème et on vous explique les options.",
    },
    remote: {
      title: "Support informatique à distance Québec | Info Dorais",
      description:
        "Support informatique à distance pour Windows, courriel, logiciels, imprimantes, configuration et dépannage rapide partout au Québec.",
      eyebrow: "Support à distance",
      h1: "Une aide informatique rapide quand le problème peut se régler sans déplacement.",
      lead:
        "Parfait pour les blocages Windows, courriels, logiciels, imprimantes, configuration et accompagnement pas à pas.",
      image: "/images/remote-refresh.webp",
      intro: "La connexion est temporaire, expliquée et utilisée seulement quand le support à distance est approprié.",
    },
    maintenance: {
      title: "Entretien ordinateur Laval | Optimisation ordinateur lent | Info Dorais",
      description:
        "Entretien informatique, optimisation d’ordinateur lent, nettoyage, mises à jour, sécurité de base et prévention à Laval et environs.",
      eyebrow: "Entretien et optimisation",
      h1: "Redonnez de la stabilité à un ordinateur lent avant de penser à le remplacer.",
      lead:
        "Nettoyage, optimisation Windows, vérification de sécurité, mises à jour, démarrage et conseils pour prolonger la vie de votre ordinateur.",
      image: "/images/security-refresh.webp",
      intro: "Un entretien bien fait réduit les irritants, améliore la stabilité et aide à prévenir les problèmes répétitifs.",
    },
    business: {
      title: "Support informatique PME Laval | Petites entreprises | Info Dorais",
      description:
        "Support informatique PME Laval, postes de travail, courriels professionnels, réseau, sauvegardes, Microsoft 365, Google Workspace et dépannage.",
      eyebrow: "PME et travailleurs autonomes",
      h1: "Un soutien informatique accessible pour garder votre petite entreprise fonctionnelle.",
      lead:
        "Info Dorais aide les PME et travailleurs autonomes avec les postes, comptes, courriels, réseau, sauvegardes et support aux utilisateurs.",
      image: "/images/pme-refresh.webp",
      intro: "Vous obtenez un accompagnement simple, documenté et adapté à votre réalité, sans contrat compliqué au départ.",
    },
    emailWeb: {
      title: "Courriel professionnel et solutions web simples | Info Dorais",
      description:
        "Configuration courriel professionnel, Microsoft 365, Google Workspace, domaine, hébergement, VPS et solutions web simples pour PME.",
      eyebrow: "Courriel et solutions web",
      h1: "Des courriels professionnels et solutions web simples, configurés proprement.",
      lead:
        "Adresse courriel avec domaine, configuration Outlook/mobile, aide Microsoft 365 ou Google Workspace, hébergement et VPS simple si pertinent.",
      image: "/images/email.webp",
      intro: "Le but: que vos communications et outils web soient fiables, compréhensibles et faciles à administrer.",
    },
    about: {
      title: "À propos | Technicien informatique Laval | Info Dorais",
      description:
        "Découvrez Info Dorais, service informatique humain, clair et professionnel à Laval fondé par Maxime Dorais.",
      eyebrow: "À propos",
      h1: "Un technicien informatique local, accessible et orienté solution.",
      lead:
        "Info Dorais existe pour rendre l’informatique moins stressante: comprendre le problème, expliquer clairement, agir proprement.",
      image: "/images/about-refresh.webp",
      intro: "Le service s’adresse aux particuliers, travailleurs autonomes et petites entreprises qui veulent de l’aide claire et fiable.",
    },
    faq: {
      title: "FAQ informatique Laval | Info Dorais",
      description:
        "Questions fréquentes sur la réparation ordinateur, support informatique, support à distance, entretien et services PME à Laval.",
      eyebrow: "FAQ",
      h1: "Réponses rapides aux questions informatiques fréquentes.",
      lead:
        "Avant d’appeler ou d’envoyer une demande, voici les réponses aux questions les plus courantes.",
      image: "/images/contact-refresh.webp",
      intro: "La FAQ aide à choisir le bon service et à préparer une demande de diagnostic plus utile.",
    },
    contact: {
      title: "Contact | Diagnostic informatique Laval | Info Dorais",
      description:
        "Contactez Info Dorais pour réparation ordinateur, support informatique, support à distance, diagnostic ou soumission à Laval et environs.",
      eyebrow: "Contact rapide",
      h1: "Décrivez le problème. On vous aide à choisir la bonne intervention.",
      lead:
        "Appelez pour une urgence ou envoyez les détails par formulaire pour un diagnostic plus complet.",
      image: "/images/contact-refresh.webp",
      intro: "Ajoutez le type d’appareil, les symptômes, les messages d’erreur et votre niveau d’urgence.",
    },
    privacy: {
      title: "Politique de confidentialité | Info Dorais",
      description:
        "Politique de confidentialité du site Info Dorais pour les demandes de contact et informations transmises par formulaire.",
      eyebrow: "Confidentialité",
      h1: "Une politique simple sur les informations transmises à Info Dorais.",
      lead:
        "Cette page explique quelles informations peuvent être envoyées par le formulaire et comment elles sont utilisées.",
      image: "/images/contact-refresh.webp",
      intro: "Info Dorais collecte seulement les informations nécessaires pour répondre aux demandes de service.",
    },
  },
  en: {
    home: {
      title: "IT support and computer repair Laval | Info Dorais",
      description:
        "Info Dorais provides computer repair, IT support, maintenance, virus cleanup, Windows installation, business email and small business support in Laval.",
      eyebrow: "IT service in Laval and nearby areas",
      h1: "Simple, human and efficient IT support to solve your issues quickly.",
      lead:
        "Computer repair, slow PC, viruses, Windows installation, business email or small business support: Info Dorais helps with clear explanations and practical solutions.",
      image: "/images/hero-refresh.webp",
      intro: "From the first contact, we choose the best path: call, diagnostic, remote support or on-site help when needed.",
    },
    services: {
      title: "IT services Laval and nearby areas | Info Dorais",
      description:
        "PC repair, IT support, maintenance, virus removal, remote support, business email and small business IT services in Laval.",
      eyebrow: "IT services",
      h1: "Clear IT services for home users, self-employed workers and small businesses.",
      lead:
        "A complete offer without unnecessary jargon to diagnose, repair, optimize and stabilize your IT tools.",
      image: "/images/repair-refresh.webp",
      intro: "Services are grouped by need so you can quickly find the right solution.",
    },
    repair: {
      title: "Computer repair Laval | PC and laptop repair | Info Dorais",
      description:
        "Computer repair Laval, PC repair Laval, slow laptop, diagnostics, hardware replacement, data transfer and Windows installation.",
      eyebrow: "Computer repair Laval",
      h1: "Is your PC or laptop slow, frozen or refusing to start?",
      lead:
        "Info Dorais identifies the cause, protects your data when possible, then proposes a realistic repair: optimization, hardware, Windows or transfer.",
      image: "/images/repair-refresh.webp",
      intro: "The goal is not to sell unnecessary work: we clarify the issue and explain your options.",
    },
    remote: {
      title: "Remote IT support Quebec | Info Dorais",
      description:
        "Remote IT support for Windows, email, software, printers, configuration and quick troubleshooting anywhere in Quebec.",
      eyebrow: "Remote support",
      h1: "Fast IT help when the issue can be solved without a visit.",
      lead:
        "Ideal for Windows issues, email, software, printers, configuration and step-by-step guidance.",
      image: "/images/remote-refresh.webp",
      intro: "The connection is temporary, explained and used only when remote support is appropriate.",
    },
    maintenance: {
      title: "Computer maintenance Laval | Slow computer optimization | Info Dorais",
      description:
        "Computer maintenance, slow computer optimization, cleanup, updates, basic security and prevention in Laval and nearby areas.",
      eyebrow: "Maintenance and optimization",
      h1: "Restore stability to a slow computer before replacing it.",
      lead:
        "Cleanup, Windows optimization, security checks, updates, startup issues and advice to extend your computer’s useful life.",
      image: "/images/security-refresh.webp",
      intro: "Good maintenance reduces friction, improves stability and helps prevent repeated issues.",
    },
    business: {
      title: "Small business IT support Laval | Info Dorais",
      description:
        "Small business IT support Laval, workstations, business email, network, backups, Microsoft 365, Google Workspace and troubleshooting.",
      eyebrow: "Small businesses",
      h1: "Accessible IT support to keep your small business running.",
      lead:
        "Info Dorais helps small businesses and self-employed workers with workstations, accounts, email, networks, backups and user support.",
      image: "/images/pme-refresh.webp",
      intro: "You get simple, documented support adapted to your reality, without a complicated contract to start.",
    },
    emailWeb: {
      title: "Business email and simple web solutions | Info Dorais",
      description:
        "Business email setup, Microsoft 365, Google Workspace, domain, hosting, VPS and simple web solutions for small businesses.",
      eyebrow: "Email and web solutions",
      h1: "Business email and simple web solutions, configured properly.",
      lead:
        "Domain-based email, Outlook/mobile setup, Microsoft 365 or Google Workspace help, hosting and simple VPS support when relevant.",
      image: "/images/email.webp",
      intro: "The goal: keep your communications and web tools reliable, understandable and easy to manage.",
    },
    about: {
      title: "About | IT technician Laval | Info Dorais",
      description:
        "Learn about Info Dorais, a human, clear and professional IT service in Laval founded by Maxime Dorais.",
      eyebrow: "About",
      h1: "A local IT technician who is accessible and solution-oriented.",
      lead:
        "Info Dorais exists to make IT less stressful: understand the issue, explain clearly and act cleanly.",
      image: "/images/about-refresh.webp",
      intro: "The service is built for home users, self-employed workers and small businesses that want clear and reliable help.",
    },
    faq: {
      title: "IT FAQ Laval | Info Dorais",
      description:
        "Common questions about computer repair, IT support, remote support, maintenance and small business services in Laval.",
      eyebrow: "FAQ",
      h1: "Quick answers to common IT questions.",
      lead:
        "Before calling or sending a request, here are answers to the most common questions.",
      image: "/images/contact-refresh.webp",
      intro: "The FAQ helps you choose the right service and prepare a more useful diagnostic request.",
    },
    contact: {
      title: "Contact | IT diagnostic Laval | Info Dorais",
      description:
        "Contact Info Dorais for computer repair, IT support, remote support, diagnostics or a quote in Laval and nearby areas.",
      eyebrow: "Fast contact",
      h1: "Describe the issue. We help you choose the right intervention.",
      lead:
        "Call for urgent issues or send the details by form for a more complete diagnostic.",
      image: "/images/contact-refresh.webp",
      intro: "Add the device type, symptoms, error messages and your urgency level.",
    },
    privacy: {
      title: "Privacy policy | Info Dorais",
      description:
        "Privacy policy for the Info Dorais website and information submitted through the contact form.",
      eyebrow: "Privacy",
      h1: "A simple policy about information sent to Info Dorais.",
      lead:
        "This page explains what information may be sent through the form and how it is used.",
      image: "/images/contact-refresh.webp",
      intro: "Info Dorais only collects the information needed to respond to service requests.",
    },
  },
} satisfies Record<Locale, Record<PageKey, Page>>;

export type Page = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: string;
  intro: string;
};

export const primaryServices = {
  fr: [
    {
      title: "Réparation PC et portable",
      text: "Diagnostic, lenteur, erreurs Windows, démarrage, composants, installation et transfert de données.",
      icon: "laptop",
      href: paths.repair.fr,
      image: "/images/repair-refresh.webp",
      tags: ["réparation PC Laval", "portable lent", "Windows"],
    },
    {
      title: "Support à distance",
      text: "Assistance rapide pour Windows, courriel, logiciels, imprimantes et configuration simple.",
      icon: "monitor",
      href: paths.remote.fr,
      image: "/images/remote-refresh.webp",
      tags: ["support Québec", "AnyDesk", "Assistance rapide"],
    },
    {
      title: "Entretien et optimisation",
      text: "Nettoyage, optimisation, vérifications, sécurité de base et recommandations de prévention.",
      icon: "sparkles",
      href: paths.maintenance.fr,
      image: "/images/security-refresh.webp",
      tags: ["ordinateur lent", "entretien", "prévention"],
    },
    {
      title: "PME et travailleurs autonomes",
      text: "Postes, courriels, réseau, sauvegardes, Microsoft 365, Google Workspace et support aux utilisateurs.",
      icon: "building",
      href: paths.business.fr,
      image: "/images/pme-refresh.webp",
      tags: ["PME Laval", "courriels", "réseau"],
    },
  ],
  en: [
    {
      title: "PC and laptop repair",
      text: "Diagnostics, slowdowns, Windows errors, startup issues, components, installation and data transfer.",
      icon: "laptop",
      href: paths.repair.en,
      image: "/images/repair-refresh.webp",
      tags: ["PC repair Laval", "slow laptop", "Windows"],
    },
    {
      title: "Remote support",
      text: "Fast help for Windows, email, software, printers and simple configuration.",
      icon: "monitor",
      href: paths.remote.en,
      image: "/images/remote-refresh.webp",
      tags: ["Quebec support", "AnyDesk", "Quick Assist"],
    },
    {
      title: "Maintenance and optimization",
      text: "Cleanup, optimization, checks, basic security and prevention recommendations.",
      icon: "sparkles",
      href: paths.maintenance.en,
      image: "/images/security-refresh.webp",
      tags: ["slow computer", "maintenance", "prevention"],
    },
    {
      title: "Small businesses",
      text: "Workstations, email, network, backups, Microsoft 365, Google Workspace and user support.",
      icon: "building",
      href: paths.business.en,
      image: "/images/pme-refresh.webp",
      tags: ["small business", "email", "network"],
    },
  ],
} satisfies Record<Locale, ServiceCard[]>;

export type ServiceCard = {
  title: string;
  text: string;
  icon: IconName;
  href: string;
  image: string;
  tags: string[];
};

export const allServices = {
  fr: [
    "Réparation d’ordinateurs",
    "Réparation PC et portable",
    "Soutien informatique",
    "Entretien informatique",
    "Optimisation d’ordinateur lent",
    "Suppression de virus et logiciels indésirables",
    "Installation Windows",
    "Installation de logiciels",
    "Installation et remplacement de matériel informatique",
    "Diagnostic informatique",
    "Sauvegarde et transfert de données",
    "Support informatique à distance",
    "Configuration courriel professionnel",
    "Aide Microsoft 365 / Google Workspace de base",
    "Conseils pour achat ou amélioration d’ordinateur",
    "Serveurs/VPS et solutions web simples",
  ],
  en: [
    "Computer repair",
    "PC and laptop repair",
    "IT support",
    "Computer maintenance",
    "Slow computer optimization",
    "Virus and unwanted software removal",
    "Windows installation",
    "Software installation",
    "Hardware installation and replacement",
    "IT diagnostics",
    "Data backup and transfer",
    "Remote IT support",
    "Business email configuration",
    "Basic Microsoft 365 / Google Workspace help",
    "Advice for buying or upgrading a computer",
    "Simple server/VPS and web solutions",
  ],
} satisfies Record<Locale, string[]>;

export const problems = {
  fr: [
    "Ordinateur lent ou instable",
    "Virus, popups ou logiciels indésirables",
    "Courriel bloqué ou mal configuré",
    "Windows à réinstaller ou réparer",
    "Transfert de fichiers vers un nouveau poste",
    "Wi-Fi, imprimante ou logiciel qui ne fonctionne plus",
  ],
  en: [
    "Slow or unstable computer",
    "Viruses, popups or unwanted software",
    "Blocked or misconfigured email",
    "Windows repair or reinstall",
    "File transfer to a new device",
    "Wi-Fi, printer or software issues",
  ],
} satisfies Record<Locale, string[]>;

export const reasons = {
  fr: [
    ["Humain", "On explique ce qui se passe avec des mots simples."],
    ["Efficace", "On vise la solution la plus directe selon la situation."],
    ["Flexible", "À distance, sur place ou en accompagnement selon le besoin."],
    ["Local", "Service informatique pour Laval, Montréal, Rive-Nord et environs."],
  ],
  en: [
    ["Human", "We explain what is happening in simple terms."],
    ["Efficient", "We aim for the most direct solution for the situation."],
    ["Flexible", "Remote, on-site or guided support depending on the need."],
    ["Local", "IT service for Laval, Montreal, North Shore and nearby areas."],
  ],
} satisfies Record<Locale, [string, string][]>;

export const processSteps = {
  fr: [
    ["Décrire", "Vous expliquez le problème, l’appareil, l’urgence et ce qui a changé récemment."],
    ["Diagnostiquer", "On identifie la meilleure piste et le bon canal: appel, distance ou intervention."],
    ["Régler", "On applique la solution, puis on vous laisse des conseils simples pour éviter que ça revienne."],
  ],
  en: [
    ["Describe", "You explain the issue, device, urgency and what changed recently."],
    ["Diagnose", "We identify the best lead and the right channel: call, remote or intervention."],
    ["Resolve", "We apply the solution, then leave simple advice to reduce repeat issues."],
  ],
} satisfies Record<Locale, [string, string][]>;

export const faqs = {
  fr: [
    ["Est-ce que Info Dorais fait la réparation ordinateur à Laval?", "Oui. Info Dorais offre la réparation ordinateur Laval et environs, incluant les PC lents, portables, erreurs Windows, virus, démarrage difficile et remplacement de matériel."],
    ["Le support à distance est-il disponible partout au Québec?", "Oui, quand le problème peut être réglé à distance. C’est utile pour Windows, courriel, logiciels, imprimantes, configuration et accompagnement pas à pas."],
    ["Pouvez-vous aider une petite entreprise sans contrat compliqué?", "Oui. Info Dorais peut aider une PME ponctuellement ou mettre en place un soutien plus régulier selon les besoins."],
    ["Est-ce qu’un ordinateur lent doit toujours être remplacé?", "Non. Un diagnostic peut montrer qu’un nettoyage, une optimisation, un SSD, plus de mémoire ou une installation Windows propre est suffisant."],
    ["Pouvez-vous configurer un courriel professionnel?", "Oui. Info Dorais peut aider avec un domaine, Outlook, mobile, Microsoft 365, Google Workspace et les problèmes de livraison de courriel."],
    ["Comment demander un diagnostic?", "Le plus simple est d’appeler pour une urgence ou d’utiliser le formulaire de contact avec les détails du problème."],
  ],
  en: [
    ["Does Info Dorais provide computer repair in Laval?", "Yes. Info Dorais provides computer repair in Laval and nearby areas, including slow PCs, laptops, Windows errors, viruses, startup issues and hardware replacement."],
    ["Is remote support available anywhere in Quebec?", "Yes, when the issue can be solved remotely. It is useful for Windows, email, software, printers, configuration and guided support."],
    ["Can you help a small business without a complicated contract?", "Yes. Info Dorais can help a small business one time or set up more regular support depending on the need."],
    ["Does a slow computer always need to be replaced?", "No. A diagnostic may show that cleanup, optimization, an SSD, more memory or a clean Windows installation is enough."],
    ["Can you configure business email?", "Yes. Info Dorais can help with a domain, Outlook, mobile, Microsoft 365, Google Workspace and email delivery issues."],
    ["How do I request a diagnostic?", "For urgent issues, calling is simplest. Otherwise, use the contact form with details about the problem."],
  ],
} satisfies Record<Locale, [string, string][]>;

export const seoKeywords = {
  fr: [
    "réparation ordinateur Laval",
    "réparation ordinateur Laval et environs",
    "réparation PC Laval",
    "technicien informatique Laval",
    "technicien informatique Rive-Nord",
    "support informatique Laval",
    "support informatique Montréal",
    "soutien informatique à distance Québec",
    "ordinateur lent Laval",
    "suppression virus Laval",
    "entretien ordinateur Laval",
    "support informatique PME Laval",
  ],
  en: [
    "computer repair Laval",
    "PC repair Laval",
    "IT technician Laval",
    "remote IT support Quebec",
    "small business IT support Laval",
    "slow computer Laval",
  ],
} satisfies Record<Locale, string[]>;

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

export function getPageKeyByPath(locale: Locale, path: string): PageKey {
  const match = (Object.keys(paths) as PageKey[]).find((key) => paths[key][locale] === path);
  return match ?? "home";
}

export function getStaticPages(locale: Locale) {
  return (Object.keys(paths) as PageKey[])
    .filter((key) => key !== "home")
    .map((key) => ({ key, slug: paths[key][locale].split("/").filter(Boolean).pop() ?? "" }));
}
