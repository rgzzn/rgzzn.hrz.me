import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

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
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "anticipate" }}
          className="absolute left-0 top-0 w-[2px] bg-black/20 dark:bg-white/20 h-full origin-top"
        ></motion.div>

        {/* Item 1 */}
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="relative pl-8 md:pl-16"
        >
          <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-black dark:border-white/20 z-10 animate-pulse-soft"></div>
          <span className="font-mono text-sm font-bold opacity-60 mb-2 block">In corso</span>
          <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">IT & Social Media Manager</h4>
          <span className="font-mono text-xs border border-black dark:border-white/20 px-2 py-0.5 mb-4 inline-block opacity-60">COMEGA S.r.l. // Forlì</span>
          <p className="font-serif italic text-xl leading-relaxed opacity-90 max-w-lg border-l-2 border-black dark:border-white/30 pl-4">
            Gestione autonoma dell'intero ecosistema IT, della presenza digitale e dell'identità visiva aziendale, dall'infrastruttura di rete alla progettazione di contenuti, interfacce e strumenti digitali proprietari.
          </p>
          <ul className="mt-6 space-y-3 text-sm md:text-base font-mono leading-relaxed opacity-80">
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Windows Server, Active Directory, DNS/DHCP, GPO.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Virtualizzazione VMware & Hyper-V, migrazioni e consolidamento infrastrutturale.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Microsoft 365, Entra ID, Intune, MFA e Conditional Access e gestione device.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Firewall FortiGate, segmentazione rete, VLAN, VPN e sicurezza perimetrale.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Backup/DR con Veeam e NAS dedicati.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Incident response, analisi forense e remediation.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Brand identity, visaul system e progettazione grafica per contesti industriali.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Photo editing, color grading e valorizzazione asset tecnici.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Video editing e motion content per comunicazione B2B.</span></li>
          </ul>
        </motion.div>

        {/* Item 2 */}
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="relative pl-8 md:pl-16"
        >
          <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-white dark:bg-white border-2 border-black dark:border-white/20 z-10"></div>
          <span className="font-mono text-sm font-bold opacity-60 mb-2 block">Apr 2023 - Ottobre 2025</span>
          <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">IT Manager</h4>
          <span className="font-mono text-xs border border-black dark:border-white/20 px-2 py-0.5 mb-4 inline-block opacity-60">BIPRES S.p.A. // Portico di Romagna</span>
          <p className="font-serif italic text-xl leading-relaxed opacity-90 max-w-lg border-l-2 border-black dark:border-white/30 pl-4">
            Ruolo IT focalizzato su cybersecurity, hardening e protezione endpoint in ambienti industriali.
          </p>
          <ul className="mt-6 space-y-3 text-sm md:text-base font-mono leading-relaxed opacity-80">
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Windows Server, Active Directory, DNS/DHCP, GPO.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Virtualizzazione VMware & Hyper-V, migrazioni e consolidamento infrastrutturale.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Microsoft 365, Entra ID, Intune, MFA e Conditional Access e gestione device.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Firewall FortiGate, segmentazione rete, VLAN, VPN e sicurezza perimetrale.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Backup/DR con Veeam e NAS dedicati.</span></li>
            <li className="flex gap-3"><span className="text-primary">▸</span><span>Incident response, analisi forense e remediation.</span></li>
          </ul>
        </motion.div>

        {/* Item 3 */}
        <motion.div 
          variants={itemVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="relative pl-8 md:pl-16"
        >
          <div className="absolute -left-[7px] top-2 w-4 h-4 rounded-full bg-white dark:bg-white border-2 border-black dark:border-white/20 z-10"></div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
