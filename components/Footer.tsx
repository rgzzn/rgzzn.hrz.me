import React from 'react';
import { AtSign, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="max-w-6xl mx-auto w-full flex flex-col items-center">
      <div className="mb-32 flex flex-col items-center text-center">
        {/* Animated Diamond Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-24 h-24 mb-10 grid grid-cols-4 grid-rows-4 gap-1 p-2 border-2 border-black dark:border-white/20 animate-spin-slow cursor-crosshair"
        >
          <div className="bg-black dark:bg-white col-span-2 row-span-2"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-1"></div>
          <div className="bg-black/20 dark:bg-white/20 col-span-1 row-span-1"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-1 col-start-4"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-2 col-start-1 row-start-3"></div>
          <div className="bg-black dark:bg-white col-span-2 row-span-1 col-start-2 row-start-3"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-1 col-start-4 row-start-3"></div>
          <div className="bg-black dark:bg-white col-span-1 row-span-1 col-start-2 row-start-4"></div>
          <div className="bg-black dark:bg-white col-span-2 row-span-1 col-start-3 row-start-4"></div>
        </motion.div>

        <motion.a 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100 }}
          href="https://www.linkedin.com/in/rgzzn/" target="_blank" rel="noreferrer" className="relative inline-block"
        >
          <span className="font-mono text-xl md:text-4xl lg:text-5xl font-bold tracking-tight border-b-4 border-black dark:border-white/20 pb-2 px-4 py-2 block">
            CONTATTAMI SU LINKEDIN
          </span>
          <span className="absolute -right-4 md:-right-8 -top-6 text-[10px] md:text-xs font-mono bg-black dark:bg-white text-primary px-2 py-1 rotate-12">
            SECURE_LINKEDIN_LINK
          </span>
        </motion.a>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xs font-mono uppercase tracking-widest"
        >
          Contatti completi disponibili su richiesta
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end mix-blend-multiply border-t border-black/10 dark:border-white/10 pt-12 pb-8"
      >
        <div className="font-serif italic text-2xl leading-relaxed max-w-sm">
          "Sviluppo software, governance IT e soluzioni digitali."
        </div>
        <div className="flex gap-4 md:justify-end">
          <a href="mailto:rgzzn@hrz.me" className="p-3 border border-black dark:border-white/20 hover:scale-110 active:scale-95 transition-transform rounded-full" aria-label="Invia un'email a Luca">
            <AtSign size={20} />
          </a>
          <a href="https://www.instagram.com/rgzzn" target="_blank" rel="noreferrer" className="p-3 border border-black dark:border-white/20 hover:scale-110 active:scale-95 transition-transform rounded-full" aria-label="Apri Instagram di Luca">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rgzzn/" className="p-3 border border-black dark:border-white/20 hover:scale-110 active:scale-95 transition-transform rounded-full" aria-label="Apri LinkedIn di Luca">
            <Linkedin size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        className="w-full text-center mt-20 mb-8 text-[11px] font-mono uppercase tracking-widest"
      >
        Luca Ragazzini ©2026
      </motion.div>
    </footer>
  );
};

export default Footer;
