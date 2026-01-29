import React from 'react';

interface MouseFollowerProps {
  activeImage: string | null;
  activeLabel: string | null;
  mousePos: { x: number; y: number };
}

const MouseFollower: React.FC<MouseFollowerProps> = ({ activeImage, activeLabel, mousePos }) => {
  if (!activeImage) return null;

  return (
    <div 
      className="pointer-events-none fixed z-50 transition-opacity duration-300 ease-out"
      style={{
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(-50%, -50%) rotate(-2deg)',
      }}
    >
      <div className="relative shadow-2xl border-4 border-black dark:border-white/40 bg-black w-[300px] md:w-[500px] aspect-video">
        <img 
          src={activeImage} 
          alt="Preview" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
        {activeLabel && (
          <div className="absolute bottom-4 right-4 bg-primary text-black px-2 py-1 text-xs font-bold font-mono border border-black dark:border-white/40">
            {activeLabel}
          </div>
        )}
      </div>
    </div>
  );
};

export default MouseFollower;
