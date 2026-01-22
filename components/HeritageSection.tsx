
import React, { useState, useEffect, useRef, useMemo } from 'react';

const HeritageSection: React.FC = () => {
  const [sparklingIndices, setSparklingIndices] = useState<number[]>([]);
  const scrollTimeout = useRef<number | null>(null);

  const gridRows = 14;
  const gridCols = 22;
  const totalStars = gridRows * gridCols;

  useEffect(() => {
    let lastScrollTime = 0;
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < 100) return; // Throttling scroll for performance
      lastScrollTime = now;

      const count = Math.floor(Math.random() * 2) + 2;
      const newSparkles: number[] = [];
      for (let i = 0; i < count; i++) {
        newSparkles.push(Math.floor(Math.random() * totalStars));
      }

      setSparklingIndices(prev => [...new Set([...prev, ...newSparkles])].slice(-15));

      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => setSparklingIndices([]), 600);
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
    <section className="relative py-32 md:py-52 px-6 overflow-hidden text-center bg-[#53663e]">
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
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 transition-[opacity,transform,color] duration-[800ms] ease-out will-change-transform ${isSparkling
                    ? 'text-white scale-[2] opacity-100 rotate-90'
                    : 'text-white/20 opacity-20 rotate-0'
                    }`}
                >
                  <path d="M5 0L5.6 4.4L10 5L5.6 5.6L5 10L4.4 5.6L0 5L4.4 4.4Z" fill="currentColor" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center space-x-4 mb-16 opacity-0 animate-[fade-in_1.5s_cubic-bezier(0.2,0.8,0.2,1)_forwards]">
          <span className="text-white/30 text-[10px]">◆</span>
          <span className="text-white text-[11px] uppercase tracking-[0.5em] font-semibold">THE OLIVE TREE STORY</span>
          <span className="text-white/30 text-[10px]">◆</span>
        </div>

        <div className="mb-14 w-40 h-40 md:w-56 md:h-56 opacity-0 animate-[fade-in_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_forwards] flex items-center justify-center">
          <img
            src="/logo.png"
            alt="The Olive Tree Logo"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed tracking-[0.05em] uppercase mb-20 max-w-4xl opacity-0 animate-[fade-in_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_forwards]">
          The Olive Tree is a must-visit dining destination for those seeking a taste of the Mediterranean in Southampton. Located on historic Oxford Street, we offer a menu filled with diverse and authentic dishes.
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 opacity-0 animate-[fade-in_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_forwards]">
          {['Book a table', 'View our menus'].map((label) => (
            <a key={label} href="#" className="group/link relative text-white serif text-xl md:text-2xl flex items-center gap-4 pb-2 border-b border-white/20 hover:border-white transition-transform duration-[1000ms] cubic-bezier(0.2, 0.8, 0.2, 1) hover:translate-x-6 will-change-transform" style={{ transitionDelay: '800ms' }}>
              <div className="grid grid-cols-1 grid-rows-1">
                {/* Phase 1: Cross-fade italic transform */}
                <span className="row-start-1 col-start-1 transition-all duration-[800ms] group-hover/link:opacity-0 group-hover/link:scale-95">
                  {label}
                </span>
                <span className="row-start-1 col-start-1 italic transition-all duration-[800ms] opacity-0 group-hover/link:opacity-100 group-hover/link:scale-105">
                  {label}
                </span>
                {/* Invisible Spacer */}
                <span className="row-start-1 col-start-1 invisible italic pointer-events-none" aria-hidden="true">{label}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/link:translate-x-3 transition-transform duration-[1000ms]" style={{ transitionDelay: '800ms' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
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
