import React, { useState, useEffect } from 'react';
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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHoverable]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      
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
        <main className="flex-1 flex flex-col relative pl-6 pr-[calc(5rem+env(safe-area-inset-right))] md:pl-20 md:pr-[calc(7rem+env(safe-area-inset-right))] pt-12 pb-12">
          
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
    </div>
  );
};

export default App;
