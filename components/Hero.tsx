import React from 'react';
import { Asterisk } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="flex justify-between items-start mb-24 md:mb-32 relative">
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
          <span className="block opacity-0 animate-enter-up">DECODING THE</span>
          <span className="block opacity-0 animate-enter-up delay-100">SYNTAX OF</span>
          <div className="flex flex-wrap items-baseline gap-2 opacity-0 animate-enter-up delay-200">
            <span className="font-mono text-4xl md:text-6xl lg:text-7xl align-baseline opacity-100 bg-black text-white dark:bg-white dark:text-black px-2">
              MACHINES
            </span> 
            <span>AND</span>
            <span className="font-serif italic font-normal lowercase tracking-normal text-primary flex items-center gap-2">
              minds.
              <Asterisk className="w-8 h-8 md:w-12 md:h-12 animate-spin-slow text-black dark:text-white opacity-50" />
            </span>
          </div>
        </h1>
        
        <div className="mt-8 font-mono text-xs font-bold tracking-widest uppercase opacity-0 animate-enter-up delay-300 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-primary animate-pulse"></span>
          <span>Luca Ragazzini: IT & Social Media Manager // Forlì, Italia</span>
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
