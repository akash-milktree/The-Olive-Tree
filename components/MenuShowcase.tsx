
import React from 'react';

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
  </svg>
);

const MenuShowcase: React.FC = () => {
  const menuItems = [
    { label: 'Set Lunch Menu', italicDefault: false },
    { label: 'Evening A La Carte', italicDefault: false },
    { label: 'Wine & Cocktails', italicDefault: true },
  ];

  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden group bg-[#f2efe9]">
      {/* Background Image: Ultimate slow-motion cinematic zoom */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-[8000ms] cubic-bezier(0.2, 0, 0.2, 1) group-hover:scale-110 will-change-transform"
        style={{
          backgroundImage: 'url("/menus-bg.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-black/30 md:bg-black/20" />

      {/* Content Container */}
      <div className="relative z-20 h-full w-full px-6 md:px-12 flex items-center justify-start">
        <div className="relative p-8 md:p-14 lg:p-16 w-full max-w-3xl animate-[fade-in-left_2.5s_cubic-bezier(0.2,0.8,0.2,1)] bg-black/10 backdrop-blur-[2px]">

          {/* Thin Decorative Border Frame */}
          <div className="absolute inset-0 border border-white/20 m-2 md:m-4 pointer-events-none">
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#b35d43]/80" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#b35d43]/80" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#b35d43]/80" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#b35d43]/80" />
          </div>

          <div className="space-y-10 md:space-y-14">
            <div className="flex items-center space-x-4 md:space-x-6">
              <DiamondIcon />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white font-semibold">THE OLIVE TREE COLLECTION</span>
              <DiamondIcon />
            </div>

            {/* Orchestrated Menu Links: Phase 1 (Italic Fade) -> Phase 2 (Move Right) */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="group/link relative flex flex-col w-fit text-3xl md:text-5xl lg:text-6xl text-white serif tracking-tight drop-shadow-lg transition-transform duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) hover:translate-x-12 opacity-90 hover:opacity-100 will-change-transform"
                  style={{ transitionDelay: '1000ms' }} // Phase 2: Start moving after Phase 1 is done
                >
                  <div className="grid grid-cols-1 grid-rows-1 items-center">
                    {/* Layer 1: Normal Style - Immediate Cross-fade (Phase 1) */}
                    <span className={`
                      row-start-1 col-start-1 transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1)
                      ${item.italicDefault
                        ? 'opacity-0 scale-95 group-hover/link:opacity-100 group-hover/link:scale-100'
                        : 'opacity-100 scale-100 group-hover/link:opacity-0 group-hover/link:scale-95'
                      }
                    `}>
                      {item.label}
                    </span>

                    {/* Layer 2: Italic Style - Immediate Cross-fade (Phase 1) */}
                    <span className={`
                      row-start-1 col-start-1 italic transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1)
                      ${item.italicDefault
                        ? 'opacity-100 scale-100 group-hover/link:opacity-0 group-hover/link:scale-95'
                        : 'opacity-0 scale-95 group-hover/link:opacity-100 group-hover/link:scale-100'
                      }
                    `}>
                      {item.label}
                    </span>

                    {/* Layer 3: Invisible Spacer for Stability */}
                    <span className="row-start-1 col-start-1 invisible italic pointer-events-none" aria-hidden="true">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer Link - Same sequenced logic */}
            <div className="pt-6">
              <a href="#" className="group flex items-center space-x-6 text-white text-xs uppercase tracking-[0.3em] font-bold pb-3 border-b border-white/30 hover:border-white transition-all duration-[1000ms] hover:translate-x-6 w-fit"
                style={{ transitionDelay: '600ms' }}>
                <span className="italic serif text-xl normal-case tracking-normal">All our menus</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-4 transition-transform duration-[1000ms]" style={{ transitionDelay: '600ms' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default MenuShowcase;
