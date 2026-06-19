# Info Dorais Astro

Refonte complète du site Info Dorais en Astro, TypeScript et Tailwind CSS.

Cette version est 100% statique pour la production: le build génère un dossier `dist/` que tu peux copier directement dans le `public_html` de HestiaCP/Apache. Aucun serveur Node.js n'est nécessaire en production.

## Analyse de l'ancien site

Forces conservées comme référence :

- Coordonnées claires: téléphone, courriel et formulaire.
- Présence FR/EN déjà importante.
- Thème clair/sombre déjà attendu.
- Services pertinents: réparation, support à distance, courriel, sécurité, réseau, serveurs/VPS.
- Base SEO locale avec sitemap, robots et données structurées.

Faiblesses corrigées :

- Premier écran pas assez orienté appel/diagnostic.
- Architecture initialement trop éparpillée pour le volume de contenu réel.
- Intentions SEO locales à regrouper dans des sections fortes plutôt que dans plusieurs pages minces.
- Design trop générique et moins professionnel.
- Ancienne structure PHP difficile à faire évoluer proprement.
- CTA dispersés au lieu d'un parcours clair.

## Nouvelle architecture compacte

- `/` : accueil orientée conversion locale.
- `/services` : tous les services, avec sections SEO locales et espace client.
- `/apropos` : crédibilité et approche.
- `/contact` : appel, courriel, formulaire de diagnostic.
- `/politique-confidentialite` : confidentialité.
- `/en/...` : versions anglaises équivalentes.

La navigation publique est volontairement courte : Services, À propos, Contact et Espace client. Le logo ramène à l’accueil.

Les anciennes intentions SEO ne sont pas perdues; elles sont regroupées dans `/services` avec des ancres dédiées :

- `#reparation-ordinateur-laval`
- `#support-informatique-laval`
- `#ordinateur-lent-laval`
- `#support-informatique-pme-laval`
- `#espace-client`

## SEO inclus

- Titres et descriptions uniques par page.
- Canonical et hreflang FR/EN.
- Sitemap généré automatiquement.
- `robots.txt`.
- JSON-LD `LocalBusiness`.
- JSON-LD `ItemList` sur la page Services.
- JSON-LD `FAQPage` sur les pages pertinentes.
- Ciblage local: Laval, Montréal, Rive-Nord, Terrebonne, Blainville, Boisbriand, Sainte-Thérèse, Rosemère, Mascouche, Repentigny, Saint-Eustache et environs.

Les choix SEO suivent les recommandations Google Search Central pour les bases SEO, les données structurées et le type `LocalBusiness`.

## Branding

La couleur officielle est extraite automatiquement du logo :

```bash
npm run extract:brand
```

Le résultat est écrit dans `src/data/brand-colors.ts`.
Couleur extraite actuellement: `#14559b`.

## Installation locale

```bash
npm install
npm run extract:brand
npm run build
npm run start
```

`npm run start` lance un preview local Astro. Pour développer :

```bash
npm run dev
```

## Vérifications

```bash
npm run check
npm run build
npm audit
```

État actuel validé :

- `npm run check` : 0 erreur, 0 warning, 0 hint.
- `npm run build` : 10 pages statiques générées.
- `npm audit` : 0 vulnérabilité.

## Déploiement HestiaCP / Apache

Build local ou sur le VPS :

```bash
npm install
npm run extract:brand
npm run build
```

Copier le contenu de `dist/` dans le `public_html` du domaine :

```bash
rsync -av --delete dist/ /home/USER/web/infodorais.com/public_html/
```

Ou avec `scp` depuis ta machine :

```bash
scp -r dist/* USER@IP_DU_SERVEUR:/home/USER/web/infodorais.com/public_html/
```

Important: copier le contenu de `dist/`, pas le dossier `dist` lui-même.

Le fichier `public/contact.php` est copié automatiquement dans `dist/contact.php`, donc le formulaire fonctionne sur un hébergement Apache/PHP HestiaCP.

Le fichier `public/.htaccess` est aussi copié dans `dist/` et redirige les anciennes pages minces vers les nouvelles sections SEO de `/services`.

## Apache

HestiaCP sert normalement `public_html` avec Apache/PHP. Cette version n'a pas besoin de reverse proxy Node.

Si les URLs propres ne répondent pas correctement, vérifier que le domaine HestiaCP sert bien les dossiers `index.html` générés par Astro, par exemple :

- `/services/index.html`
- `/contact/index.html`
- `/en/index.html`

## Option Nginx reverse proxy

Pour cette version statique, le reverse proxy n'est pas recommandé ni nécessaire.

Si tu décides quand même de lancer `npm run start` sur le VPS, ce serait seulement un serveur de preview Astro. Dans ce cas, Nginx pourrait pointer vers le port choisi, mais ce n'est pas le déploiement prévu pour la production.

## Formulaire de contact

Le formulaire poste vers :

```txt
/contact.php
```

À configurer avant mise en production :

1. Dans `src/components/ContactForm.astro`, remplacer :

```ts
const turnstileSiteKey = "REMPLACE_PAR_TA_CLE_SITE_TURNSTILE";
```

2. Dans `public/contact.php`, remplacer :

```php
$turnstileSecret = 'REMPLACE_PAR_TA_CLE_SECRETE_TURNSTILE';
```

3. Rebuilder :

```bash
npm run build
```

4. Copier `dist/` vers `public_html`.

Le serveur doit pouvoir envoyer du courriel avec PHP `mail()`. Sur HestiaCP, vérifier que le service mail du domaine est configuré correctement.

## Thème et langue

- Sélecteur FR/EN inclus.
- Thème clair/sombre inclus.
- Le thème est sauvegardé dans `localStorage`.
- Navigation mobile responsive avec menu.

## Fichiers importants

- `src/data/site.ts` : contenu, routes, SEO, services, FAQ.
- `src/components/Header.astro` : navigation, langue, thème.
- `src/components/ContactForm.astro` : formulaire et Turnstile.
- `public/contact.php` : traitement du formulaire.
- `astro.config.mjs` : configuration Astro et sitemap.
- `dist/` : résultat du build à envoyer dans `public_html`.
