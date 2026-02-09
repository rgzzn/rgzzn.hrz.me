# LR Portfolio

Portfolio personale realizzato con **React** e **Vite** per presentare il profilo professionale di Luca Ragazzini (IT & Social Media Manager).

## Panoramica

L'applicazione è una single-page app con navigazione laterale fissa e sezioni tematiche (competenze, esperienza, focus, lavori/progetti e contatto). I contenuti sono gestiti direttamente nei componenti React con uno stile visivo fortemente tipografico e animazioni leggere.

## Stack

- **React 19** + **TypeScript**
- **Vite** per build e dev server
- **lucide-react** per le icone

## Sezioni principali

- **Hero**: titolo, ruolo e descrizione introduttiva.
- **Skills**: elenco competenze con reveal immagine al passaggio del mouse.
- **Experience**: timeline professionale con dettagli e bullet principali.
- **Focus**: schede con obiettivi, competenze linguistiche e approccio operativo.
- **Work**: griglia lavori/progetti con dettagli in modale e carousel media.
- **Portfolio**: aree di specializzazione con hover preview.
- **Contact**: call-to-action verso LinkedIn e footer informativo.

## Struttura del progetto

```
.
├── App.tsx                # Layout principale e composizione sezioni
├── components/            # Sezioni e componenti UI
├── assets/                # Media locali (work assets)
├── index.tsx              # Entry point React
├── index.css              # Reset/stili base
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

## Note sui contenuti

- I dati dei lavori speciali (sezione **Work**) sono definiti in `components/WorkSection.tsx`.
- Le immagini per hover/preview e i media locali sono organizzati sotto `assets/work`.

---

**LR Portfolio** — Luca Ragazzini ©2026
