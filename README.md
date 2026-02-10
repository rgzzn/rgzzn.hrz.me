# LR Portfolio

Portfolio personale realizzato con **React** e **Vite** per presentare il profilo professionale di Luca Ragazzini (IT & Social Media Manager).

## Panoramica

Single-page app con navigazione laterale fissa e sezioni tematiche (about, skills, experience, focus, work, portfolio e contact). I contenuti sono gestiti direttamente nei componenti React con uno stile tipografico marcato, animazioni custom, preview “hover-follow” e modali con carousel media.

## Stack

- **React 19** + **TypeScript**
- **Vite** per build e dev server
- **Tailwind CSS** via CDN (config in `index.html`)
- **lucide-react** per le icone
- **Google Fonts**: Space Grotesk, Playfair Display, JetBrains Mono

## Sezioni principali

- **Hero**: titolo, ruolo e descrizione introduttiva.
- **Skills**: elenco competenze con reveal immagine al passaggio del mouse e follower.
- **Experience**: timeline professionale con dettagli e bullet principali.
- **Focus**: schede con obiettivi, competenze linguistiche e approccio operativo.
- **Work**: griglia lavori/progetti con dettagli in modale, carousel media, download e link esterni.
- **Portfolio**: aree di specializzazione con hover preview/focus.
- **Contact**: call-to-action verso LinkedIn e footer informativo.

## Struttura del progetto

```
.
├── App.tsx                # Layout principale e composizione sezioni
├── components/            # Sezioni e componenti UI
├── public/                # Asset pubblici (media/work, immagini, pdf, video)
├── assets/                # Archivio raw (non servito direttamente)
├── index.tsx              # Entry point React
├── index.css              # Reset/stili base
├── index.html             # Font, Tailwind CDN e animazioni custom
└── vite.config.ts         # Configurazione Vite
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

- Le risorse usate nei lavori sono servite da `public/media/work/...` (immagini, video e PDF/ZIP).
- Le immagini per hover/preview e i media locali sono organizzati sotto `public/media/work`.
- I dati dei lavori speciali (sezione **Work**) sono definiti in `components/WorkSection.tsx`.

## Note

- `MatrixSection.tsx` è presente ma non montata in `App.tsx` (sezione profilo opzionale).

---

**LR Portfolio** — Luca Ragazzini ©2026
