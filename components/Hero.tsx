import React from 'react';
import { Asterisk } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header id="about" className="flex justify-between items-start mb-24 md:mb-32 relative">
      <div className="max-w-5xl relative z-10">
        <div className="absolute -left-12 -top-12 opacity-10 animate-float pointer-events-none hidden lg:block">
           {/* Abstract Geometric Decoration */}
           <div className="animate-spin-slow">
             <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40L50 0Z" fill="currentColor" />
             </svg>
           </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] uppercase text-black dark:text-white">
          <span className="block opacity-0 animate-enter-up">LUCA</span>
          <span className="block opacity-0 animate-enter-up delay-100">RAGAZZINI</span>
          <span className="flex flex-wrap items-baseline gap-2 opacity-0 animate-enter-up delay-200">
            <span className="font-mono text-3xl md:text-5xl lg:text-6xl align-baseline opacity-100 bg-black text-white dark:bg-white dark:text-black px-2">
              IT & SOCIAL MEDIA
            </span> 
            <span className="font-serif italic font-normal lowercase tracking-normal text-primary flex items-center gap-2">
              MANAGER
              <Asterisk className="w-8 h-8 md:w-12 md:h-12 animate-spin-slow md:animate-wiggle-soft text-black dark:text-white opacity-50" />
            </span>
          </span>
        </h1>
        
        <div className="mt-8 font-mono text-xs font-bold tracking-widest uppercase opacity-0 animate-enter-up delay-300 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-primary animate-pulse"></span>
          <span>Forlì (FC), Italia</span>
        </div>

        <p className="mt-8 text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl font-serif italic border-l-2 border-black dark:border-white/20 pl-4">
        IT e Social Media Manager con esperienza nella gestione di infrastrutture digitali, sicurezza informatica e comunicazione aziendale.
Affianco all’attività IT, coltivo una forte passione per lo sviluppo di applicazioni e progetti web, curando anche gli aspetti di design e user experience.
Mi occupo di progettare soluzioni digitali affidabili, funzionali e sostenibili nel tempo, unendo competenze tecniche e sensibilità visiva.
        </p>

        <div className="mt-6 flex items-center gap-2 md:gap-3 md:ml-1">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] opacity-60">mood</span>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary animate-sparkle-dance" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70 animate-sparkle-dance delay-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/50 animate-sparkle-dance delay-500" />
          </div>
        </div>

      </div>

      <div className="hidden md:flex flex-col items-center gap-2 mt-4 opacity-0 animate-enter-up delay-500 animate-float-delayed">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase mb-1">Admin</span>
        <div className="relative w-12 h-24 bg-black/5 dark:bg-white/10 rounded-full border-2 border-black dark:border-white/20 p-1 flex flex-col justify-between cursor-pointer">
          <div className="w-full aspect-square bg-black dark:bg-white rounded-full shadow-lg transform translate-y-0" />
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-20">
            <div className="w-0.5 h-1.5 bg-black dark:bg-white mb-1"></div>
            <div className="w-0.5 h-1.5 bg-black dark:bg-white mt-1"></div>
          </div>
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase mt-1 font-serif italic text-primary">Social</span>
      </div>
    </header>
  );
};

export default Hero;
