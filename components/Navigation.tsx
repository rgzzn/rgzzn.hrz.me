import React, { useRef, useState } from "react";
import { toAssetPath } from "../utils/assetPath";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Focus", id: "focus" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const MagneticLink: React.FC<{ children: React.ReactNode; href: string; className?: string; style?: React.CSSProperties }> = ({
  children,
  href,
  className,
  style,
}) => {
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
    <>
      <aside className="fixed inset-x-0 bottom-0 z-40 flex h-[calc(4rem+env(safe-area-inset-bottom))] items-center border-t border-white/10 bg-black/95 px-3 pb-[env(safe-area-inset-bottom)] md:hidden">
        <nav className="no-scrollbar flex w-full items-center gap-2 overflow-x-auto pr-12">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex-shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-primary transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#about"
          aria-label="Torna all'inizio"
          className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 overflow-hidden rounded-full border border-primary/40"
        >
          <img
            src={toAssetPath("/assets/luca.png")}
            alt="Luca Ragazzini"
            className="h-full w-full rounded-full object-cover"
          />
        </a>
      </aside>

      <aside className="fixed inset-y-0 right-0 hidden h-[100svh] w-16 flex-col items-center justify-between border-l border-white/10 bg-black text-primary pt-[calc(1.5rem+env(safe-area-inset-top))] pb-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 md:flex">
        <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full animate-ring-pulse">
          <img
            src={toAssetPath("/assets/luca.png")}
            alt="Luca Ragazzini"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <nav className="no-scrollbar flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-8 overflow-y-auto py-8">
          {navItems.map((item, index) => (
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
    </>
  );
};

export default Navigation;
