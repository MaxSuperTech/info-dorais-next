# Versions Info Dorais

Ce repo garde les versions principales dans des branches faciles a comparer.

## Branches

- `main` : derniere version stable, design premium vectoriel.
- `version/original-next` : premiere version Next.js complete avec visuels photo.
- `version/photo-premium` : design premium carre avec visuels photo.
- `version/photo-refresh-seo-motion` : version photo rafraichie avec animations douces, FAQ SEO locale et donnees structurees.
- `version/hybrid-context-premium` : version hybride avec photos contextuelles, couche vectorielle et repères visuels par service.
- `version/astro-static-premium` : refonte Astro statique, optimisee pour HestiaCP/Apache avec sortie `dist/`.
- `version/vector-premium` : snapshot de la version premium vectorielle.
- `version/final-client` : branche de livraison rapide, actuellement identique a `main`.

## Regle pour les prochaines variantes

Chaque nouvelle direction visuelle importante aura sa propre branche `version/...`.
Exemples possibles :

- `version/apple-minimal`
- `version/stripe-structure`
- `version/local-business`
- `version/final-client`

## Tester une version

```bash
npm install
npm run extract:brand
npm run build
npm run start
```

## Export statique pour HestiaCP

```bash
npm run build
```

Uploader le contenu de `dist/` dans `public_html`.
