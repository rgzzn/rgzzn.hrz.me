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
    label: "IT",
    image: "/media/hover/ad_server.png",
    font: "font-mono"
  },
  {
    title: "Microsoft 365 & Entra ID",
    category: "MFA / Conditional Access / Intune",
    label: "IT",
    image: "/media/hover/entra.png",
    font: "font-mono"
  },
  {
    title: "Endpoint Security",
    category: "Defender / Sophos Intercept X",
    label: "IT",
    image: "/media/hover/endpoint_security.png"
  },
  {
    title: "Firewall & VPN",
    category: "FortiGate / VLAN / Web Filtering",
    label: "IT",
    image: "/media/hover/firewall_e_vpn.png"
  },
  {
    title: "Virtualization",
    category: "Hyper-V / VMware / VM Design",
    label: "IT",
    image: "/media/hover/virtualization.png"
  },
  {
    title: "Backup & Disaster Recovery",
    category: "Veeam / NAS / Business Continuity",
    label: "IT",
    image: "/media/hover/backup_recovery.png",
    font: "font-mono"
  },
  {
    title: "Video Editing & Motion Content",
    category: "Final Cut pro / Motion / Compressor",
    label: "Media Designer",
    image: "/media/hover/fcp.png"
  },
  {
    title: "Digital Marketing B2B",
    category: "LinkedIn / Content / Storytelling",
    label: "Social Media",
    image: "/media/hover/marketing.png"
  },
  {
    title: "Photo Editing & Visaul Enhancement",
    category: "Lightroom / Photoshop / Illustrator",
    label: "Social Media",
    image: "/media/hover/lightroom.png"
  },
  {
    title: "Render Composition & Animation",
    category: "3D Scene Setup, Lightning, Post-Production",
    label: "Media Designer",
    image: "/media/hover/blender.png"
  },
  {
    title: "Web & App Development",
    category: "React / Next.js / Swift",
    label: "Developer",
    image: "/media/hover/dev.png"
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
