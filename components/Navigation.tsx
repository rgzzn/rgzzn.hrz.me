import React, { useRef, useState, useEffect } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed right-4 top-4 z-[60] flex h-12 w-12 flex-col items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 transition-all active:scale-90 md:hidden pb-[env(safe-area-inset-top)]"
        aria-label="Toggle Menu"
      >
        <div className="relative flex h-5 w-6 flex-col items-center justify-between">
          <span className={`block h-0.5 w-full transform rounded-full bg-primary transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-2.5 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-full rounded-full bg-primary transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "w-0 opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full transform rounded-full bg-primary transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-3xl transition-all duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/40 bg-black/50 shadow-2xl mb-12">
          <img
            src={toAssetPath("/assets/luca.png")}
            alt="Luca Ragazzini"
            className="h-full w-full object-cover"
          />
        </div>
        
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-mono uppercase tracking-[0.2em] text-white/70 transition-all hover:text-white hover:scale-110 active:scale-95"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

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
