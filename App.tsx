import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SkillSection from './components/SkillSection';
import MatrixSection from './components/MatrixSection';
import TimelineSection from './components/TimelineSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

const App: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden relative">
      
      {/* Film Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Floating Image Reveal Component */}
      <MouseFollower 
        activeImage={activeImage} 
        activeLabel={activeLabel} 
        mousePos={mousePos} 
      />

      <div className="flex w-full">
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col relative z-10 pl-6 pr-16 md:pl-20 md:pr-24 pt-12 pb-12">
          
          <Hero />
          
          <div className="opacity-0 animate-enter-up delay-300">
            <SkillSection 
              setActiveImage={setActiveImage} 
              setActiveLabel={setActiveLabel} 
            />
          </div>
          
          <MatrixSection />
          
          <TimelineSection />
          
          <ProjectSection 
            setActiveImage={setActiveImage} 
            setActiveLabel={setActiveLabel} 
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
