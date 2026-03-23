import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const education = [
  {
    title: 'Lingue',
    place: 'Competenze linguistiche',
    focus: [
      'Italiano: madrelingua.',
      'Inglese: professionale.'
    ]
  },
  {
    title: 'Skill distintivi',
    place: 'Approccio operativo',
    focus: [
      'Visione sistematica completa: dall\'infrastruttura fisica al posizionamento del brand.',
      'Responsabilità dirette su indecisioni IT strategiche e operative, senza dipendenza da consulenze esterne.',
      'Gestione efficace di ambienti ad alta pressione: incidenti, downtime, criticità di sicurezza e scadenze industriali'
    ]
  },
  {
    title: 'Obiettivo professionale',
    place: 'Crescita e responsabilità',
    focus: [
      'Consolidare ruoli ad alta responsabilità dove infrastruttura IT, sicurezza e comunicazione strategica convergono in un unico processo decisionale.',
      'Generare valore concreto per l\'organizzazione, riportando struttura dove c\'è frammentazione e trasformando criticità operative in soluzioni scalabili.'
    ]
  }
];

const FocusSection: React.FC = () => {
  return (
    <section id="focus" className="max-w-6xl mx-auto w-full mb-40">
      <div className="mb-12 opacity-40">
        <span className="text-xs font-bold tracking-[0.2em] border-b border-black dark:border-white/20 pb-1 font-mono uppercase">
          Focus
        </span>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {education.map((item) => (
          <motion.div variants={itemVariants} key={item.title} className="border border-black/10 dark:border-white/10 p-8 bg-neutral-50 dark:bg-black-soft">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                {item.title}
              </h3>
            </div>
            <span className="text-xs font-mono border border-black dark:border-white/20 px-2 py-1 inline-block mb-6 opacity-60">
              {item.place}
            </span>
            <ul className="space-y-3 text-sm md:text-base font-mono leading-relaxed opacity-80">
              {item.focus.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FocusSection;
