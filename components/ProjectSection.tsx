import React from 'react';

interface ProjectSectionProps {
  setActiveImage: (img: string | null) => void;
  setActiveLabel: (label: string | null) => void;
}

const works = [
  {
    id: "M365",
    title: "Microsoft 365 & Identity",
    year: "SECURITY",
    label: "IDENTITY",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "SEC",
    title: "Incident Response & XDR",
    year: "CYBER",
    label: "DEFENSE",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "DR",
    title: "Backup & DR Strategy",
    year: "OPS",
    label: "CONTINUITY",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "MKT",
    title: "LinkedIn & Industrial Storytelling",
    year: "BRAND",
    label: "DIGITAL",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop"
  }
];

const ProjectSection: React.FC<ProjectSectionProps> = ({ setActiveImage, setActiveLabel }) => {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto w-full mb-40">
      <div className="mb-12 opacity-40 flex justify-between items-end border-b border-black dark:border-white/20 pb-2">
        <span className="text-xs font-bold tracking-[0.2em] font-mono uppercase">
          Aree di specializzazione
        </span>
        <span className="text-[10px] font-mono hidden md:block">SCROLL TO EXPLORE</span>
      </div>

      <p className="text-sm md:text-base font-mono leading-relaxed opacity-70 max-w-3xl mb-10">
        Sintesi delle aree operative principali: infrastrutture Microsoft, cybersecurity, continuità operativa e
        comunicazione digitale industriale. I risultati numerici sono disponibili su richiesta.
      </p>

      <div className="flex flex-col">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative border-b border-black/20 dark:border-white/20 py-10 cursor-none"
            onMouseEnter={() => {
              setActiveImage(work.image);
              setActiveLabel(work.label);
            }}
            onMouseLeave={() => {
              setActiveImage(null);
              setActiveLabel(null);
            }}
          >
            <div className="flex items-baseline gap-6 md:gap-12 relative z-20 pointer-events-none">
              <span className="font-mono text-xl md:text-2xl opacity-60">
                {work.id}
              </span>
              <h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">
                {work.title}
              </h3>
              <span className="ml-auto text-xs font-mono border border-black dark:border-white/20 px-2 py-1 rounded-full opacity-60 hidden md:inline-block">
                {work.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
