import React from 'react';

const TimelineSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto w-full mb-40 relative pl-4 md:pl-0">
      <div className="mb-16 opacity-40">
        <span className="text-xs font-bold tracking-[0.2em] border-b border-black dark:border-white/20 pb-1 font-mono uppercase">
          Career Timeline
        </span>
      </div>

      <div className="relative ml-2 md:ml-0 space-y-20">
        {/* Animated Vertical Line */}
        <div className="absolute left-0 top-0 w-[2px] bg-black/20 dark:bg-white/20 h-full origin-top animate-grow-h"></div>

        {/* Item 1 */}
        <div className="relative pl-8 md:pl-16 opacity-0 animate-enter-up delay-200">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-black dark:border-white/20 z-10 animate-pulse-soft"></div>
          <span className="font-mono text-sm font-bold opacity-60 mb-2 block">May 2023 — Present</span>
          <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">IT & Social Media Manager</h4>
          <span className="font-mono text-xs border border-black dark:border-white/20 px-2 py-0.5 mb-4 inline-block opacity-60">COMEGA S.r.l. // Forlì</span>
          <p className="font-serif italic text-xl leading-relaxed opacity-90 max-w-lg border-l-2 border-black dark:border-white/30 pl-4">
            Gestione dell'amministrazione server e dell'infrastruttura IT, guidando al contempo la presenza digitale attraverso una gestione strategica dei Social Media.
          </p>
        </div>

        {/* Item 2 */}
        <div className="relative pl-8 md:pl-16 opacity-0 animate-enter-up delay-300">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-black dark:border-white/20 z-10 animate-pulse-soft"></div>
          <span className="font-mono text-sm font-bold opacity-60 mb-2 block">May 2023 — Present</span>
          <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">IT Manager</h4>
          <span className="font-mono text-xs border border-black dark:border-white/20 px-2 py-0.5 mb-4 inline-block opacity-60">BIPRES S.p.A. // Portico di Romagna</span>
          <p className="font-serif italic text-xl leading-relaxed opacity-90 max-w-lg border-l-2 border-primary pl-4">
            Supervisione delle operazioni IT, implementazione di Microsoft Entra ID e garanzia di una solida sicurezza e amministrazione del sistema.
          </p>
        </div>

        {/* Item 3 */}
        <div className="relative pl-8 md:pl-16 opacity-0 animate-enter-up delay-500">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-white border-2 border-black dark:border-white/20 z-10"></div>
          <span className="font-mono text-sm font-bold opacity-60 mb-2 block">Sep 2021 — Apr 2023</span>
          <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">Purchasing Agent</h4>
          <span className="font-mono text-xs border border-black dark:border-white/20 px-2 py-0.5 mb-4 inline-block opacity-60">BIPRES S.p.A. // Portico di Romagna</span>
          <p className="font-serif italic text-xl leading-relaxed opacity-90 max-w-lg border-l-2 border-black dark:border-white/30 pl-4">
            Gestione delle trattative d'acquisto, ottimizzazione dei processi di approvvigionamento e gestione delle relazioni con i fornitori (Apprendistato).
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
