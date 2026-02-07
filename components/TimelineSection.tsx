import React from 'react';

const TimelineSection: React.FC = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto w-full mb-40 relative pl-4 md:pl-0">
      <div className="mb-16 opacity-40">
        <span className="text-xs font-bold tracking-[0.2em] border-b border-black dark:border-white/20 pb-1 font-mono uppercase">
          Esperienza professionale
        </span>
      </div>

      <div className="relative ml-2 md:ml-0 space-y-20">
        {/* Animated Vertical Line */}
        <div className="absolute left-0 top-0 w-[2px] bg-black/20 dark:bg-white/20 h-full origin-top animate-grow-h"></div>

        {/* Item 1 */}
        <div className="relative pl-8 md:pl-16 opacity-0 animate-enter-up delay-200">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-black dark:border-white/20 z-10 animate-pulse-soft"></div>
          <span className="font-mono text-sm font-bold opacity-60 mb-2 block">In corso</span>
          <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">IT & Social Media Manager</h4>
          <span className="font-mono text-xs border border-black dark:border-white/20 px-2 py-0.5 mb-4 inline-block opacity-60">COMEGA S.r.l. // Forlì</span>
          <p className="font-serif italic text-xl leading-relaxed opacity-90 max-w-lg border-l-2 border-black dark:border-white/30 pl-4">
            Gestione autonoma dell'intero ecosistema IT e della presenza digitale aziendale, dal cablaggio alla strategia LinkedIn.
          </p>
          <ul className="mt-6 space-y-3 text-sm md:text-base font-mono leading-relaxed opacity-80">
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Windows Server, Active Directory, DNS/DHCP, GPO.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Virtualizzazione VMware & Hyper-V, migrazioni e consolidamento.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Microsoft 365, Entra ID, Intune, MFA e Conditional Access.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Firewall FortiGate, segmentazione rete, VLAN e VPN.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Backup/DR con Veeam e NAS dedicati.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Incident response, analisi forense e remediation.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Piano editoriale LinkedIn, copy tecnico e storytelling industriale.</span></li>
          </ul>
        </div>

        {/* Item 2 */}
        <div className="relative pl-8 md:pl-16 opacity-0 animate-enter-up delay-300">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-black dark:border-white/20 z-10 animate-pulse-soft"></div>
          <span className="font-mono text-sm font-bold opacity-60 mb-2 block">In corso</span>
          <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">IT Manager</h4>
          <span className="font-mono text-xs border border-black dark:border-white/20 px-2 py-0.5 mb-4 inline-block opacity-60">BIPRES S.p.A. // Portico di Romagna</span>
          <p className="font-serif italic text-xl leading-relaxed opacity-90 max-w-lg border-l-2 border-primary pl-4">
            Ruolo IT focalizzato su cybersecurity, hardening e protezione endpoint in ambienti industriali.
          </p>
          <ul className="mt-6 space-y-3 text-sm md:text-base font-mono leading-relaxed opacity-80">
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Sophos Intercept X EDR/XDR e Defender for Endpoint.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Analisi log, eventi e query XDR con approccio analitico.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Hardening sistemi, auditing e piani correttivi.</span></li>
          </ul>
        </div>

        {/* Item 3 */}
        <div className="relative pl-8 md:pl-16 opacity-0 animate-enter-up delay-500">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-white border-2 border-black dark:border-white/20 z-10"></div>
          <span className="font-mono text-sm font-bold opacity-60 mb-2 block">Sep 2021 — Apr 2023</span>
          <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">Purchasing Agent</h4>
          <span className="font-mono text-xs border border-black dark:border-white/20 px-2 py-0.5 mb-4 inline-block opacity-60">BIPRES S.p.A. // Portico di Romagna</span>
          <p className="font-serif italic text-xl leading-relaxed opacity-90 max-w-lg border-l-2 border-black dark:border-white/30 pl-4">
            Gestione delle trattative d'acquisto, ottimizzazione dei processi di approvvigionamento e relazioni con i fornitori (apprendistato).
          </p>
          <ul className="mt-6 space-y-3 text-sm md:text-base font-mono leading-relaxed opacity-80">
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Analisi fabbisogni, scouting fornitori e negoziazioni.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Controllo ordini, tempi di consegna e reportistica.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Supporto ai team tecnici e amministrativi.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
