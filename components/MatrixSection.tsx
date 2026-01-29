import React from 'react';

const MatrixSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto w-full mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7">
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 opacity-50 font-mono">
          The Hybrid Philosophy
        </h3>
        <p className="text-3xl md:text-5xl leading-[1.2] mb-10 tracking-tight font-medium text-black">
          "La creatività è una <span className="font-serif italic font-normal text-4xl md:text-6xl text-black mr-1">mente selvaggia</span> 
          e un <span className="font-mono bg-primary text-white px-2 py-0.5 text-2xl md:text-4xl selection:bg-black selection:text-white inline-block transform -rotate-1 mt-2 md:mt-0">occhio disciplinato</span>."
        </p>
        <p className="text-lg opacity-80 max-w-xl font-mono leading-relaxed border-l-2 border-primary pl-4">
          01. Intuizione (Wild).<br/>
          02. Rigore (Disciplined).<br/>
          03. Impatto (Result).
        </p>
      </div>

      <div className="md:col-span-5 flex flex-col items-center justify-center p-8 bg-neutral-50 rounded-none border border-black/10 aspect-square relative overflow-hidden group">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-primary/5 animate-pulse-slow"></div>
        
        {/* Scanning Line - Continuous Movement */}
        <div className="absolute left-0 w-full h-[2px] bg-primary/30 animate-scan pointer-events-none blur-[1px]"></div>
        
        <div className="relative w-full h-full max-w-[280px] max-h-[280px]">
          {/* Axis Labels with Fade In */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold tracking-widest uppercase opacity-40 animate-enter-up delay-200">Logic</div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-serif italic font-bold tracking-widest uppercase text-primary animate-enter-up delay-200">Magic</div>
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 writing-vertical-rl rotate-180 text-[10px] font-mono font-bold tracking-widest uppercase opacity-40 animate-enter-up delay-200">System</div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 writing-vertical-rl text-[10px] font-mono font-bold tracking-widest uppercase opacity-40 animate-enter-up delay-200">Chaos</div>
          
          {/* Grid Lines - Animated drawing */}
          <div className="absolute inset-0 border border-black/10"></div>
          <div className="absolute top-1/2 left-0 w-0 h-[1px] bg-black/10 animate-draw-w delay-300"></div>
          <div className="absolute left-1/2 top-0 w-[1px] h-0 bg-black/10 animate-draw-h delay-300"></div>
          
          {/* The "RG" Dot - Pulse Animation */}
          <div className="absolute top-[40%] left-[65%] w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full flex items-center justify-center z-10 shadow-xl ring-4 ring-primary/30 animate-pulse-slow group-hover:scale-110 transition-transform duration-500">
            <span className="text-[10px] text-white font-bold font-mono">RG</span>
          </div>
          
          {/* Quadrant Labels */}
          <div className="absolute top-4 left-4 text-[9px] font-mono opacity-0 animate-enter-up delay-500">Architecture</div>
          <div className="absolute bottom-4 right-4 text-[9px] font-serif italic text-primary opacity-0 animate-enter-up delay-700">Storytelling</div>
          <div className="absolute top-1/4 right-8 text-[9px] font-mono opacity-0 animate-enter-up delay-500">Automation</div>
          <div className="absolute bottom-1/4 left-8 text-[9px] font-serif italic opacity-0 animate-enter-up delay-500">Empathy</div>
        </div>
      </div>
    </section>
  );
};

export default MatrixSection;