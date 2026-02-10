import React from "react";
import { toAssetPath } from "../utils/assetPath";

const Navigation: React.FC = () => {
  return (
    <aside className="fixed right-0 inset-y-0 h-[100svh] w-14 sm:w-14 md:w-16 bg-black text-primary flex flex-col justify-between items-center pt-[calc(1.5rem+env(safe-area-inset-top))] pb-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 border-l border-white/10">
      <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden animate-ring-pulse">
        <img
          src={toAssetPath("/assets/luca.png")}
          alt="Luca Ragazzini"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <nav className="flex flex-col gap-5 sm:gap-6 md:gap-8 items-center flex-1 justify-center w-full min-h-0 overflow-y-auto no-scrollbar py-8">
        {[
          { label: "About", id: "about" },
          { label: "Skills", id: "skills" },
          { label: "Experience", id: "experience" },
          { label: "Focus", id: "focus" },
          { label: "Work", id: "work" },
          { label: "Portfolio", id: "portfolio" },
          { label: "Contact", id: "contact" },
        ].map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex-shrink-0 writing-vertical-rl rotate-180 text-[10px] sm:text-[11px] md:text-sm font-bold tracking-[0.25em] uppercase text-center py-2 px-1 hover:text-white transition-colors animate-enter-up"
            style={{
              animationDelay: `${400 + index * 100}ms`,
              opacity: 0,
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

    </aside>
  );
};

export default Navigation;
