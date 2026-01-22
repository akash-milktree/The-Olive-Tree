
import React from 'react';



const PrivateDiningSection: React.FC = () => {
  return (
    <section className="bg-[#f9f7f2] pt-40 pb-56">
      {/* Top Centered Content */}
      <div className="text-center mb-28 px-6 animate-[fade-in_1.5s_ease-out_forwards]">
        <div className="flex items-center justify-center space-x-5 mb-8">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" className="text-[#53663e] rotate-45">
            <rect width="24" height="24" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-[#53663e] font-bold">THE OLIVE TREE</span>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" className="text-[#53663e] rotate-45">
            <rect width="24" height="24" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] serif text-[#2c2c2c] leading-[1] mb-14">
          Book your table and <br />
          <span className="italic text-[#53663e]">enjoy timeless elegance</span>
        </h2>

        <div className="flex justify-center mt-6">
          <button className="group relative px-14 py-4.5 bg-white border border-[#d4af37]/30 text-[#2c2c2c] text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#53663e] hover:text-white transition-all duration-700 rounded-[2px] shadow-sm">
            <span className="relative z-10">Reserve your table</span>
            <div className="absolute inset-1 border border-[#d4af37]/10 pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Main Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto items-center gap-12 lg:gap-0">
        {/* Left Column: Image (Smaller, centered in space) */}
        <div className="flex items-center justify-center lg:justify-end lg:pr-24 px-6">
          <div className="w-full max-w-sm aspect-[4/5] shadow-2xl relative overflow-hidden animate-[fade-in-left_1.8s_cubic-bezier(0.2,0.8,0.2,1)_forwards]">
            <img
              src="/new_interior_2025/PHOTO-2025-07-28-10-50-39(1).jpg"
              alt="Dining Table at The Olive Tree"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[4000ms] ease-out"
            />
          </div>
        </div>

        {/* Right Column: Decorative Green Block */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="bg-[#53663e] w-full max-w-[38rem] aspect-[1.25/1] relative shadow-[40px_40px_100px_rgba(0,0,0,0.12)] animate-[fade-in-right_2s_cubic-bezier(0.2,0.8,0.2,1)_forwards] rounded-[3px] flex items-center justify-center p-12">

            {/* High-Fidelity Concave Border Frame */}
            <div className="absolute inset-6 md:inset-10 pointer-events-none">
              <svg className="w-full h-full text-white/30" viewBox="0 0 600 480" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path
                  d="M 40 0 H 560 A 40 40 0 0 0 600 40 V 440 A 40 40 0 0 0 560 480 H 40 A 40 40 0 0 0 0 440 V 40 A 40 40 0 0 0 40 0"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="5" cy="5" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="595" cy="5" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="5" cy="475" r="1.2" fill="currentColor" stroke="none" />
                <circle cx="595" cy="475" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </div>

            <div className="max-w-md text-center space-y-10 relative z-10 px-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-1.5 h-1.5 border border-white/40 rotate-45" />
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/80 font-bold">PRIVATE DINING AT THE OLIVE TREE</span>
                <div className="w-1.5 h-1.5 border border-white/40 rotate-45" />
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-[3.25rem] serif text-white leading-[1.05] font-light">
                Celebrate at <br />
                <span className="italic">The Olive Tree</span>
              </h3>

              <p className="text-white/80 text-sm md:text-[15px] font-light leading-relaxed max-w-sm mx-auto opacity-75">
                Experience bespoke dining in our private dining rooms, designed to make every occasion feel special. From intimate family reunions to corporate celebrations, our team ensures every detail is handled with Mediterranean warmth.
              </p>

              <div className="pt-10">
                <a href="#" className="group/link inline-flex items-center text-white space-x-12">
                  <span className="italic serif text-2xl lg:text-3xl border-b border-white/10 group-hover/link:border-white transition-all duration-700 pb-1">
                    Discover private dining
                  </span>
                  <div className="flex items-center">
                    <div className="w-20 md:w-28 border-b border-white/30 group-hover/link:w-36 transition-all duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1)" />
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-3 transform group-hover/link:translate-x-4 transition-transform duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1)">
                      <path d="M17 12L12 7M17 12L12 17M17 12H3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default PrivateDiningSection;
