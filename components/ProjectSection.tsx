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
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Microsoft-Entra-Suite-Final-Thumbnail-image?scl=1"
  },
  {
    id: "GA4",
    title: "Website Efficiency",
    year: "ANALYTICS",
    label: "GOOGLE",
    image: "https://blog.marketing-espresso.com/wp-content/uploads/2023/09/google-analytics-4.jpg"
  },
  {
    id: "SYS",
    title: "Server Infrastructure",
    year: "DEPLOYED",
    label: "ADMIN",
    image: "https://img.corrierecomunicazioni.it/wp-content/uploads/2017/11/datacenter-130627170345.jpg"
  }
];

const ProjectSection: React.FC<ProjectSectionProps> = ({ setActiveImage, setActiveLabel }) => {
  return (
    <section className="max-w-6xl mx-auto w-full mb-40">
      <div className="mb-12 opacity-40 flex justify-between items-end border-b border-black dark:border-white/20 pb-2">
        <span className="text-xs font-bold tracking-[0.2em] font-mono uppercase">
          Certifications & Competencies
        </span>
        <span className="text-[10px] font-mono hidden md:block">SCROLL TO EXPLORE</span>
      </div>

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
