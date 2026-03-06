# LR Portfolio

Portfolio personale di Luca Ragazzini, realizzato con React + Vite.

## Panoramica

Single-page app con sezioni `about`, `skills`, `experience`, `focus`, `work` e `contact`.
L'interfaccia combina layout editoriale, animazioni custom, preview hover-follow su desktop e interazioni mobile dedicate.

## Novita recenti

- Aggiornati copy, contenuti e dettagli visual di `Hero`, `SkillSection` e `TimelineSection` con focus piu netto su ruolo IT + Social.
- `WorkSection` estesa con dettagli aggiornati del progetto `Bipres Website - Coral` e portfolio corrente (es. DashB App/DashB Website).
- Aggiornate le icone nel documento HTML: favicon SVG prioritario con fallback `.ico` e `apple-touch-icon`.
- Ottimizzazione asset immagine: conversione progressiva a `.webp` per avatar e immagini hover.
- Navigazione mobile ridisegnata con menu overlay fullscreen (hamburger, lock scroll e transizioni).
- Link magnetici nella sidebar desktop (`MagneticLink`) e card progetto con effetto tilt 3D (`TiltCard`).
- Miglioramenti accessibilita: apertura card via tastiera, chiusura modale con `Escape`, attributi ARIA nelle card/progetti.
- Integrazione `@vercel/analytics` e `@vercel/speed-insights` direttamente in `App.tsx`.
- Gestione media con mapping `toAssetPath()` + `utils/blob-manifest.json` per usare URL Vercel Blob quando disponibili.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS via CDN (config in `index.html`)
- lucide-react
- @vercel/blob (supporto gestione asset/media via Blob API)
- @vercel/analytics + @vercel/speed-insights
- Google Fonts: Space Grotesk, Playfair Display, JetBrains Mono

## Sezioni principali

- Hero: titolo, ruolo e descrizione introduttiva.
- Skills: elenco competenze con reveal immagine al passaggio del mouse (solo dispositivi hover-capable).
- Experience: timeline professionale.
- Focus: obiettivi, skill distintivi e lingue.
- Work: griglia progetti con modale dettagliata, media gallery, download e link esterni.
- Contact: CTA LinkedIn e footer.

## Struttura progetto

```text
.
├── App.tsx
├── components/
├── public/                # asset statici locali (es. hover, avatar, icone)
├── utils/
│   ├── assetPath.ts       # resolver path locale/Vercel Blob
│   └── blob-manifest.json # mapping path -> URL Blob
├── scripts/
│   ├── migrate-to-blob.js
│   └── fast-optimize-images.js
├── index.tsx
├── index.css
├── index.html
├── vite.config.ts
└── vercel.json
```

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Media e contenuti

- I dati dei progetti sono definiti in `components/WorkSection.tsx`.
- Le immagini hover locali sono in `public/media/hover`.
- I media della sezione Work usano path `/media/work/...` risolti da `toAssetPath()`:
  - URL Blob se presenti nel manifest.
  - fallback al path locale assoluto se non mappati.

---

**LR Portfolio** - Luca Ragazzini ©2026
