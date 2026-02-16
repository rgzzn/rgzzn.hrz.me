import React, { useRef, useState, useEffect } from "react";
import { toAssetPath } from "../utils/assetPath";

const MagneticLink: React.FC<{ children: React.ReactNode; href: string; className?: string; style?: React.CSSProperties }> = ({ children, href, className, style }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    setPosition({ x: distance.x * 0.3, y: distance.y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      style={{ ...style, transform: `translate(${x}px, ${y}px)` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};

const Navigation: React.FC = () => {
  return (
    <aside className="fixed right-0 inset-y-0 h-[100svh] w-14 sm:w-14 md:w-16 bg-black text-primary flex flex-col justify-between items-center pt-[calc(1.5rem+env(safe-area-inset-top))] pb-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 border-l border-white/10">
      <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden animate-ring-pulse active:animate-mobile-tap-scale md:active:animate-none">
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
          { label: "Contact", id: "contact" },
        ].map((item, index) => (
          <MagneticLink
            key={item.id}
            href={`#${item.id}`}
            className="flex-shrink-0 writing-vertical-rl rotate-180 text-[10px] sm:text-[11px] md:text-sm font-bold tracking-[0.25em] uppercase text-center py-2 px-1 hover:text-white transition-colors animate-enter-up active:animate-mobile-tap-scale md:active:animate-none"
            style={{
              animationDelay: `${400 + index * 100}ms`,
              opacity: 0,
            }}
          >
            {item.label}
          </MagneticLink>
        ))}
      </nav>

    </aside>
  );
};

export default Navigation;
