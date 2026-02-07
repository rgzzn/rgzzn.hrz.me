import React, { useEffect, useMemo, useState } from 'react';

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
}

interface WorkSectionProps {
  setActiveImage: (img: string | null) => void;
  setActiveLabel: (label: string | null) => void;
}

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
    tags: ['Grafica fiera', 'Print', 'Branding'],
    heroImage: '/assets/work/host-milano/PIC/IMG_0068.jpeg',
    previewMedia: [
      { type: 'image', src: '/assets/work/host-milano/PIC/IMG_0091.jpeg' },
      { type: 'image', src: '/assets/work/host-milano/PIC/IMG_2431.jpeg' },
      { type: 'image', src: '/assets/work/host-milano/PIC/IMG_2433.jpeg' },
    ],
    carousel: [
      { type: 'image', src: '/assets/work/host-milano/PIC/IMG_0068.jpeg' },
      { type: 'image', src: '/assets/work/host-milano/PIC/IMG_0091.jpeg' },
      { type: 'image', src: '/assets/work/host-milano/PIC/IMG_2431.jpeg' },
      { type: 'image', src: '/assets/work/host-milano/PIC/IMG_2433.jpeg' },
      { type: 'video', src: '/assets/work/host-milano/VID/Host-VideoLoop-DEF-4K.mov' },
      { type: 'video', src: '/assets/work/host-milano/VID/PascucciVideoLoop-DEF.mp4' },
    ],
    downloads: [
      { label: 'Coffee Packaging (PDF)', url: '/assets/work/host-milano/PDF/Coffee%20Packaging.pdf' },
      { label: 'Packaging Caffè (PDF)', url: '/assets/work/host-milano/PDF/Packaging%20Caff%C3%A8.pdf' },
    ],
  },
  {
    id: 'ipack-ima-2025',
    title: 'IPACK-IMA Milano',
    category: 'Packaging & processing',
    period: 'Maggio 2025',
    location: 'Fiera Milano · Rho',
    label: 'IPACK',
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
    heroImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    previewMedia: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop' },
    ],
    carousel: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1400&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1400&auto=format&fit=crop' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop' },
    ],
    downloads: [
      { label: 'Download Assets', url: '/assets/ipack-ima-2025-assets.zip' },
    ],
  },
];

const WorkSection: React.FC<WorkSectionProps> = ({ setActiveImage, setActiveLabel }) => {
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
    setCarouselIndex((prev) => (prev + 1) % carouselMedia.length);
  };

  const goToPrev = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselMedia.length) % carouselMedia.length);
  };

  const handleOpen = (item: WorkItem) => {
    setActiveWork(item);
    setActiveImage(item.heroImage);
    setActiveLabel(item.label);
  };
  
  return (
    <section id="work" className="max-w-6xl mx-auto w-full mb-40">
      <div className="mb-12 opacity-40 flex justify-between items-end border-b border-black dark:border-white/20 pb-2">
        <span className="text-xs font-bold tracking-[0.2em] font-mono uppercase">Work</span>
        <span className="text-[10px] font-mono hidden md:block">FIERE &amp; PROGETTI</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Fiere e progetti speciali
            <span className="block text-primary">HOST · IPACK-IMA · Milano</span>
          </h2>
          <p className="mt-6 text-sm md:text-base font-mono leading-relaxed opacity-70 max-w-xl">
            Due progetti fieristici chiave con layout, materiali grafici e strumenti di comunicazione dedicati.
            Apri ogni scheda per vedere dettagli, panoramiche fotografiche e scaricare gli asset.
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
              'Coordinati stampa e comunicazione teaser',
              'Toolkit digitali e download per il team',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm font-mono opacity-70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Fiera', 'Allestimento', 'Print', 'Digital', 'Asset'].map((tag) => (
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
              setActiveImage(item.heroImage);
              setActiveLabel(item.label);
            }}
            onMouseLeave={() => {
              setActiveImage(null);
              setActiveLabel(null);
            }}
            onFocus={() => {
              setActiveImage(item.heroImage);
              setActiveLabel(item.label);
            }}
            onBlur={() => {
              setActiveImage(null);
              setActiveLabel(null);
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
                       <video src={media.src} className="h-full w-full object-cover" muted loop playsInline />
                    ) : ( 
                       <img src={media.src} alt="" className="h-full w-full object-cover" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
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
                    <img src={activeWork.heroImage} alt="" className="w-full h-60 object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {activeWork.previewMedia?.slice(0, 2).map((media, index) => (
                      <div
                        key={index}
                        className="h-28 rounded-2xl overflow-hidden border border-black/10 dark:border-white/20"
                      >
                        {media.type === 'video' ? (
                          <video src={media.src} className="h-full w-full object-cover" muted loop playsInline />
                        ) : (
                          <img src={media.src} alt="" className="h-full w-full object-cover" />
                        )}
                      </div>
                    ))}
                  </div>
                  {activeWork.downloads?.map((download) => (
                    <a
                      key={download.label}
                      href={download.url}
                      download
                      className="inline-flex items-center justify-center w-full text-xs font-mono uppercase tracking-[0.3em] px-4 py-3 rounded-full bg-primary text-black transition-transform active:scale-95 hover:opacity-90"
                    >
                      Download: {download.label}
                    </a>
                  ))}
                </div>
              </div>

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
                      src={carouselMedia[carouselIndex].src}
                      controls
                      className="w-full h-72 md:h-96 object-contain"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={carouselMedia[carouselIndex].src}
                      alt=""
                      className="w-full h-72 md:h-96 object-cover transition-all duration-300"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
