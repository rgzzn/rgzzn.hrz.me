import React from 'react';

interface SkillSectionProps {
  setActiveImage: (img: string | null) => void;
  setActiveLabel: (label: string | null) => void;
}

const items = [
  {
    title: "Server Administration",
    category: "Infrastructure / IT",
    label: "LOGIC",
    image: "https://images.unsplash.com/photo-1558494949-ef526bca4852?q=80&w=800&auto=format&fit=crop",
    font: "font-mono"
  },
  {
    title: "Social Media Strategy",
    category: "Marketing / Content",
    label: "MAGIC",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Microsoft Suite Admin",
    category: "Security / Business ",
    label: "LOGIC",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    font: "font-mono"
  },
  {
    title: "Data Analytics",
    category: "Google Analytics / Insights",
    label: "HYBRID",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "3D Design & Rendering",
    category: "Design / 3D",
    label: "LOGIC",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Video & Photo Editing",
    category: "FCP / Adobe Suite",
    label: "LOGIC",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
  }
];

const SkillSection: React.FC<SkillSectionProps> = ({ setActiveImage, setActiveLabel }) => {
  return (
    <section className="max-w-6xl mx-auto w-full relative mb-40">
      <div className="mb-12 opacity-40">
        <span className="text-xs font-bold tracking-[0.2em] border-b border-black dark:border-white/20 pb-1 font-mono uppercase">
          Competenze
        </span>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 relative">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative py-4 border-b-2 border-black/20 dark:border-white/20 cursor-none"
            onMouseEnter={() => {
              setActiveImage(item.image);
              setActiveLabel(item.label);
            }}
            onMouseLeave={() => {
              setActiveImage(null);
              setActiveLabel(null);
            }}
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 z-20 relative pointer-events-none">
              <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase ${item.font || ''}`}>
                {item.title}
              </h2>
              <span className={`text-sm md:text-xl opacity-60 ${item.font === 'font-mono' ? 'font-mono uppercase text-sm' : 'font-serif italic text-xl'}`}>
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
