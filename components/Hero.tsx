
import React from 'react';

const Hero: React.FC = () => {
  const DiamondIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    </svg>
  );

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image: Extended animation timing for ultimate smoothness */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-[subtle-zoom_30s_infinite_alternate] will-change-transform"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Soft Dark Overlay for Contrast */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Decorative Ornaments */}
      <div className="absolute top-[15%] left-12 right-12 bottom-[15%] border border-white/10 z-10 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.2,0.8,0.2,1)_forwards]">
        <div className="flex items-center justify-center space-x-6 mb-8">
          <DiamondIcon />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white font-semibold">ESTABLISHED 1998</span>
          <DiamondIcon />
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl text-white serif mb-6 leading-tight">
          A Taste of the <br className="hidden md:block" />
          <span className="italic">Mediterranean</span>
        </h2>
        
        <p className="text-sm md:text-lg text-white/90 font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience warm hospitality and traditional family recipes in our sun-drenched Southampton bistro. From fresh seafood to hand-picked olives, every dish tells a story.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-4 bg-[#53663e] text-white text-[11px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-[700ms] cubic-bezier(0.4, 0, 0.2, 1) rounded-sm active:scale-95">
            <span className="relative z-10">Book a Table</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] cubic-bezier(0.4, 0, 0.2, 1)" />
          </button>
          
          <button className="group flex items-center space-x-2 text-white text-[11px] uppercase tracking-[0.2em] font-bold border-b border-white/30 pb-1 hover:border-white transition-all duration-[700ms] cubic-bezier(0.4, 0, 0.2, 1)">
            <span>View our Menus</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:translate-x-2 transition-transform duration-[700ms]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
