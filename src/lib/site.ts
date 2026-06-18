import {
  Building2,
  CheckCircle2,
  Clock,
  HardDrive,
  Laptop,
  Mail,
  MapPin,
  MonitorCog,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { brandColors } from "@/lib/brand-colors";

export const brand = {
  name: "Info Dorais",
  phone: "(450) 241-0302",
  phoneHref: "tel:+14502410302",
  email: "contact@infodorais.com",
  emailHref: "mailto:contact@infodorais.com",
  city: "Laval",
  baseUrl: "https://infodorais.com",
  logoColor: brandColors.primary,
};

export type Locale = "fr" | "en";
export type PageKey = "home" | "services" | "repair" | "remote" | "pme" | "about" | "contact";

export const paths: Record<PageKey, Record<Locale, string>> = {
  home: { fr: "/", en: "/en" },
  services: { fr: "/services", en: "/en/services" },
  repair: { fr: "/reparation-ordinateur", en: "/en/reparation-ordinateur" },
  remote: { fr: "/support-distance", en: "/en/support-distance" },
  pme: { fr: "/pme", en: "/en/pme" },
  about: { fr: "/apropos", en: "/en/apropos" },
  contact: { fr: "/contact", en: "/en/contact" },
};

export const nav = {
  fr: [
    ["Accueil", "home"],
    ["Services", "services"],
    ["Réparation", "repair"],
    ["À distance", "remote"],
    ["PME", "pme"],
    ["À propos", "about"],
    ["Contact", "contact"],
  ],
  en: [
    ["Home", "home"],
    ["Services", "services"],
    ["Repair", "repair"],
    ["Remote", "remote"],
    ["Business", "pme"],
    ["About", "about"],
    ["Contact", "contact"],
  ],
} satisfies Record<Locale, [string, PageKey][]>;

export const services = {
  fr: [
    {
      title: "Réparation d’ordinateurs",
      text: "Diagnostic PC, lenteur, erreurs Windows, démarrage difficile, matériel et optimisation.",
      icon: Laptop,
      image: "/images/computer-repair.webp",
      href: paths.repair.fr,
      items: ["Réparation PC Laval", "Installation Windows", "Transfert de données"],
    },
    {
      title: "Suppression de virus",
      text: "Nettoyage des logiciels indésirables, vérification du navigateur et conseils de prévention.",
      icon: ShieldCheck,
      image: "/images/security.webp",
      href: paths.services.fr,
      items: ["Analyse sécurité", "Nettoyage navigateur", "Protection de base"],
    },
    {
      title: "Support à distance",
      text: "Assistance rapide pour courriel, Windows, logiciels, imprimante et petits blocages.",
      icon: MonitorCog,
      image: "/images/remote-support.webp",
      href: paths.remote.fr,
      items: ["Assistance rapide", "AnyDesk au besoin", "Explications claires"],
    },
    {
      title: "Services PME",
      text: "Postes, courriels professionnels, réseau, sauvegardes, entretien et accompagnement.",
      icon: Building2,
      image: "/images/network.webp",
      href: paths.pme.fr,
      items: ["Support récurrent", "Prévention", "Documentation simple"],
    },
  ],
  en: [
    {
      title: "Computer repair",
      text: "PC diagnostics, slowdowns, Windows errors, startup issues, hardware and optimization.",
      icon: Laptop,
      image: "/images/computer-repair.webp",
      href: paths.repair.en,
      items: ["PC repair Laval", "Windows installation", "Data transfer"],
    },
    {
      title: "Virus removal",
      text: "Unwanted software cleanup, browser checks and prevention advice.",
      icon: ShieldCheck,
      image: "/images/security.webp",
      href: paths.services.en,
      items: ["Security check", "Browser cleanup", "Basic protection"],
    },
    {
      title: "Remote support",
      text: "Fast help for email, Windows, software, printers and everyday issues.",
      icon: MonitorCog,
      image: "/images/remote-support.webp",
      href: paths.remote.en,
      items: ["Quick Assist", "AnyDesk when needed", "Clear explanations"],
    },
    {
      title: "Small business services",
      text: "Workstations, professional email, network, backups, maintenance and guidance.",
      icon: Building2,
      image: "/images/network.webp",
      href: paths.pme.en,
      items: ["Recurring support", "Prevention", "Simple documentation"],
    },
  ],
};

export const pages = {
  fr: {
    home: {
      title: "Réparation ordinateur Laval | Info Dorais",
      description:
        "Réparation ordinateur, technicien informatique, support informatique et réparation PC à Laval pour particuliers et PME.",
      eyebrow: "Réponse rapide à Laval",
      h1: "Réparation d’ordinateur et support informatique sans détour.",
      lead:
        "PC lent, virus, problème Windows, Wi-Fi instable ou besoin d’un technicien fiable pour votre PME? Info Dorais diagnostique, répare et explique clairement la suite.",
      image: "/images/hero.webp",
    },
    services: {
      title: "Services informatiques Laval | Info Dorais",
      description:
        "Services informatiques à Laval : réparation PC, entretien, suppression de virus, installation Windows, support à distance et soutien PME.",
      eyebrow: "Support informatique Laval",
      h1: "Services informatiques pour régler, stabiliser et prévenir.",
      lead:
        "Une offre claire pour les besoins courants : dépannage, entretien, sécurité, Windows, courriels, réseau et assistance à distance.",
      image: "/images/computer-repair.webp",
    },
    repair: {
      title: "Réparation ordinateur Laval | Réparation PC Laval | Info Dorais",
      description:
        "Réparation ordinateur Laval : PC lent, virus, installation Windows, diagnostic, transfert de données et entretien informatique.",
      eyebrow: "Réparation PC Laval",
      h1: "Votre ordinateur ralentit, bloque ou ne démarre plus?",
      lead:
        "On identifie la cause, on protège vos données quand c’est possible, puis on applique une solution réaliste : réparation, optimisation, nettoyage ou installation Windows.",
      image: "/images/computer-repair.webp",
    },
    remote: {
      title: "Support à distance Laval | Info Dorais",
      description:
        "Support informatique à distance à Laval avec Assistance rapide, AnyDesk, Windows, courriel, logiciels et imprimantes.",
      eyebrow: "Intervention rapide",
      h1: "Support informatique à distance quand le problème peut se régler sans déplacement.",
      lead:
        "Idéal pour courriel, Windows, logiciels, imprimantes, configuration et accompagnement pas à pas.",
      image: "/images/remote-support.webp",
    },
    pme: {
      title: "Support informatique PME Laval | Info Dorais",
      description:
        "Support informatique PME à Laval : postes de travail, courriels professionnels, réseau, sauvegardes et entretien.",
      eyebrow: "PME Laval et Rive-Nord",
      h1: "Un technicien informatique pour garder votre petite entreprise fonctionnelle.",
      lead:
        "Info Dorais aide les PME avec les postes, courriels, réseau, sauvegardes, sécurité de base et support récurrent.",
      image: "/images/network.webp",
    },
    about: {
      title: "À propos | Technicien informatique Laval | Info Dorais",
      description:
        "Découvrez Info Dorais, service de réparation ordinateur et support informatique à Laval fondé par Maxime Dorais.",
      eyebrow: "Info Dorais",
      h1: "Un support informatique humain, clair et orienté résultat.",
      lead:
        "Info Dorais transforme les problèmes informatiques en prochaines étapes simples, autant pour les particuliers que les PME.",
      image: "/images/server-room.webp",
    },
    contact: {
      title: "Contact | Diagnostic informatique Laval | Info Dorais",
      description:
        "Contactez Info Dorais à Laval pour réparation ordinateur, support informatique, diagnostic PC, suppression de virus ou soutien PME.",
      eyebrow: "Contact rapide",
      h1: "Décrivez le problème. On vous aide à choisir la bonne intervention.",
      lead:
        "Pour une urgence, l’appel est souvent le plus rapide. Pour un diagnostic moins urgent, envoyez les détails et on vous répond avec la suite logique.",
      image: "/images/email.webp",
    },
  },
  en: {
    home: {
      title: "Computer Repair Laval | Info Dorais",
      description:
        "Computer repair, IT technician, IT support and PC repair in Laval for homes and small businesses.",
      eyebrow: "Fast response in Laval",
      h1: "Computer repair and IT support without the runaround.",
      lead:
        "Slow PC, virus, Windows issue, unstable Wi-Fi or a reliable technician for your small business? Info Dorais diagnoses, repairs and explains the next steps clearly.",
      image: "/images/hero.webp",
    },
    services: {
      title: "IT Services Laval | Info Dorais",
      description:
        "IT services in Laval: PC repair, maintenance, virus removal, Windows installation, remote support and small business IT support.",
      eyebrow: "IT support Laval",
      h1: "IT services to fix, stabilize and prevent problems.",
      lead:
        "A clear offer for everyday needs: troubleshooting, maintenance, security, Windows, email, network and remote assistance.",
      image: "/images/computer-repair.webp",
    },
    repair: {
      title: "Computer Repair Laval | PC Repair Laval | Info Dorais",
      description:
        "Computer repair in Laval: slow PC, virus removal, Windows installation, diagnostic, data transfer and maintenance.",
      eyebrow: "PC repair Laval",
      h1: "Is your computer slow, frozen or refusing to start?",
      lead:
        "We identify the cause, protect your data when possible, then apply a realistic solution: repair, optimization, cleanup or Windows installation.",
      image: "/images/computer-repair.webp",
    },
    remote: {
      title: "Remote IT Support Laval | Info Dorais",
      description:
        "Remote IT support in Laval with Quick Assist, AnyDesk, Windows, email, software and printers.",
      eyebrow: "Fast intervention",
      h1: "Remote IT support when the issue can be fixed without a visit.",
      lead: "Ideal for email, Windows, software, printers, configuration and step-by-step guidance.",
      image: "/images/remote-support.webp",
    },
    pme: {
      title: "Small Business IT Support Laval | Info Dorais",
      description:
        "Small business IT support in Laval: workstations, professional email, network, backups and maintenance.",
      eyebrow: "Laval and North Shore",
      h1: "An IT technician to keep your small business running.",
      lead:
        "Info Dorais helps small businesses with workstations, email, networks, backups, basic security and recurring support.",
      image: "/images/network.webp",
    },
    about: {
      title: "About | IT Technician Laval | Info Dorais",
      description:
        "Learn about Info Dorais, a Laval computer repair and IT support service founded by Maxime Dorais.",
      eyebrow: "Info Dorais",
      h1: "Human, clear and result-focused IT support.",
      lead:
        "Info Dorais turns computer problems into simple next steps for both homes and small businesses.",
      image: "/images/server-room.webp",
    },
    contact: {
      title: "Contact | Computer Diagnostic Laval | Info Dorais",
      description:
        "Contact Info Dorais in Laval for computer repair, IT support, PC diagnostic, virus removal or small business support.",
      eyebrow: "Fast contact",
      h1: "Describe the problem. We help you choose the right intervention.",
      lead:
        "For urgent issues, calling is often fastest. For a less urgent diagnostic, send the details and we will reply with the logical next step.",
      image: "/images/email.webp",
    },
  },
} satisfies Record<Locale, Record<PageKey, {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: string;
}>>;

export const common = {
  fr: {
    call: "Appeler maintenant",
    callShort: "Appeler",
    diagnostic: "Demander un diagnostic",
    seeServices: "Voir les services",
    support: "Support à distance",
    process: "Processus",
    processTitle: "Simple dès le premier contact.",
    footer: "Réparation ordinateur, support informatique et services PME à Laval.",
    formTitle: "Demande de diagnostic",
    name: "Nom",
    email: "Courriel",
    phone: "Téléphone",
    message: "Description",
    submit: "Préparer la demande",
    area: "Laval et environs",
    themeDark: "Activer le thème sombre",
    themeLight: "Activer le thème clair",
  },
  en: {
    call: "Call now",
    callShort: "Call",
    diagnostic: "Request a diagnostic",
    seeServices: "View services",
    support: "Remote support",
    process: "Process",
    processTitle: "Simple from the first contact.",
    footer: "Computer repair, IT support and small business services in Laval.",
    formTitle: "Diagnostic request",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Description",
    submit: "Prepare request",
    area: "Laval and nearby areas",
    themeDark: "Enable dark theme",
    themeLight: "Enable light theme",
  },
};

export const proof = {
  fr: [
    ["Diagnostic clair", "Comprendre le problème avant de proposer une solution."],
    ["À distance ou sur place", "Le canal le plus efficace selon la situation."],
    ["Particuliers et PME", "Un soutien adapté à la réalité du client."],
  ],
  en: [
    ["Clear diagnostic", "Understand the issue before proposing a solution."],
    ["Remote or on site", "The most efficient channel for the situation."],
    ["Homes and small businesses", "Support adapted to the client's reality."],
  ],
};

export const processSteps = {
  fr: [
    ["Diagnostic", "Vous décrivez le symptôme. On clarifie l’urgence et le meilleur canal d’intervention."],
    ["Intervention", "À distance ou sur place, avec explications claires pendant le travail."],
    ["Prévention", "Vous repartez avec des recommandations simples pour éviter que ça revienne."],
  ],
  en: [
    ["Diagnostic", "You describe the symptom. We clarify urgency and the best intervention channel."],
    ["Intervention", "Remote or on site, with clear explanations during the work."],
    ["Prevention", "You leave with simple recommendations to reduce repeat issues."],
  ],
};

export const serviceDetails = {
  fr: [
    ["Réparation d’ordinateurs", "PC lent, erreurs, démarrage, installation Windows et transfert de données.", Wrench],
    ["Soutien informatique", "Logiciels, courriels, imprimantes, comptes, mises à jour et périphériques.", CheckCircle2],
    ["Entretien informatique", "Nettoyage, optimisation, vérifications et recommandations de prévention.", Sparkles],
    ["Suppression de virus", "Analyse, retrait de logiciels indésirables et conseils de sécurité.", ShieldCheck],
    ["Support à distance", "Assistance rapide via Windows ou AnyDesk lorsque c’est approprié.", MonitorCog],
    ["Réseau et Wi-Fi", "Diagnostic de stabilité, routeur, couverture et équipements partagés.", Wifi],
  ],
  en: [
    ["Computer repair", "Slow PC, errors, startup, Windows installation and data transfer.", Wrench],
    ["IT support", "Software, email, printers, accounts, updates and devices.", CheckCircle2],
    ["Computer maintenance", "Cleanup, optimization, checks and prevention recommendations.", Sparkles],
    ["Virus removal", "Analysis, removal of unwanted software and security advice.", ShieldCheck],
    ["Remote support", "Quick Assist or AnyDesk support when appropriate.", MonitorCog],
    ["Network and Wi-Fi", "Stability diagnostics, routers, coverage and shared equipment.", Wifi],
  ],
} satisfies Record<Locale, [string, string, LucideIcon][]>;

export const contactItems = [
  { icon: Phone, label: "Téléphone / Phone", value: brand.phone, href: brand.phoneHref },
  { icon: Mail, label: "Courriel / Email", value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: "Zone", value: "Laval, QC", href: undefined },
  { icon: Clock, label: "Disponibilité", value: "Support à distance disponible", href: undefined },
  { icon: HardDrive, label: "Services", value: "PC, Windows, virus, PME", href: undefined },
];
