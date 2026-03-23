import React from 'react';
import { Asterisk } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } }
};

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

        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] uppercase text-black dark:text-white"
        >
          <motion.span variants={item} className="block">LUCA</motion.span>
          <motion.span variants={item} className="block">RAGAZZINI</motion.span>
          <motion.span variants={item} className="flex flex-wrap items-baseline gap-2 mt-4">
            <span className="font-mono text-3xl md:text-5xl lg:text-6xl align-baseline bg-black text-white dark:bg-white dark:text-black px-2">
              IT & SOCIAL MEDIA
            </span> 
            <span className="font-serif italic font-normal lowercase tracking-normal text-primary flex items-center gap-2">
              MANAGER
              <Asterisk className="w-8 h-8 md:w-12 md:h-12 animate-spin-slow md:animate-wiggle-soft text-black dark:text-white opacity-50" />
            </span>
          </motion.span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          className="mt-8 font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-4"
        >
          <span className="w-8 h-[2px] bg-primary animate-pulse"></span>
          <span>Forlì (FC), Italia</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl font-serif italic border-l-2 border-black dark:border-white/20 pl-4"
        >
        IT & Social Media Manager con esperienza nella gestione di infrastrutture digitali, cybersecurity e comunicazione aziendale.<br></br>Integro governance IT e sviluppo di applicazioni web, curandone architettura, design e user experience in modo strategic e coerente.<br></br>Progetto soluzioni digitali affidabili e scalabili, unendo competenze tecniche, visione sistematica e sensibilità visiva.<br></br>Mi occupo inoltre della componente grafica e identitaria dei progetti: brand identity, materiali marketing e asset visivi allineati al posizionamento aziendale.
        </motion.p>

        <div className="mt-6 md:hidden relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/40 px-4 py-2 bg-primary/10">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">Nuovi progetti</span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(168,85,247,0.22),transparent)] bg-[length:220%_100%] animate-mobile-sheen" />
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
