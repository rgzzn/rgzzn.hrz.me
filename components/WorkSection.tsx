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
  siteUrl?: string | null; // Link to live site (shown instead of or in addition to downloads)
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
    heroImage: '/media/work/dashb/images/DashB-BACK.webp',
    previewMedia: [
      { type: 'image', src: '/media/work/dashb/images/DashB-BACK.webp' },
      { type: 'image', src: '/media/work/dashb/images/dashb-1.webp' },
      { type: 'image', src: '/media/work/dashb/images/dashb-2.webp' },
    ],
    carousel: [
      { type: 'image', src: '/media/work/dashb/images/DashB-BACK.webp' },
      { type: 'image', src: '/media/work/dashb/images/dashb-1.webp' },
      { type: 'image', src: '/media/work/dashb/images/dashb-2.webp' },
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
    heroImage: '/media/work/dashb-site/images/dashb-site-1.webp',
    previewMedia: [
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-1.webp' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-2.webp' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-3.webp' },
    ],
    carousel: [
      { type: 'image', src: '/media/work/dashb-site/images/DashB-BACK.webp' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-1.webp' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-2.webp' },
      { type: 'image', src: '/media/work/dashb-site/images/dashb-site-3.webp' },
    ],
    downloads: [],
    siteUrl: 'https://dashb.hrz.me',
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
    heroImage: '/media/work/ipack-ima/images/ipack-hero.webp',
    previewMedia: [
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3203.webp' },
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3238.webp' },
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3207.webp' },
    ],
    carousel: [
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3203.webp' },
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3238.webp' },
      { type: 'image', src: '/media/work/ipack-ima/images/IMG_3207.webp' },
    ],
    downloads: [
      { label: 'Catalogo IPACK-IMA (ZIP)', url: '/media/work/ipack-ima/pdfs/IPACKIMA_CATALOGUE.zip' },
    ],
  },
  {
    id: 'Comega-Render',
    title: 'Industrial Render Composition – Comega',
    category: '3D Visualization',
    period: 'Gennaio 2025',
    location: 'Forlì · Forlì-Cesena',
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
    heroImage: '/media/work/render/images/valcolatte.webp',
    previewMedia: [
      { type: 'image', src: '/media/work/render/images/valcolatte_linea.webp' },
      { type: 'image', src: '/media/work/render/images/sigma.webp' },
      { type: 'image', src: '/media/work/render/images/aries.png' }
    ],
    carousel: [
      { type: 'image', src: '/media/work/render/images/valcolatte_linea.webp' },
      { type: 'image', src: '/media/work/render/images/sigma.webp' },
      { type: 'image', src: '/media/work/render/images/aries.webp' },
      { type: 'image', src: '/media/work/render/images/valcolatte.webp' },
      { type: 'image', src: '/media/work/render/images/virgo.webp' },
      { type: 'image', src: '/media/work/render/images/virgo_1.webp' },
      { type: 'video', src: '/media/work/render/videos/delta.mp4'},
      { type: 'video', src: '/media/work/render/videos/valcolatte.mp4'},
      { type: 'video', src: '/media/work/render/videos/virgo_video.mp4'},
    ],
    downloads: [],
    siteUrl: null
  },
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
    heroImage: '/media/work/host-milano/images/host-hero.webp',
    previewMedia: [
      { type: 'image', src: '/media/work/host-milano/images/host-stand-01.webp' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-02.webp' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-03.webp' },
    ],
    carousel: [
      { type: 'image', src: '/media/work/host-milano/images/host-hero.webp' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-01.webp' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-02.webp' },
      { type: 'image', src: '/media/work/host-milano/images/host-stand-03.webp' },
      { type: 'video', src: '/media/work/host-milano/videos/host-loop.mp4' },
      { type: 'video', src: '/media/work/host-milano/videos/pascucci-loop.mp4' },
    ],
    downloads: [
      { label: 'Coffee Packaging (PDF)', url: '/media/work/host-milano/pdfs/coffee-packaging.pdf' },
      { label: 'Packaging Caffè (PDF)', url: '/media/work/host-milano/pdfs/packaging-caffe.pdf' },
    ],
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
    if (!activeWork) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
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

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>, item: WorkItem) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen(item);
    }
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
            <span>2023 · 2026</span>
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
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/20 p-6 md:p-8 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-2xl md:hover:shadow-black/10 dark:md:hover:shadow-white/5 active:scale-[0.99] motion-safe:animate-mobile-card md:animate-none cursor-pointer"
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
            role="button"
            aria-haspopup="dialog"
            aria-label={`Apri dettagli progetto ${item.title}`}
            onClick={() => handleOpen(item)}
            onKeyDown={(event) => handleCardKeyDown(event, item)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:animate-card-shimmer bg-[length:200%_200%]" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div className="space-y-4">
                <div className="md:hidden inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border border-primary/40 text-primary bg-primary/10 animate-mobile-glow">
                  tap per dettagli
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 border border-black/20 dark:border-white/20 rounded-full flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary md:hidden animate-mobile-float" />
                    {item.category}
                  </span>
                  <span className="text-xs font-mono opacity-60">{item.period}</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                    {item.location}
                  </p>
                  <p className="mt-4 text-sm md:text-base font-mono opacity-70 leading-relaxed line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-3">
                  {item.previewMedia.slice(0, 3).map((media, index) => (
                    <div
                      key={index}
                      className="h-20 rounded-xl border border-black/10 dark:border-white/20 overflow-hidden bg-black/5 dark:bg-white/5"
                    >
                      {media.type === 'video' ? (
                        <video src={toAssetPath(media.src)} className="h-full w-full object-cover" muted loop playsInline preload="metadata" />
                      ) : ( 
                        <img src={toAssetPath(media.src)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary font-bold">
                    Apri progetto
                  </span>
                  <div className="flex gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[9px] font-mono uppercase tracking-wider opacity-40">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeWork && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveWork(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="active-work-title"
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-[2.5rem] bg-white text-black dark:bg-black dark:text-white border border-black/10 dark:border-white/10 shadow-3xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute top-6 right-6 z-50">
              <button
                type="button"
                onClick={() => setActiveWork(null)}
                aria-label="Chiudi dettagli progetto"
                className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:scale-105 transition-all shadow-xl"
              >
                <span>Chiudi</span>
                <span className="opacity-50 group-hover:translate-x-1 transition-transform">✕</span>
              </button>
            </div>

            <div className="overflow-y-auto custom-scrollbar">
              <div className="p-8 md:p-14">
                <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] items-start">
                  <div className="space-y-10">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-primary/30 text-primary rounded-full">
                          {activeWork.category}
                        </span>
                        <span className="text-xs font-mono opacity-40 tracking-widest uppercase">
                          {activeWork.period}
                        </span>
                      </div>
                      <h3 id="active-work-title" className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
                        {activeWork.title}
                      </h3>
                      <p className="mt-3 text-sm font-mono uppercase tracking-[0.2em] text-primary opacity-80">
                        {activeWork.location}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <p className="text-base md:text-lg font-mono leading-relaxed opacity-90">
                        {activeWork.description}
                      </p>
                      
                      <div className="grid gap-4 bg-black/5 dark:bg-white/5 p-6 rounded-3xl border border-black/5 dark:border-white/5">
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">Key Highlights</span>
                        <ul className="space-y-4">
                          {activeWork.highlights.map((item) => (
                            <li key={item} className="flex gap-4 items-start">
                              <span className="text-primary mt-1 text-xs">◆</span>
                              <span className="text-sm font-mono opacity-80 leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {activeWork.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono uppercase tracking-[0.1em] px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full opacity-60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 lg:sticky lg:top-0">
                    <div className="group relative overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 aspect-[4/3] bg-black/5 dark:bg-white/5">
                      <img 
                        src={toAssetPath(activeWork.heroImage)} 
                        alt="" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {activeWork.previewMedia.slice(1, 3).map((media, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
                        >
                          {media.type === 'video' ? (
                            <video src={toAssetPath(media.src)} className="h-full w-full object-cover" muted loop playsInline preload="metadata" />
                          ) : (
                            <img src={toAssetPath(media.src)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                          )}
                        </div>
                      ))}
                    </div>

                    {(activeWork.siteUrl || (activeWork.downloads && activeWork.downloads.length > 0)) && (
                      <div className="space-y-3 pt-6">
                        {activeWork.siteUrl && (
                          <a
                            href={activeWork.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-5 rounded-2xl bg-primary text-black transition-all hover:scale-[1.02] active:scale-95 group shadow-lg"
                          >
                            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em]">Visita il sito</span>
                            <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
                          </a>
                        )}
                        {activeWork.downloads?.map((download) => (
                          <a
                            key={download.label}
                            href={toAssetPath(download.url)}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-5 rounded-2xl border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                          >
                            <span className="text-xs font-mono uppercase tracking-[0.2em]">{download.label}</span>
                            <span className="text-xs opacity-40 group-hover:opacity-100 transition-transform group-hover:translate-y-1">↓</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {carouselMedia.length > 0 && (
                  <div className="mt-20 pt-12 border-t border-black/5 dark:border-white/5">
                    <div className="flex items-end justify-between mb-8">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary block mb-2">Media Gallery</span>
                        <h4 className="text-2xl font-bold uppercase tracking-tight">Panoramica completa</h4>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={goToPrev}
                          aria-label="Media precedente"
                          className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={goToNext}
                          aria-label="Media successivo"
                          className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                    <div className="relative aspect-video rounded-[2.5rem] border border-black/10 dark:border-white/10 overflow-hidden bg-black/5 dark:bg-white/5 group">
                      {carouselMedia[carouselIndex].type === 'video' ? (
                        <video
                          src={toAssetPath(carouselMedia[carouselIndex].src)}
                          controls
                          className="w-full h-full object-contain"
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <img
                          src={toAssetPath(carouselMedia[carouselIndex].src)}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
                         <span className="text-[10px] font-mono text-white tracking-widest">
                            {carouselIndex + 1} / {carouselMedia.length}
                         </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
