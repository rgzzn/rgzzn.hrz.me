import React, { useEffect, useMemo, useState } from 'react';
import { toAssetPath } from '../utils/assetPath';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  poster?: string;
}

interface DownloadItem {
  label: string;
  url: string;
}

interface WorkItem {
  id: string;
  title: string;
  category: string;
  period: string;
  location: string;
  label: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  tags: string[];
  heroImage: string; // Used for hover preview and main cover
  previewMedia: MediaItem[];
  carousel: MediaItem[];
  downloads: DownloadItem[];
  siteUrl?: string; // Link to live site (shown instead of or in addition to downloads)
}

interface WorkSectionProps {
  setActiveImage: (img: string | null) => void;
  setActiveLabel: (label: string | null) => void;
  isHoverable: boolean;
}

// Usa percorsi assoluti che iniziano con / per le risorse nella cartella public
// Questo funziona sia in sviluppo che in produzione

const workItems: WorkItem[] = [
  {
    id: 'host-2023',
    title: 'HOST Milano',
    category: 'Fiera internazionale',
    period: 'Ottobre 2023',
    location: 'Fiera Milano · Rho',
    label: 'HOST',
    shortDescription:
      'Concept grafico per materiali stand, inviti e comunicazione teaser dedicata alla linea coffee packaging.',
    description:
      'Per HOST Milano 2023 ho sviluppato una campagna coordinata che comprende locandine, pannelli stand, inviti digitali e supporti cartacei per la forza commerciale. Il concept valorizza il prodotto in primo piano con un visual ad alto impatto, mentre la tipografia mantiene un ritmo tecnico e ordinato per facilitare la lettura in fiera.',
    highlights: [
      'Palette calda e contrastata per richiamare il mondo coffee.',
      'Gerarchia tipografica leggibile anche a distanza.',
      'Formati modulari adattabili a diverse superfici espositive.',
    ],
    tags: ['Grafica fiera', 'Tipografica', 'Branding'],
    heroImage: '/media/work/host-milano/images/host-hero.jpeg',
    previewMedia: [
      { type: 'image', src: '/media/work/host-milano/images/host-stand-01.jpeg' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-02.jpeg' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-03.jpeg' },
    ],
    carousel: [
      { type: 'image', src: '/media/work/host-milano/images/host-hero.jpeg' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-01.jpeg' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-02.jpeg' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-03.jpeg' },
      { type: 'video', src: '/media/work/host-milano/videos/host-loop.mp4' },
      { type: 'video', src: '/media/work/host-milano/videos/pascucci-loop.mp4' },
    ],
    downloads: [
      { label: 'Coffee Packaging (PDF)', url: '/media/work/host-milano/pdfs/coffee-packaging.pdf' },
      { label: 'Packaging Caffè (PDF)', url: '/media/work/host-milano/pdfs/packaging-caffe.pdf' },
    ],
  },
  {
    id: 'ipack-ima-2025',
    title: 'IPACK-IMA Milano',
    category: 'Fiera Internazionale',
    period: 'Maggio 2025',
    location: 'Fiera Milano · Rho',
    label: 'IPACK-IMA',
    shortDescription:
      'Allestimento e comunicazione integrata per la fiera del packaging: layout stand, cataloghi e social kit.',
    description:
      'Per IPACK-IMA 2025 ho realizzato una narrazione visiva completa per lo stand: layout modulari, schede tecniche, grafica digitale e materiale per il team commerciale. L’obiettivo era dare continuità al brand e accompagnare il visitatore in un percorso chiaro, informativo e coerente.',
    highlights: [
      'Sistema grafico coerente tra stampa e digitale.',
      'Cataloghi e schede tecniche ottimizzati per la consultazione rapida.',
      'Supporti social pronti per la comunicazione live in fiera.',
    ],
    tags: ['Allestimento', 'Cataloghi', 'Social kit'],
    heroImage: '/media/work/ipack-ima/images/ipack-hero.jpeg',
    previewMedia: [
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3203.jpeg' },
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3238.jpeg' },
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3207.jpeg' },
    ],
    carousel: [
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3203.jpeg' },
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3238.jpeg' },
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3207.jpeg' },
    ],
    downloads: [
      { label: 'Catalogo IPACK-IMA (ZIP)', url: '/media/work/ipack-ima/pdfs/IPACKIMA_CATALOGUE.zip' },
    ],
  },
  {
    id: 'DashB',
    title: 'DashB App',
    category: 'TvOS App',
    period: 'Gennaio 2026',
    location: 'Forlì · Forlì-Cesena',
    label: 'DashB',
    shortDescription: 'Dashboard in stile bento per Apple TV: meteo, calendario e notizie in un’unica vista immersiva.',
    description: 'DashB è una dashboard moderna in stile bento pensata per trasformare uno schermo Apple TV in un centro di controllo elegante. Meteo con WeatherKit, agenda da Google Calendar e Outlook, ticker notizie da feed RSS con immagini e QR code. Progettata con SwiftUI, design TV-friendly con componenti grandi, contrasto elevato e animazioni morbide.',
    highlights: [
      'Meteo intelligente con WeatherKit e aggiornamento automatico',
      'Agenda giornaliera con eventi da Google Calendar e Microsoft Outlook',
      'Ticker notizie da feed RSS con immagini e QR code per articoli',
      'Design TV-friendly con layout bento e leggibilità da lontano',
      'SwiftUI, OAuth Device Flow, Keychain per token sicuri',
    ],
    tags: ['SwiftUI', 'tvOS', 'WeatherKit', 'Calendar', 'RSS', 'Dashboard'],
    // Il logo è l’elemento principale per la card e il dettaglio
    heroImage: '/media/work/dashb/images/DashB-BACK.png',
    // Preview a griglia nella card: focus sulle schermate principali della app
    previewMedia: [
      { type: 'image', src: '/media/work/dashb/images/DashB-BACK.png' },
      { type: 'image', src: '/media/work/dashb/images/dashb-1.jpeg' },
      { type: 'image', src: '/media/work/dashb/images/dashb-2.jpeg' },
    ],
    // Carosello completo nel dettaglio progetto: logo + tutte le varianti di schermata
    carousel: [
      { type: 'image', src: '/media/work/dashb/images/DashB-BACK.png' },
      { type: 'image', src: '/media/work/dashb/images/dashb-1.jpeg' },
      { type: 'image', src: '/media/work/dashb/images/dashb-2.jpeg' },
    ],
    downloads: [],
    siteUrl: 'https://dashb.hrz.me',
  },
  {
    id: 'DashB-Site',
    title: 'DashB Website',
    category: 'Website',
    period: 'Gennaio 2026',
    location: 'Forlì · Forlì-Cesena',
    label: 'DashB',
    shortDescription: 'Sito della dashboard Apple TV+ realizzato con React, Vite e Tailwind CSS: design responsive e componenti riutilizzabili.',
    description: 'Sito web dedicato all’applicazione DashB: illustra le funzionalità della dashboard Apple TV+ con una presentazione moderna, interfaccia responsive, componenti React riutilizzabili e styling con Tailwind CSS. Sviluppo rapido grazie a Vite, perfetto su ogni dispositivo.',
    highlights: [
      'Design responsive ottimizzato per ogni schermo',
      'Architettura a componenti React riutilizzabili',
      'Styling con Tailwind CSS in stile utility-first',
      'Build e dev server con Vite',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Dashboard'],
    heroImage: '/media/work/dashb-site/images/dashb-site-1.png',
    previewMedia: [
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-1.png' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-2.png' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-3.png' },
    ],
    carousel: [
      { type: 'image', src: '/media/work/dashb-site/images/DashB-BACK.jpeg' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-1.png' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-2.png' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-3.png' },
    ],
    downloads: [],
    siteUrl: 'https://dashb.hrz.me',
  },
  {
  id: 'Comega-Render',
  title: 'Industrial Render Composition – Comega',
  category: '3D Visualization',
  period: 'Gennaio 2025',
  location: 'Forlì, Forlì-Cesena',
  label: 'Render',
  shortDescription: 'Composizione e valorizzazione render tecnici per macchine industriali Comega.',
  description: 'Attività di render composition e visual enhancement per macchine industriali Comega. Ottimizzazione di scene 3D fornite dal reparto tecnico, con interventi su camera setup, lighting, materiali e post-produzione per trasformare render ingegneristici in asset marketing ad alto impatto visivo, utilizzati in presentazioni commerciali, brochure e contenuti digital.',
  highlights: [
    'Ottimizzazione render tecnici forniti dal team progettazione Comega',
    'Setup camera e inquadrature orientate alla comunicazione prodotto',
    'Lighting design per enfatizzare volumi e componenti meccaniche',
    'Post-produzione e color grading per utilizzo marketing',
    'Animazioni di presentazione per contenuti digital e social'
  ],
  tags: ['Rendering', 'Lighting', '3D Composition', 'Industrial Visualization', 'Comega'],
  heroImage: '/media/work/render/images/valcolatte.png',
  previewMedia: [
    { type: 'image', src: '/media/work/render/images/valcolatte_linea.png' },
    { type: 'image', src: '/media/work/render/images/sigma.png' },
    { type: 'image', src: '/media/work/render/images/aries.png' }
  ],
  carousel: [
    { type: 'image', src: '/media/work/render/images/valcolatte_linea.png' },
    { type: 'image', src: '/media/work/render/images/sigma.png' },
    { type: 'image', src: '/media/work/render/images/aries.png' },
    { type: 'image', src: '/media/work/render/images/valcolatte.png' },
    { type: 'image', src: '/media/work/render/images/virgo.png' },
    { type: 'image', src: '/media/work/render/images/virgo_1.png' },
    { type: 'video', src: '/media/work/render/videos/delta.mp4'},
    { type: 'video', src: '/media/work/render/videos/valcolatte.mp4'},
    { type: 'video', src: '/media/work/render/videos/virgo_video.mp4'},
  ],
  downloads: [],
  siteUrl: null
},
];

const WorkSection: React.FC<WorkSectionProps> = ({ setActiveImage, setActiveLabel, isHoverable }) => {
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const carouselMedia = useMemo(
    () => (activeWork ? activeWork.carousel : []),
    [activeWork]
  );

  useEffect(() => {
    if (!activeWork) {
      setCarouselIndex(0);
    }
  }, [activeWork]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveWork(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const goToNext = () => {
    if (carouselMedia.length === 0) return;
    setCarouselIndex((prev) => (prev + 1) % carouselMedia.length);
  };

  const goToPrev = () => {
    if (carouselMedia.length === 0) return;
    setCarouselIndex((prev) => (prev - 1 + carouselMedia.length) % carouselMedia.length);
  };

  const handleOpen = (item: WorkItem) => {
    setActiveWork(item);
    setActiveImage(toAssetPath(item.heroImage));
    setActiveLabel(item.label);
  };
  
  return (
    <section id="work" className="max-w-6xl mx-auto w-full mb-40">
      <div className="mb-12 opacity-40 flex justify-between items-end border-b border-black dark:border-white/20 pb-2">
        <span className="text-xs font-bold tracking-[0.2em] font-mono uppercase">Work</span>
        <span className="text-[10px] font-mono hidden md:block">LAVORI &amp; PROGETTI</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Lavori e progetti speciali
            <span className="block text-primary">Graphic Design · Developing · 3D Rendering</span>
          </h2>
          <p className="mt-6 text-sm md:text-base font-mono leading-relaxed opacity-70 max-w-xl">
            Un elenco di lavori e progetti speciali che ho realizzato per clienti e aziende o come hobby, con focus su graphic design, developing e 3D rendering.
          </p>
        </div>
        <div className="border border-black/10 dark:border-white/20 rounded-2xl p-6 backdrop-blur">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] opacity-60">
            <span>Focus</span>
            <span>2023 · 2025</span>
          </div>
          <div className="mt-6 space-y-4">
            {[
              'Allestimenti fieristici e materiali stand',
              'Generazione immagini e video 3D da Blender',
              'Development di app e website',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm font-mono opacity-70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Graphic Design', 'Developing', '3D Rendering'].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 border border-black/20 dark:border-white/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {workItems.map((item) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/20 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/5"
            onMouseEnter={() => {
              if (isHoverable) {
                setActiveImage(toAssetPath(item.heroImage));
                setActiveLabel(item.label);
              }
            }}
            onMouseLeave={() => {
              if (isHoverable) {
                setActiveImage(null);
                setActiveLabel(null);
              }
            }}
            onFocus={() => {
              if (isHoverable) {
                setActiveImage(toAssetPath(item.heroImage));
                setActiveLabel(item.label);
              }
            }}
            onBlur={() => {
              if (isHoverable) {
                setActiveImage(null);
                setActiveLabel(null);
              }
            }}
            tabIndex={0}
            onClick={() => handleOpen(item)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 border border-black/20 dark:border-white/20 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs font-mono opacity-60">{item.period}</span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-primary">
                  {item.location}
                </p>
                <p className="mt-3 text-sm md:text-base font-mono opacity-70 leading-relaxed">
                  {item.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {item.previewMedia.map((media, index) => (
                  <div
                    key={index}
                    className="h-24 rounded-2xl border border-black/10 dark:border-white/20 overflow-hidden"
                  >
                    {media.type === 'video' ? (
                       <video src={toAssetPath(media.src)} className="h-full w-full object-cover" muted loop playsInline />
                    ) : ( 
                       <img src={toAssetPath(media.src)} alt="" className="h-full w-full object-cover" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
                  Apri progetto
                </span>
                <span className="text-[10px] font-mono uppercase opacity-60">Click</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeWork && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] flex flex-col rounded-3xl bg-white text-black dark:bg-black dark:text-white border border-black/20 dark:border-white/20 shadow-2xl overflow-hidden">
            <div className="absolute top-4 right-4 z-50">
              <button
                type="button"
                onClick={() => setActiveWork(null)}
                className="text-xs font-mono uppercase tracking-[0.2em] border border-black/20 dark:border-white/20 bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shadow-lg"
              >
                Chiudi
              </button>
            </div>

            <div className="overflow-y-auto p-6 md:p-12 pt-16 md:pt-12 scroll-smooth">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
                    {activeWork.period}
                  </span>
                  <h3 className="mt-4 text-3xl md:text-4xl font-bold uppercase tracking-tight">
                    {activeWork.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] opacity-60">
                    {activeWork.location}
                  </p>
                  <p className="mt-6 text-sm md:text-base font-mono leading-relaxed opacity-80">
                    {activeWork.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm font-mono opacity-70">
                    {activeWork.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-primary font-bold">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {activeWork.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="overflow-hidden rounded-3xl border border-black/10 dark:border-white/20">
                    <img src={toAssetPath(activeWork.heroImage)} alt="" className="w-full h-60 object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {(activeWork.previewMedia ?? []).slice(0, 2).map((media, index) => (
                      <div
                        key={index}
                        className="h-28 rounded-2xl overflow-hidden border border-black/10 dark:border-white/20"
                      >
                        {media.type === 'video' ? (
                          <video src={toAssetPath(media.src)} className="h-full w-full object-cover" muted loop playsInline />
                        ) : (
                          <img src={toAssetPath(media.src)} alt="" className="h-full w-full object-cover" />
                        )}
                      </div>
                    ))}
                  </div>
                  {activeWork.siteUrl && (
                    <a
                      href={activeWork.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-xs font-mono uppercase tracking-[0.3em] px-4 py-3 rounded-full bg-primary text-black transition-transform active:scale-95 hover:opacity-90"
                    >
                      Vai al sito → dashb.hrz.me
                    </a>
                  )}
                  {activeWork.downloads?.map((download) => (
                    <a
                      key={download.label}
                      href={toAssetPath(download.url)}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-xs font-mono uppercase tracking-[0.3em] px-4 py-3 rounded-full bg-primary text-black transition-transform active:scale-95 hover:opacity-90"
                    >
                      Download: {download.label}
                    </a>
                  ))}
                </div>
              </div>

              {carouselMedia.length > 0 && (
                <div className="mt-12">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] opacity-60">
                      Panoramica
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={goToPrev}
                        className="text-[10px] font-mono uppercase tracking-[0.2em] border border-black/20 dark:border-white/20 px-3 py-1 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={goToNext}
                        className="text-[10px] font-mono uppercase tracking-[0.2em] border border-black/20 dark:border-white/20 px-3 py-1 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-black/10 dark:border-white/20 flex items-center justify-center bg-black/5 dark:bg-white/5">
                    {carouselMedia[carouselIndex].type === 'video' ? (
                      <video
                        src={toAssetPath(carouselMedia[carouselIndex].src)}
                        controls
                        className="w-full h-72 md:h-96 object-contain"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    ) : (
                      <img
                        src={toAssetPath(carouselMedia[carouselIndex].src)}
                        alt=""
                        className="w-full h-72 md:h-96 object-cover transition-all duration-300"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
