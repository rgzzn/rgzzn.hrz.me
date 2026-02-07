import React from 'react';

const education = [
  {
    title: 'Lingue',
    place: 'Competenze linguistiche',
    period: 'Italia / International',
    focus: [
      'Italiano: madrelingua.',
      'Inglese: professionale.'
    ]
  },
  {
    title: 'Skill distintivi',
    place: 'Approccio operativo',
    period: 'Full-stack',
    focus: [
      'Visione full-stack: dall\'hardware al brand.',
      'Autonomia totale nella gestione IT e decisioni critiche.',
      'Capacità di lavorare sotto pressione in situazioni critiche.'
    ]
  },
  {
    title: 'Obiettivo professionale',
    place: 'Crescita e responsabilità',
    period: 'Next step',
    focus: [
      'Crescere in ruoli ad alta responsabilità dove tecnologia, sicurezza e comunicazione convivono.',
      'Portare valore reale, ordine dove c\'è caos e soluzioni dove altri vedono solo problemi.'
    ]
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto w-full mb-40">
      <div className="mb-12 opacity-40">
        <span className="text-xs font-bold tracking-[0.2em] border-b border-black dark:border-white/20 pb-1 font-mono uppercase">
          Lingue & Obiettivi
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {education.map((item) => (
          <div key={item.title} className="border border-black/10 dark:border-white/10 p-8 bg-neutral-50 dark:bg-black-soft">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                {item.title}
              </h3>
              <span className="text-xs font-mono uppercase opacity-60">{item.period}</span>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
