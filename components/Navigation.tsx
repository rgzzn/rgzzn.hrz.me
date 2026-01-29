import React from 'react';

const Navigation: React.FC = () => {
  return (
    <aside className="fixed right-0 top-0 h-full w-12 md:w-16 bg-black text-primary flex flex-col justify-between items-center py-8 z-40 border-l border-white/10">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs animate-pulse ring-2 ring-primary ring-offset-2 ring-offset-black">
        RG
      </div>
      
      <nav className="flex flex-col gap-12 items-center flex-1 justify-center">
        {['Contact', 'About', 'Work'].map((item, index) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="writing-vertical-rl rotate-180 text-xs md:text-sm font-bold tracking-widest hover:text-white transition-colors uppercase group relative opacity-0 animate-enter-up"
            style={{ animationDelay: `${500 + (index * 100)}ms` }}
          >
            {item}
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </nav>
      
      <div className="text-[10px] font-mono opacity-50 writing-vertical-rl animate-enter-up delay-1000">
        ©2024
      </div>
    </aside>
  );
};

export default Navigation;