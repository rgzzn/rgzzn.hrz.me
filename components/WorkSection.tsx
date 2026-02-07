import React from 'react';

interface WorkSectionProps {
  setActiveImage: (img: string | null) => void;
  setActiveLabel: (label: string | null) => void;
}

const workItems = [
  {
    title: 'Suite ordini B2B per aziende manifatturiere',
    category: 'Applicazione sviluppata',
    year: '2024',
    label: 'APP',
    description:
      'Dashboard operativa con ruoli, workflow approvativi e analisi KPI in tempo reale per la forza vendita.',
    tags: ['Product design', 'React', 'API'],
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'Corporate site per studio di consulenza',
    category: 'Sito web',
    year: '2023',
    label: 'WEB',
    description:
      'UI editoriale con animazioni leggere, storytelling verticale e ottimizzazione SEO multi-lingua.',
    tags: ['Branding', 'UX', 'SEO'],
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Locandine evento retail stagionale',
    category: 'Locandine',
    year: '2024',
    label: 'PRINT',
    description:
      'Sistema grafico modulare per stampati, con gerarchie visive chiare e palette ad alto impatto.',
    tags: ['Grafica', 'Layout', 'Print'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Catalogo prodotti industriali',
    category: 'Cataloghi',
    year: '2022',
    label: 'CAT',
    description:
      'Impaginazione pulita e schede tecniche leggibili, con sezioni cromatiche per linee prodotto.',
    tags: ['Editorial', 'Info design', 'InDesign'],
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Visual identity per brand digitale',
    category: 'Grafiche',
    year: '2023',
    label: 'BRAND',
    description:
      'Kit social completo, pattern proprietari e tone of voice visivo coerente tra touchpoint.',
    tags: ['Brand kit', 'Social', 'Design system'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Landing page per lancio prodotto',
    category: 'Sito web',
    year: '2024',
    label: 'LAUNCH',
    description:
      'Sezione hero dinamica, blocchi di prova sociale e funnel ottimizzato per lead qualificati.',
    tags: ['Conversion', 'Motion', 'Copy'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop',
  },
];

const WorkSection: React.FC<WorkSectionProps> = ({ setActiveImage, setActiveLabel }) => {
  return (
    <section id="work" className="max-w-6xl mx-auto w-full mb-40">
      <div className="mb-12 opacity-40 flex justify-between items-end border-b border-black dark:border-white/20 pb-2">
        <span className="text-xs font-bold tracking-[0.2em] font-mono uppercase">Work</span>
        <span className="text-[10px] font-mono hidden md:block">SELEZIONE LAVORI</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Lavori selezionati
            <span className="block text-primary">app, web, grafica &amp; print</span>
          </h2>
          <p className="mt-6 text-sm md:text-base font-mono leading-relaxed opacity-70 max-w-xl">
            Qui raccolgo i progetti più rappresentativi: applicazioni sviluppate, siti web, locandine, cataloghi e
            grafiche. Ogni scheda è un punto di partenza per raccontare il progetto e aggiungere nuove consegne.
          </p>
        </div>
        <div className="border border-black/10 dark:border-white/20 rounded-2xl p-6 backdrop-blur">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] opacity-60">
            <span>Focus</span>
            <span>2022 · 2024</span>
          </div>
          <div className="mt-6 space-y-4">
            {[
              'Design digitale e sviluppo front-end',
              'Grafica editoriale e materiali stampati',
              'Brand identity e comunicazione visual',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm font-mono opacity-70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['App', 'Web', 'Print', 'Cataloghi', 'Grafica'].map((tag) => (
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
            className={`group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/20 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/5 ${
              item.featured ? 'md:col-span-2' : ''
            }`}
            onMouseEnter={() => {
              setActiveImage(item.image);
              setActiveLabel(item.label);
            }}
            onMouseLeave={() => {
              setActiveImage(null);
              setActiveLabel(null);
            }}
            onFocus={() => {
              setActiveImage(item.image);
              setActiveLabel(item.label);
            }}
            onBlur={() => {
              setActiveImage(null);
              setActiveLabel(null);
            }}
            tabIndex={0}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 border border-black/20 dark:border-white/20 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs font-mono opacity-60">{item.year}</span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm md:text-base font-mono opacity-70 leading-relaxed">
                  {item.description}
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

              <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div className="h-24 rounded-2xl border border-black/10 dark:border-white/20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_rgba(0,0,0,0))] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(0,0,0,0))]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
                  View
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
