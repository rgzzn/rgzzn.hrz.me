import React from 'react';

interface ProjectSectionProps {
  setActiveImage: (img: string | null) => void;
  setActiveLabel: (label: string | null) => void;
}

const works = [
  {
    id: "SC-300",
    title: "Identity & Access Admin",
    year: "CERTIFIED",
    label: "MICROSOFT",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "GA4",
    title: "Website Efficiency",
    year: "ANALYTICS",
    label: "GOOGLE",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "SYS",
    title: "Server Infrastructure",
    year: "DEPLOYED",
    label: "ADMIN",
    image: "https://images.unsplash.com/photo-1558494949-ef526bca4852?q=80&w=800&auto=format&fit=crop"
  }
];

const ProjectSection: React.FC<ProjectSectionProps> = ({ setActiveImage, setActiveLabel }) => {
  return (
    <section className="max-w-6xl mx-auto w-full mb-40">
      <div className="mb-12 opacity-40 flex justify-between items-end border-b border-black pb-2">
        <span className="text-xs font-bold tracking-[0.2em] font-mono uppercase">
          Certifications & Focus
        </span>
        <span className="text-[10px] font-mono hidden md:block">SCROLL TO EXPLORE</span>
      </div>

      <div className="flex flex-col">
        {works.map((work) => (
          <div 
            key={work.id}
            className="group relative border-b border-black/20 hover:border-black transition-colors py-10 cursor-none"
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
              <span className="font-mono text-xl md:text-2xl opacity-40 group-hover:opacity-100 group-hover:text-black transition-all">
                {work.id}
              </span>
              <h3 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-300">
                {work.title}
              </h3>
              <span className="ml-auto text-xs font-mono border border-black px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline-block">
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