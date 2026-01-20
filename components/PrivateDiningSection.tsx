
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
        
        <button className="px-10 py-3.5 border border-[#53663e]/40 text-[#2c2c2c] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#53663e] hover:text-white transition-all duration-500 rounded-sm">
          Reserve your table
        </button>
      </div>

      {/* Main Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[800px]">
        {/* Left Column: Image */}
        <div className="relative h-[500px] lg:h-full flex items-center justify-center lg:justify-end lg:pr-24 px-6">
          <div className="w-full max-w-lg aspect-[3/4] lg:h-[70%] lg:w-auto relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
              alt="Private Dining at The Olive Tree" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Right Column: Decorative Green Block */}
        <div className="bg-[#53663e] p-8 md:p-12 lg:p-24 flex items-center justify-center relative">
          {/* Decorative White Border Frame with Concave Corner Accents */}
          <div className="absolute inset-8 md:inset-12 lg:inset-16 border border-white/20 pointer-events-none">
             {/* Corner Flourishes */}
             <div className="absolute -top-1 -left-1 w-8 h-8">
               <div className="absolute top-0 left-0 w-full h-full border-t border-l border-white/60 rounded-tl-2xl" />
             </div>
             <div className="absolute -top-1 -right-1 w-8 h-8">
               <div className="absolute top-0 right-0 w-full h-full border-t border-r border-white/60 rounded-tr-2xl" />
             </div>
             <div className="absolute -bottom-1 -left-1 w-8 h-8">
               <div className="absolute bottom-0 left-0 w-full h-full border-b border-l border-white/60 rounded-bl-2xl" />
             </div>
             <div className="absolute -bottom-1 -right-1 w-8 h-8">
               <div className="absolute bottom-0 right-0 w-full h-full border-b border-r border-white/60 rounded-br-2xl" />
             </div>
             {/* Small dots in corners like Ivy */}
             <div className="absolute top-2 left-2 w-1 h-1 bg-white/40 rounded-full" />
             <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full" />
             <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/40 rounded-full" />
             <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/40 rounded-full" />
          </div>

          <div className="max-w-md text-center space-y-10 relative z-10">
            <div className="flex items-center justify-center space-x-4">
              <DiamondIcon />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-bold">PRIVATE DINING AT THE OLIVE TREE</span>
              <DiamondIcon />
            </div>

            <h3 className="text-4xl md:text-5xl serif text-white leading-tight">
              Celebrate at <br />
              <span className="italic">The Olive Tree</span>
            </h3>

            <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
              Experience bespoke dining in our private dining rooms, designed to make every occasion feel special. From intimate family reunions to corporate celebrations, our team ensures every detail is handled with Mediterranean warmth.
            </p>

            <a href="#" className="group/link flex items-end justify-between text-white transition-all relative pb-4 pt-6">
              <span className="italic serif text-2xl md:text-3xl normal-case tracking-normal">
                Discover private dining
              </span>
              <div className="flex-1 border-b border-white/20 group-hover/link:border-white transition-colors mx-4 mb-2.5" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover/link:translate-x-2 transition-transform duration-300 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateDiningSection;
