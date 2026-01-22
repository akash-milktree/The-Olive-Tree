
import React from 'react';

const PrivateDiningSection: React.FC = () => {
  return (
    <section className="bg-[#f9f7f2] pt-24 overflow-hidden">
      {/* Top Centered Content: Refined Typography & Spacing */}
      <div className="text-center mb-16 px-6 animate-[fade-in_1.5s_ease-out_forwards]">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <svg width="6" height="6" viewBox="0 0 24 24" fill="none" className="text-[#53663e] rotate-45">
            <rect width="24" height="24" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[#53663e] font-bold">THE OLIVE TREE</span>
          <svg width="6" height="6" viewBox="0 0 24 24" fill="none" className="text-[#53663e] rotate-45">
            <rect width="24" height="24" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-7xl serif text-[#2c2c2c] leading-[1.1] mb-8">
          Book your table and <br />
          <span className="italic text-[#53663e]">enjoy timeless elegance</span>
        </h2>
      </div>

      {/* Main Split Content: Full Bleed Right and Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-stretch">
        {/* Left Column: Image (Centred portrait with refined margin) */}
        <div className="flex items-center justify-center lg:justify-end lg:pr-32 px-12 pb-24 lg:pb-32">
          <div className="w-full max-w-[320px] aspect-[3.4/5] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden animate-[fade-in-left_2s_cubic-bezier(0.2,0.8,0.2,1)_forwards]">
            <img
              src="/new_interior_2025/PHOTO-2025-07-28-10-50-39.jpg"
              alt="The Olive Tree Exterior"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[8000ms] ease-out"
            />
          </div>
        </div>

        {/* Right Column: Full Bleed Green Section with Refined Content Spacing */}
        <div className="bg-[#53663e] flex items-center justify-center relative shadow-[-20px_0_50px_rgba(0,0,0,0.05)] animate-[fade-in-right_2s_cubic-bezier(0.2,0.8,0.2,1)_forwards] px-12 py-24 lg:py-40">

          {/* Decorative Concave Corner Frame */}
          <div className="absolute inset-8 md:inset-12 pointer-events-none">
            <svg className="w-full h-full text-white/20" viewBox="0 0 600 480" fill="none" stroke="currentColor" strokeWidth="0.8">
              <path
                d="M 40 0 H 560 A 40 40 0 0 0 600 40 V 440 A 40 40 0 0 0 560 480 H 40 A 40 40 0 0 0 0 410 V 40 A 40 40 0 0 0 40 0"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="5" cy="5" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="595" cy="5" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="5" cy="475" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="595" cy="475" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <div className="max-w-md text-center space-y-10 relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-1.5 h-1.5 border border-white/40 rotate-45" />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/80 font-bold">PRIVATE DINING AT THE OLIVE TREE</span>
              <div className="w-1.5 h-1.5 border border-white/40 rotate-45" />
            </div>

            <h3 className="text-3xl md:text-5xl lg:text-[3.5rem] serif text-white leading-[1.1] font-light">
              Celebrate at <br />
              <span className="italic">The Olive Tree</span>
            </h3>

            <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-sm mx-auto opacity-75">
              Experience bespoke dining in our private dining rooms, designed to make every occasion feel special. From intimate family reunions to corporate celebrations, our team ensures every detail is handled with Mediterranean warmth.
            </p>

            <div className="pt-8">
              <a href="#" className="group/link inline-flex items-center text-white space-x-10">
                <span className="italic serif text-2xl lg:text-3xl border-b border-white/10 group-hover/link:border-white transition-all duration-700 pb-1">
                  Discover private dining
                </span>
                <div className="flex items-center">
                  <div className="w-16 md:w-24 border-b border-white/30 group-hover/link:w-32 transition-all duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1)" />
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-3 transform group-hover/link:translate-x-4 transition-transform duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1)">
                    <path d="M17 12L12 7M17 12L12 17M17 12H3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default PrivateDiningSection;
