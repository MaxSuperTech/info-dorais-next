# Versions Info Dorais

Ce repo garde les versions principales dans des branches faciles a comparer.

## Branches

- `main` : derniere version stable, design premium vectoriel.
- `version/original-next` : premiere version Next.js complete avec visuels photo.
- `version/vector-premium` : snapshot de la version premium vectorielle.

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
