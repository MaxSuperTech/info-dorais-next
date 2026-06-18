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
      image: "/images/repair-refresh.webp",
      href: paths.repair.fr,
      items: ["Réparation PC Laval", "Installation Windows", "Transfert de données"],
    },
    {
      title: "Suppression de virus",
      text: "Nettoyage des logiciels indésirables, vérification du navigateur et conseils de prévention.",
      icon: ShieldCheck,
      image: "/images/security-refresh.webp",
      href: paths.services.fr,
      items: ["Analyse sécurité", "Nettoyage navigateur", "Protection de base"],
    },
    {
      title: "Support à distance",
      text: "Assistance rapide pour courriel, Windows, logiciels, imprimante et petits blocages.",
      icon: MonitorCog,
      image: "/images/remote-refresh.webp",
      href: paths.remote.fr,
      items: ["Assistance rapide", "AnyDesk au besoin", "Explications claires"],
    },
    {
      title: "Services PME",
      text: "Postes, courriels professionnels, réseau, sauvegardes, entretien et accompagnement.",
      icon: Building2,
      image: "/images/pme-refresh.webp",
      href: paths.pme.fr,
      items: ["Support récurrent", "Prévention", "Documentation simple"],
    },
  ],
  en: [
    {
      title: "Computer repair",
      text: "PC diagnostics, slowdowns, Windows errors, startup issues, hardware and optimization.",
      icon: Laptop,
      image: "/images/repair-refresh.webp",
      href: paths.repair.en,
      items: ["PC repair Laval", "Windows installation", "Data transfer"],
    },
    {
      title: "Virus removal",
      text: "Unwanted software cleanup, browser checks and prevention advice.",
      icon: ShieldCheck,
      image: "/images/security-refresh.webp",
      href: paths.services.en,
      items: ["Security check", "Browser cleanup", "Basic protection"],
    },
    {
      title: "Remote support",
      text: "Fast help for email, Windows, software, printers and everyday issues.",
      icon: MonitorCog,
      image: "/images/remote-refresh.webp",
      href: paths.remote.en,
      items: ["Quick Assist", "AnyDesk when needed", "Clear explanations"],
    },
    {
      title: "Small business services",
      text: "Workstations, professional email, network, backups, maintenance and guidance.",
      icon: Building2,
      image: "/images/pme-refresh.webp",
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
      image: "/images/hero-refresh.webp",
    },
    services: {
      title: "Services informatiques Laval | Info Dorais",
      description:
        "Services informatiques à Laval : réparation PC, entretien, suppression de virus, installation Windows, support à distance et soutien PME.",
      eyebrow: "Support informatique Laval",
      h1: "Services informatiques pour régler, stabiliser et prévenir.",
      lead:
        "Une offre claire pour les besoins courants : dépannage, entretien, sécurité, Windows, courriels, réseau et assistance à distance.",
      image: "/images/repair-refresh.webp",
    },
    repair: {
      title: "Réparation ordinateur Laval | Réparation PC Laval | Info Dorais",
      description:
        "Réparation ordinateur Laval : PC lent, virus, installation Windows, diagnostic, transfert de données et entretien informatique.",
      eyebrow: "Réparation PC Laval",
      h1: "Votre ordinateur ralentit, bloque ou ne démarre plus?",
      lead:
        "On identifie la cause, on protège vos données quand c’est possible, puis on applique une solution réaliste : réparation, optimisation, nettoyage ou installation Windows.",
      image: "/images/repair-refresh.webp",
    },
    remote: {
      title: "Support à distance Laval | Info Dorais",
      description:
        "Support informatique à distance à Laval avec Assistance rapide, AnyDesk, Windows, courriel, logiciels et imprimantes.",
      eyebrow: "Intervention rapide",
      h1: "Support informatique à distance quand le problème peut se régler sans déplacement.",
      lead:
        "Idéal pour courriel, Windows, logiciels, imprimantes, configuration et accompagnement pas à pas.",
      image: "/images/remote-refresh.webp",
    },
    pme: {
      title: "Support informatique PME Laval | Info Dorais",
      description:
        "Support informatique PME à Laval : postes de travail, courriels professionnels, réseau, sauvegardes et entretien.",
      eyebrow: "PME Laval et Rive-Nord",
      h1: "Un technicien informatique pour garder votre petite entreprise fonctionnelle.",
      lead:
        "Info Dorais aide les PME avec les postes, courriels, réseau, sauvegardes, sécurité de base et support récurrent.",
      image: "/images/pme-refresh.webp",
    },
    about: {
      title: "À propos | Technicien informatique Laval | Info Dorais",
      description:
        "Découvrez Info Dorais, service de réparation ordinateur et support informatique à Laval fondé par Maxime Dorais.",
      eyebrow: "Info Dorais",
      h1: "Un support informatique humain, clair et orienté résultat.",
      lead:
        "Info Dorais transforme les problèmes informatiques en prochaines étapes simples, autant pour les particuliers que les PME.",
      image: "/images/about-refresh.webp",
    },
    contact: {
      title: "Contact | Diagnostic informatique Laval | Info Dorais",
      description:
        "Contactez Info Dorais à Laval pour réparation ordinateur, support informatique, diagnostic PC, suppression de virus ou soutien PME.",
      eyebrow: "Contact rapide",
      h1: "Décrivez le problème. On vous aide à choisir la bonne intervention.",
      lead:
        "Pour une urgence, l’appel est souvent le plus rapide. Pour un diagnostic moins urgent, envoyez les détails et on vous répond avec la suite logique.",
      image: "/images/contact-refresh.webp",
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
      image: "/images/hero-refresh.webp",
    },
    services: {
      title: "IT Services Laval | Info Dorais",
      description:
        "IT services in Laval: PC repair, maintenance, virus removal, Windows installation, remote support and small business IT support.",
      eyebrow: "IT support Laval",
      h1: "IT services to fix, stabilize and prevent problems.",
      lead:
        "A clear offer for everyday needs: troubleshooting, maintenance, security, Windows, email, network and remote assistance.",
      image: "/images/repair-refresh.webp",
    },
    repair: {
      title: "Computer Repair Laval | PC Repair Laval | Info Dorais",
      description:
        "Computer repair in Laval: slow PC, virus removal, Windows installation, diagnostic, data transfer and maintenance.",
      eyebrow: "PC repair Laval",
      h1: "Is your computer slow, frozen or refusing to start?",
      lead:
        "We identify the cause, protect your data when possible, then apply a realistic solution: repair, optimization, cleanup or Windows installation.",
      image: "/images/repair-refresh.webp",
    },
    remote: {
      title: "Remote IT Support Laval | Info Dorais",
      description:
        "Remote IT support in Laval with Quick Assist, AnyDesk, Windows, email, software and printers.",
      eyebrow: "Fast intervention",
      h1: "Remote IT support when the issue can be fixed without a visit.",
      lead: "Ideal for email, Windows, software, printers, configuration and step-by-step guidance.",
      image: "/images/remote-refresh.webp",
    },
    pme: {
      title: "Small Business IT Support Laval | Info Dorais",
      description:
        "Small business IT support in Laval: workstations, professional email, network, backups and maintenance.",
      eyebrow: "Laval and North Shore",
      h1: "An IT technician to keep your small business running.",
      lead:
        "Info Dorais helps small businesses with workstations, email, networks, backups, basic security and recurring support.",
      image: "/images/pme-refresh.webp",
    },
    about: {
      title: "About | IT Technician Laval | Info Dorais",
      description:
        "Learn about Info Dorais, a Laval computer repair and IT support service founded by Maxime Dorais.",
      eyebrow: "Info Dorais",
      h1: "Human, clear and result-focused IT support.",
      lead:
        "Info Dorais turns computer problems into simple next steps for both homes and small businesses.",
      image: "/images/about-refresh.webp",
    },
    contact: {
      title: "Contact | Computer Diagnostic Laval | Info Dorais",
      description:
        "Contact Info Dorais in Laval for computer repair, IT support, PC diagnostic, virus removal or small business support.",
      eyebrow: "Fast contact",
      h1: "Describe the problem. We help you choose the right intervention.",
      lead:
        "For urgent issues, calling is often fastest. For a less urgent diagnostic, send the details and we will reply with the logical next step.",
      image: "/images/contact-refresh.webp",
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

export const localSeoTerms = {
  fr: ["Réparation ordinateur Laval", "Technicien informatique Laval", "Support informatique Laval", "Réparation PC Laval"],
  en: ["Computer repair Laval", "IT technician Laval", "IT support Laval", "PC repair Laval"],
} satisfies Record<Locale, string[]>;

export const faqByPage = {
  fr: {
    home: [
      ["Est-ce qu’Info Dorais offre la réparation ordinateur à Laval?", "Oui. Info Dorais aide les particuliers et les PME à Laval pour les PC lents, virus, erreurs Windows, problèmes de démarrage, Wi-Fi et support informatique courant."],
      ["Est-ce mieux d’appeler ou d’envoyer une demande de diagnostic?", "Pour une urgence, l’appel est le plus rapide. Pour expliquer un problème plus détaillé, le formulaire permet de préciser l’appareil, les symptômes et l’urgence."],
      ["Le support peut-il se faire à distance?", "Oui, quand le problème le permet. Une session à distance peut aider pour Windows, courriel, logiciels, imprimantes et configuration simple."],
    ],
    services: [
      ["Quels services informatiques sont offerts à Laval?", "Info Dorais offre réparation PC, soutien informatique, entretien, suppression de virus, installation Windows, support à distance et services pour PME."],
      ["Est-ce que l’entretien informatique aide à prévenir les pannes?", "Oui. L’entretien permet de vérifier la santé du poste, nettoyer les éléments problématiques, optimiser Windows et recommander des mesures simples de prévention."],
      ["Pouvez-vous aider une petite entreprise sans contrat compliqué?", "Oui. Le soutien PME peut être ponctuel ou récurrent, selon les postes, courriels, sauvegardes, réseau et priorités de l’entreprise."],
    ],
    repair: [
      ["Quels problèmes de réparation PC peuvent être diagnostiqués?", "Un diagnostic peut viser un ordinateur lent, un démarrage difficile, des erreurs Windows, un bruit anormal, un disque défectueux, des virus ou un besoin de réinstallation."],
      ["Mes données peuvent-elles être protégées pendant la réparation?", "Quand c’est possible, la protection ou le transfert de données est pris en compte avant les étapes plus lourdes comme une réinstallation Windows."],
      ["Est-ce qu’un PC lent doit toujours être remplacé?", "Pas toujours. Un nettoyage, une optimisation, un remplacement de disque ou une installation Windows propre peut parfois redonner une bonne durée de vie au poste."],
    ],
    remote: [
      ["Quels problèmes se règlent bien à distance?", "Le support à distance convient souvent pour courriel, Windows, logiciels, imprimantes, configuration, mises à jour et accompagnement pas à pas."],
      ["Est-ce que le support à distance est sécuritaire?", "La session est encadrée, temporaire et expliquée. Vous gardez le contrôle de l’accès et pouvez fermer la connexion quand l’intervention est terminée."],
      ["Quand faut-il plutôt une intervention sur place?", "Un problème matériel, une panne réseau locale ou un ordinateur qui ne démarre plus peut nécessiter une intervention physique au lieu d’une session à distance."],
    ],
    pme: [
      ["Info Dorais peut-il soutenir une PME à Laval?", "Oui. Le soutien PME couvre les postes de travail, courriels professionnels, réseau, sauvegardes, entretien, sécurité de base et support aux utilisateurs."],
      ["Le support PME peut-il être ponctuel?", "Oui. Une petite entreprise peut demander une intervention ponctuelle, puis décider si un suivi récurrent est utile selon ses besoins."],
      ["Pourquoi documenter les interventions informatiques?", "Une documentation simple aide à retrouver les accès, comprendre les changements et réduire les pertes de temps lors d’un prochain problème."],
    ],
    about: [
      ["Quelle est l’approche d’Info Dorais?", "L’approche est simple: comprendre le problème, expliquer les options, intervenir proprement et laisser des recommandations claires."],
      ["Info Dorais travaille-t-il avec particuliers et PME?", "Oui. Les services sont adaptés autant aux particuliers qu’aux petites entreprises qui veulent un technicien informatique clair et accessible à Laval."],
      ["Pourquoi choisir un technicien local à Laval?", "Un technicien local comprend mieux les besoins courants du secteur et peut guider le client vers le bon canal: appel, distance ou intervention."],
    ],
    contact: [
      ["Que faut-il inclure dans une demande de diagnostic?", "Indiquez le type d’appareil, les symptômes, le moment où le problème a commencé, les messages d’erreur et votre niveau d’urgence."],
      ["Quel est le moyen le plus rapide de contacter Info Dorais?", "Pour une urgence, appelez directement. Pour un diagnostic plus complet, le formulaire permet de transmettre les détails utiles."],
      ["Le formulaire de contact est-il protégé contre le spam?", "Oui. Le site est prévu pour utiliser Cloudflare Turnstile afin de réduire les soumissions indésirables."],
    ],
  },
  en: {
    home: [
      ["Does Info Dorais offer computer repair in Laval?", "Yes. Info Dorais helps homes and small businesses in Laval with slow PCs, viruses, Windows errors, startup issues, Wi-Fi and everyday IT support."],
      ["Should I call or send a diagnostic request?", "For urgent issues, calling is fastest. For a detailed issue, the form helps describe the device, symptoms and urgency."],
      ["Can support be done remotely?", "Yes, when the issue allows it. Remote support can help with Windows, email, software, printers and simple configuration."],
    ],
    services: [
      ["What IT services are offered in Laval?", "Info Dorais offers PC repair, IT support, maintenance, virus removal, Windows installation, remote support and small business services."],
      ["Can computer maintenance help prevent breakdowns?", "Yes. Maintenance can check workstation health, remove problematic items, optimize Windows and recommend simple prevention steps."],
      ["Can you help a small business without a complicated contract?", "Yes. Small business support can be one-time or recurring depending on workstations, email, backups, network and business priorities."],
    ],
    repair: [
      ["What PC repair issues can be diagnosed?", "A diagnostic can cover a slow computer, startup issues, Windows errors, abnormal noise, a failing drive, viruses or a Windows reinstall."],
      ["Can my data be protected during repair?", "When possible, data protection or transfer is considered before heavier steps such as a Windows reinstall."],
      ["Does a slow PC always need to be replaced?", "Not always. Cleanup, optimization, a drive replacement or a clean Windows installation can sometimes give the workstation a useful second life."],
    ],
    remote: [
      ["Which issues are good for remote support?", "Remote support often works well for email, Windows, software, printers, configuration, updates and step-by-step guidance."],
      ["Is remote support secure?", "The session is guided, temporary and explained. You keep control of access and can close the connection when the intervention is complete."],
      ["When is an on-site visit better?", "Hardware issues, local network failures or a computer that will not start may require a physical intervention instead of remote support."],
    ],
    pme: [
      ["Can Info Dorais support a small business in Laval?", "Yes. Small business support covers workstations, professional email, network, backups, maintenance, basic security and user support."],
      ["Can business support be one-time?", "Yes. A small business can request a one-time intervention, then decide if recurring follow-up is useful."],
      ["Why document IT interventions?", "Simple documentation helps recover access, understand changes and reduce wasted time during the next issue."],
    ],
    about: [
      ["What is Info Dorais’ approach?", "The approach is simple: understand the issue, explain the options, intervene cleanly and leave clear recommendations."],
      ["Does Info Dorais work with homes and small businesses?", "Yes. Services are adapted for both homes and small businesses looking for a clear and accessible IT technician in Laval."],
      ["Why choose a local IT technician in Laval?", "A local technician better understands common needs in the area and can guide the client toward the right channel: call, remote or on-site."],
    ],
    contact: [
      ["What should I include in a diagnostic request?", "Include the device type, symptoms, when the issue started, error messages and your level of urgency."],
      ["What is the fastest way to contact Info Dorais?", "For urgent issues, call directly. For a more complete diagnostic, the form lets you share useful details."],
      ["Is the contact form protected against spam?", "Yes. The site is prepared to use Cloudflare Turnstile to reduce unwanted submissions."],
    ],
  },
} satisfies Record<Locale, Record<PageKey, [string, string][]>>;

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
