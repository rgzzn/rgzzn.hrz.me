import React from 'react';

const Navigation: React.FC = () => {
  return (
    <aside className="fixed right-0 inset-y-0 h-[100svh] w-16 sm:w-20 md:w-24 bg-black text-primary flex flex-col justify-between items-center px-2 pt-[calc(1.75rem+env(safe-area-inset-top))] pb-[calc(1.75rem+env(safe-area-inset-bottom))] pr-[calc(env(safe-area-inset-right)+0.5rem)] z-40 border-l border-white/10">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs animate-pulse ring-2 ring-primary ring-offset-2 ring-offset-black">
        LR
      </div>

      <nav className="flex flex-col gap-5 sm:gap-6 items-center flex-1 justify-center min-h-0 overflow-y-auto py-2">
        {[
          { label: 'About', id: 'about' },
          { label: 'Profile', id: 'profile' },
          { label: 'Skills', id: 'skills' },
          { label: 'Experience', id: 'experience' },
          { label: 'Education', id: 'education' },
          { label: 'Portfolio', id: 'portfolio' },
          { label: 'Contact', id: 'contact' }
        ].map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="writing-vertical-rl rotate-180 text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-center w-full leading-none opacity-100 motion-safe:opacity-0 motion-safe:animate-enter-up"
            style={{ animationDelay: `${500 + (index * 100)}ms` }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="text-[10px] font-mono opacity-50 writing-vertical-rl animate-enter-up delay-1000">
        Luca Ragazzini | ©2026
      </div>
    </aside>
  );
};

export default Navigation;
