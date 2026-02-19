import React, { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SkillSection from './components/SkillSection';
import TimelineSection from './components/TimelineSection';
import FocusSection from './components/FocusSection';
import WorkSection from './components/WorkSection';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

const App: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoverable, setIsHoverable] = useState(false);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if the device supports hover and is not a small screen
    const hoverMedia = window.matchMedia('(hover: hover)');
    const widthMedia = window.matchMedia('(min-width: 768px)');
    
    const checkHover = () => {
      setIsHoverable(hoverMedia.matches && widthMedia.matches);
    };

    checkHover();
    
    hoverMedia.addEventListener('change', checkHover);
    widthMedia.addEventListener('change', checkHover);

    return () => {
      hoverMedia.removeEventListener('change', checkHover);
      widthMedia.removeEventListener('change', checkHover);
    };
  }, []);

  useEffect(() => {
    if (!isHoverable) return;

    let latestX = 0;
    let latestY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;

      if (rafIdRef.current !== null) {
        return;
      }

      rafIdRef.current = window.requestAnimationFrame(() => {
        setMousePos({ x: latestX, y: latestY });
        rafIdRef.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isHoverable]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      <div className="pointer-events-none fixed inset-0 -z-0 hidden md:block" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-aurora-drift" />
        <div className="absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-fuchsia-300/20 dark:bg-primary/20 blur-3xl animate-aurora-drift delay-700" />
        <div className="absolute bottom-4 left-1/3 h-64 w-64 rounded-full bg-purple-200/20 dark:bg-indigo-500/20 blur-3xl animate-aurora-drift delay-300" />
      </div>
      
      {/* Film Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Floating Image Reveal Component - Only on hoverable devices */}
      {isHoverable && (
        <MouseFollower 
          activeImage={activeImage} 
          activeLabel={activeLabel} 
          mousePos={mousePos} 
        />
      )}

      <div className="flex w-full">
        {/* Main Content Area */}
        <main className="relative flex flex-1 flex-col pl-6 pr-6 pt-12 pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pl-20 md:pr-[calc(7rem+env(safe-area-inset-right))] md:pb-12">
          
          <Hero />
          
          <div className="opacity-0 animate-enter-up delay-300">
            <SkillSection 
              setActiveImage={setActiveImage} 
              setActiveLabel={setActiveLabel}
              isHoverable={isHoverable}
            />
          </div>
          
          <TimelineSection />

          <FocusSection />

          <WorkSection 
            setActiveImage={setActiveImage} 
            setActiveLabel={setActiveLabel}
            isHoverable={isHoverable}
          />
          
          <Footer />
          
        </main>

        {/* Fixed Right Navigation */}
        <Navigation />
      </div>
      
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
