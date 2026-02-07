import React from 'react';
import { Terminal, Palette, AtSign } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="max-w-6xl mx-auto w-full flex flex-col items-center">
      <div className="mb-32 flex flex-col items-center text-center">
        {/* Animated Diamond Grid */}
        <div className="w-24 h-24 mb-10 grid grid-cols-4 grid-rows-4 gap-1 p-2 border-2 border-black dark:border-white/20 animate-spin-slow cursor-crosshair">
          <div className="bg-black dark:bg-white col-span-2 row-span-2"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-1"></div>
          <div className="bg-black/20 dark:bg-white/20 col-span-1 row-span-1"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-1 col-start-4"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-2 col-start-1 row-start-3"></div>
          <div className="bg-black dark:bg-white col-span-2 row-span-1 col-start-2 row-start-3"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-1 col-start-4 row-start-3"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-1 col-start-2 row-start-4"></div>
          <div className="bg-black dark:bg-white col-span-2 row-span-1 col-start-3 row-start-4"></div>
        </div>

        <a href="https://www.linkedin.com/in/rgzzn/" target="_blank" rel="noreferrer" className="relative inline-block">
          <span className="font-mono text-xl md:text-4xl lg:text-5xl font-bold tracking-tight border-b-4 border-black dark:border-white/20 pb-2 px-4 py-2 block">
            CONTATTAMI SU LINKEDIN
          </span>
          <span className="absolute -right-4 md:-right-8 -top-6 text-[10px] md:text-xs font-mono bg-black dark:bg-white text-primary px-2 py-1 rotate-12">
            SECURE_LINKEDIN_LINK
          </span>
        </a>
        <p className="mt-6 text-xs font-mono uppercase tracking-widest opacity-60">
          Contatti completi disponibili su richiesta
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end opacity-80 mix-blend-multiply border-t border-black/10 dark:border-white/10 pt-12 pb-8">
        <div className="font-serif italic text-2xl leading-relaxed max-w-sm">
          "Architettura digitale, governance IT e narrazione umana."
        </div>
        <div className="flex gap-4 md:justify-end">
          <a href="#profile" className="p-3 border border-black dark:border-white/20 rounded-full" aria-label="Vai al profilo">
            <Terminal size={20} />
          </a>
          <a href="#portfolio" className="p-3 border border-black dark:border-white/20 rounded-full" aria-label="Vai al portfolio">
            <Palette size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rgzzn/" className="p-3 border border-black dark:border-white/20 rounded-full" aria-label="Apri LinkedIn di Luca">
            <AtSign size={20} />
          </a>
        </div>
      </div>

      <div className="w-full text-center mt-20 mb-8 text-[11px] font-mono opacity-40 uppercase tracking-widest">
        Luca Ragazzini ©2026
      </div>
    </footer>
  );
};

export default Footer;
