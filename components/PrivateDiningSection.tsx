
import React from 'react';

const DiamondIcon = ({ color = "white" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke={color} strokeWidth="2" style={{ opacity: 0.6 }}>
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
  </svg>
);

const PrivateDiningSection: React.FC = () => {
  return (
    <section className="bg-[#f9f7f2] pt-24 pb-32">
      {/* Top Centered Content */}
      <div className="text-center mb-20 px-6">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <DiamondIcon color="#d4af37" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">THE OLIVE TREE SOUTHAMPTON</span>
          <DiamondIcon color="#d4af37" />
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl serif text-[#2c2c2c] leading-tight mb-10">
          Book your table and <br />
          <span className="italic">enjoy timeless elegance</span>
        </h2>
        
        <button className="px-10 py-3.5 border border-[#53663e]/40 text-[#2c2c2c] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#53663e] hover:text-white transition-all duration-700 rounded-sm">
          Reserve your table
        </button>
      </div>

      {/* Main Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[800px] gap-8 lg:gap-0">
        {/* Left Column: Image */}
        <div className="relative h-[500px] lg:h-full flex items-center justify-center lg:justify-end lg:pr-12 px-6">
          <div className="w-full max-w-lg aspect-[3/4] lg:h-[80%] lg:w-auto relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
              alt="Private Dining at The Olive Tree" 
              className="w-full h-full object-cover transition-transform duration-[5000ms] cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:scale-110 will-change-transform"
            />
          </div>
        </div>

        {/* Right Column: Decorative Green Block with Newsletter-style Mask */}
        <div className="flex items-center justify-center lg:justify-start lg:pl-12 px-6">
          <div 
            className="bg-[#53663e] w-full max-w-lg aspect-[4/5] lg:h-[80%] lg:w-full p-8 md:p-12 lg:p-16 flex items-center justify-center relative"
            style={{
              mask: 'radial-gradient(50px at 0 0, #0000 98%, #000) 0 0, radial-gradient(50px at 100% 100%, #0000 98%, #000) 100% 100%, radial-gradient(50px at 100% 0, #0000 98%, #000) 100% 0, radial-gradient(50px at 0 100%, #0000 98%, #000) 0 100%',
              maskComposite: 'intersect',
              WebkitMask: 'radial-gradient(50px at 0 0, #0000 98%, #000) 0 0, radial-gradient(50px at 100% 100%, #0000 98%, #000) 100% 100%, radial-gradient(50px at 100% 0, #0000 98%, #000) 100% 0, radial-gradient(50px at 0 100%, #0000 98%, #000) 0 100%',
              WebkitMaskComposite: 'destination-in'
            }}
          >
            {/* Internal Decorative Border */}
            <div className="absolute inset-8 md:inset-10 lg:inset-12 pointer-events-none">
               {/* Corner Arcs */}
               <svg className="absolute top-0 left-0 w-12 h-12 text-white/30" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                 <path d="M 100 0 A 100 100 0 0 0 0 100" strokeWidth="1" />
               </svg>
               <svg className="absolute top-0 right-0 w-12 h-12 text-white/30 rotate-90" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                 <path d="M 100 0 A 100 100 0 0 0 0 100" strokeWidth="1" />
               </svg>
               <svg className="absolute bottom-0 left-0 w-12 h-12 text-white/30 -rotate-90" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                 <path d="M 100 0 A 100 100 0 0 0 0 100" strokeWidth="1" />
               </svg>
               <svg className="absolute bottom-0 right-0 w-12 h-12 text-white/30 rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                 <path d="M 100 0 A 100 100 0 0 0 0 100" strokeWidth="1" />
               </svg>

               <div className="absolute top-0 left-12 right-12 h-px bg-white/30" />
               <div className="absolute bottom-0 left-12 right-12 h-px bg-white/30" />
               <div className="absolute left-0 top-12 bottom-12 w-px bg-white/30" />
               <div className="absolute right-0 top-12 bottom-12 w-px bg-white/30" />

               <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
               <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white/50 rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white/50 rounded-full -translate-x-1/2 translate-y-1/2" />
               <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white/50 rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-xs md:max-w-sm text-center space-y-8 md:space-y-12 relative z-10 px-4">
              <div className="flex items-center justify-center space-x-3">
                <DiamondIcon />
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/80 font-bold">PRIVATE DINING</span>
                <DiamondIcon />
              </div>

              <h3 className="text-3xl md:text-5xl serif text-white leading-tight">
                Celebrate at <br />
                <span className="italic">The Olive Tree</span>
              </h3>

              <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
                Experience bespoke dining in our private dining rooms, designed to make every occasion feel special. From intimate reunions to grand celebrations.
              </p>

              <a href="#" className="group/link flex items-end justify-between text-white transition-all duration-1000 relative pb-4 pt-6">
                <span className="italic serif text-2xl md:text-3xl normal-case tracking-normal">
                  Discover private dining
                </span>
                <div className="flex-1 border-b border-white/20 group-hover/link:border-white transition-all duration-1000 mx-4 mb-2.5" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover/link:translate-x-3 transition-transform duration-[1000ms] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateDiningSection;
