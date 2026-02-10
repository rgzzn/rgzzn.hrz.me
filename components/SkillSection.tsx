import React from 'react';
import { toAssetPath } from '../utils/assetPath';

interface SkillSectionProps {
  setActiveImage: (img: string | null) => void;
  setActiveLabel: (label: string | null) => void;
}

const items = [
  {
    title: "Windows Server & Active Directory",
    category: "DNS / DHCP / GPO / Domain",
    label: "LOGIC",
    image: "/media/hover/ad_server.png",
    font: "font-mono"
  },
  {
    title: "Microsoft 365 & Entra ID",
    category: "MFA / Conditional Access / Intune",
    label: "LOGIC",
    image: "/media/hover/entra.png",
    font: "font-mono"
  },
  {
    title: "Endpoint Security",
    category: "Defender / Sophos Intercept X",
    label: "MAGIC",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Firewall & VPN",
    category: "FortiGate / VLAN / Web Filtering",
    label: "HYBRID",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Virtualization",
    category: "Hyper-V / VMware / VM Design",
    label: "HYBRID",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Backup & Disaster Recovery",
    category: "Veeam / NAS / Business Continuity",
    label: "LOGIC",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    font: "font-mono"
  },
  {
    title: "PowerShell & Automation",
    category: "Scripting / Hardening / Log Analysis",
    label: "MAGIC",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Digital Marketing B2B",
    category: "LinkedIn / Content / Storytelling",
    label: "LOGIC",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop"
  }
];

const SkillSection: React.FC<SkillSectionProps> = ({ setActiveImage, setActiveLabel }) => {
  return (
    <section id="skills" className="max-w-6xl mx-auto w-full relative mb-40">
      <div className="mb-12 opacity-40">
        <span className="text-xs font-bold tracking-[0.2em] border-b border-black dark:border-white/20 pb-1 font-mono uppercase">
          Competenze chiave
        </span>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 relative">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative py-4 border-b-2 border-black/20 dark:border-white/20 cursor-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
            onMouseEnter={() => {
              setActiveImage(toAssetPath(item.image));
              setActiveLabel(item.label);
            }}
            onMouseLeave={() => {
              setActiveImage(null);
              setActiveLabel(null);
            }}
            onFocus={() => {
              setActiveImage(toAssetPath(item.image));
              setActiveLabel(item.label);
            }}
            onBlur={() => {
              setActiveImage(null);
              setActiveLabel(null);
            }}
            tabIndex={0}
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
