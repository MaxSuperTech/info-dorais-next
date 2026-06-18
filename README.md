# Info Dorais Next.js

Refonte complète du site Info Dorais en Next.js 15, TypeScript, Tailwind CSS, shadcn/ui et Lucide Icons.

## Audit de l'ancien site

Forces observées :
- Coordonnées claires : téléphone, courriel, heures, Facebook.
- Bilingue FR/EN déjà prévu.
- Thème clair/sombre déjà présent.
- Services importants déjà listés : support, distance, courriel, réseau, sécurité, serveurs.
- Base SEO locale avec schema LocalBusiness.

Faiblesses observées :
- Premier écran trop général pour convertir rapidement.
- Pages pas assez alignées sur les requêtes locales fortes.
- CTA dispersés entre services, soumission et contact.
- Usage d'emojis au lieu d'icônes professionnelles.
- Architecture incomplète pour les intentions "réparation ordinateur", "support à distance" et "PME".

## Nouvelle architecture

- `/` : accueil conversion locale.
- `/services` : vue complète des services.
- `/reparation-ordinateur` : page SEO pour réparation ordinateur Laval / réparation PC Laval.
- `/support-distance` : page pour Assistance rapide et AnyDesk.
- `/pme` : services pour petites entreprises.
- `/apropos` : crédibilité et approche.
- `/contact` : appel, courriel et diagnostic.
- `/en/...` : versions anglaises équivalentes.

## Installation

```bash
npm install
npm run build
npm run start
```

Le site démarre par défaut sur `http://localhost:3000`.

## Déploiement VPS Debian avec HestiaCP et Nginx reverse proxy

1. Créer le domaine dans HestiaCP.
2. Installer Node.js LTS sur le VPS.
3. Copier ce dossier dans un chemin comme :

```bash
/home/USER/web/infodorais.com/app
```

4. Installer et builder :

```bash
cd /home/USER/web/infodorais.com/app
npm install
npm run build
PORT=3000 npm run start
```

5. Pour garder le processus actif, utiliser `pm2` :

```bash
npm install -g pm2
PORT=3000 pm2 start npm --name infodorais -- run start
pm2 save
pm2 startup
```

6. Dans le template Nginx HestiaCP du domaine, ajouter un reverse proxy vers Next.js :

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

7. Redémarrer Nginx depuis HestiaCP ou avec :

```bash
sudo systemctl reload nginx
```

## Option export statique

Le formulaire utilise `contact.php`, copié dans `out/`, pour rester compatible avec un hébergement HestiaCP dans `public_html`.

## Activer le CAPTCHA

Le site utilise Cloudflare Turnstile.

1. Créer un widget Turnstile dans Cloudflare.
2. Remplacer dans `src/components/site-page.tsx` :

```ts
const turnstileSiteKey = "REMPLACE_PAR_TA_CLE_SITE_TURNSTILE";
```

3. Remplacer dans `public/contact.php` :

```php
$turnstileSecret = 'REMPLACE_PAR_TA_CLE_SECRETE_TURNSTILE';
```

4. Rebuilder/exporter le site, puis envoyer le contenu de `out/` dans `public_html`.

Sur Linux/Debian :

```bash
NEXT_OUTPUT=export npm run build
```

Les fichiers statiques seront dans `out/`. Ils peuvent être servis directement par Nginx/HestiaCP sans Node.js.

Sur Windows PowerShell :

```powershell
$env:NEXT_OUTPUT="export"; npm run build
```

## Branding

La couleur officielle est extraite du logo avec :

```bash
npm run extract:brand
```

Le résultat est écrit dans `src/lib/brand-colors.ts` et utilisé par le site. La couleur extraite actuellement est `#14559b`, très proche du bleu moyen calculé `#13549c`.

## Typographie

Le site utilise Google Font **Inter** via `next/font/google`. Next.js l’optimise et la sert localement au build, avec `Helvetica Neue`, `Helvetica` et `Arial` en fallback.
