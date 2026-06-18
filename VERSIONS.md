# Versions Info Dorais

Ce repo garde les versions principales dans des branches faciles a comparer.

## Branches

- `main` : derniere version stable, design premium vectoriel.
- `version/original-next` : premiere version Next.js complete avec visuels photo.
- `version/photo-premium` : design premium carre avec visuels photo.
- `version/photo-refresh-seo-motion` : version photo rafraichie avec animations douces, FAQ SEO locale et donnees structurees.
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
npm run build
npm run start
```

## Export statique pour HestiaCP

```powershell
$env:NEXT_OUTPUT='export'; npm run build; Remove-Item Env:\NEXT_OUTPUT
```

Uploader le contenu de `out/` dans `public_html`.
