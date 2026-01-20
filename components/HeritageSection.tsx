
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { LOGO_DATA_URL } from '../constants';

const HeritageSection: React.FC = () => {
  const [sparklingIndices, setSparklingIndices] = useState<number[]>([]);
  const scrollTimeout = useRef<number | null>(null);

  // Define grid dimensions for the sparkle background
  const gridRows = 14;
  const gridCols = 22;
  const totalStars = gridRows * gridCols;

  // Handle scroll detection for the shimmer effect
  useEffect(() => {
    const handleScroll = () => {
      const count = Math.floor(Math.random() * 3) + 3;
      const newSparkles: number[] = [];
      for (let i = 0; i < count; i++) {
        newSparkles.push(Math.floor(Math.random() * totalStars));
      }
      
      setSparklingIndices(prev => [...new Set([...prev, ...newSparkles])].slice(-20));
      
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = window.setTimeout(() => {
        setSparklingIndices([]);
      }, 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, [totalStars]);

  const starGrid = useMemo(() => {
    const items = [];
    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        items.push({
          id: r * gridCols + c,
          top: `${(r / (gridRows - 1)) * 100}%`,
          left: `${(c / (gridCols - 1)) * 100}%`,
        });
      }
    }
    return items;
  }, [gridRows, gridCols]);

  return (
    <section className="relative py-32 md:py-52 px-6 overflow-hidden text-center bg-[#53663e] transition-all duration-700">
      {/* Background Star Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <div className="relative w-full h-full">
          {starGrid.map((star) => {
            const isSparkling = sparklingIndices.includes(star.id);
            return (
              <div
                key={star.id}
                className="absolute p-4"
                style={{
                  top: star.top,
                  left: star.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <svg 
                  viewBox="0 0 10 10" 
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 transition-all duration-[1000ms] ease-out ${
                    isSparkling 
                      ? 'text-white scale-[2.5] opacity-100 rotate-90' 
                      : 'text-white/40 opacity-40 rotate-0'
                  }`}
                  style={{
                    filter: isSparkling ? 'drop-shadow(0 0 12px rgba(255,255,255,1))' : 'none'
                  }}
                >
                  <path d="M5 0L5.6 4.4L10 5L5.6 5.6L5 10L4.4 5.6L0 5L4.4 4.4Z" fill="currentColor" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Decorative Header */}
        <div className="flex items-center space-x-4 mb-16 opacity-0 animate-[fade-in_1.2s_ease-out_forwards]">
          <span className="text-white/30 text-[10px]">◆</span>
          <span className="text-white text-[11px] uppercase tracking-[0.5em] font-semibold">THE OLIVE TREE STORY</span>
          <span className="text-white/30 text-[10px]">◆</span>
        </div>

        {/* Brand Asset: The Olive Tree Logo Symbol */}
        <div className="mb-14 w-40 h-40 md:w-56 md:h-56 opacity-0 animate-[fade-in_1.2s_ease-out_0.2s_forwards] flex items-center justify-center">
          <img 
            src={LOGO_DATA_URL} 
            alt="The Olive Tree Logo" 
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Heritage Text Statement */}
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed tracking-[0.05em] uppercase mb-20 max-w-4xl opacity-0 animate-[fade-in_1.2s_ease-out_0.4s_forwards]">
          The Olive Tree is a must-visit dining destination for those seeking a taste of the Mediterranean in Southampton. Located on historic Oxford Street, we offer a menu filled with diverse and authentic dishes.
        </h3>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 opacity-0 animate-[fade-in_1.2s_ease-out_0.6s_forwards]">
          <a href="#" className="group relative text-white serif italic text-xl md:text-2xl flex items-center gap-4 pb-2 border-b border-white/20 hover:border-white transition-all">
            Book a table
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-3 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#" className="group relative text-white serif italic text-xl md:text-2xl flex items-center gap-4 pb-2 border-b border-white/20 hover:border-white transition-all">
            View our menus
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-3 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeritageSection;
