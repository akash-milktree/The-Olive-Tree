
import React from 'react';

const PrivateDiningSection: React.FC = () => {
  return (
    <section className="bg-[#f9f7f2] pt-20 overflow-hidden">
      {/* Top Centered Content: Refined Typography & Spacing */}
      <div className="text-center mb-12 px-6 animate-[fade-in_1.5s_ease-out_forwards]">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <svg width="6" height="6" viewBox="0 0 24 24" fill="none" className="text-[#53663e] rotate-45">
            <rect width="24" height="24" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[#53663e] font-bold">THE OLIVE TREE</span>
          <svg width="6" height="6" viewBox="0 0 24 24" fill="none" className="text-[#53663e] rotate-45">
            <rect width="24" height="24" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-7xl serif text-[#2c2c2c] leading-[1.1] mb-6">
          Book your table and <br />
          <span className="italic text-[#53663e]">enjoy timeless elegance</span>
        </h2>
      </div>

      {/* Main Split Content: Full Bleed Right and Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-stretch">
        {/* Left Column: Image (Centred portrait with refined margin) */}
        <div className="flex items-center justify-center lg:justify-end lg:pr-20 px-8 pb-12 lg:pb-24">
          <div className="w-full max-w-[480px] aspect-[4/5] shadow-[20px_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden animate-[fade-in-left_2s_cubic-bezier(0.2,0.8,0.2,1)_forwards]">
            <img
              src="/new_interior_2025/PHOTO-2025-07-28-10-50-39.jpg"
              alt="The Olive Tree Exterior"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[8000ms] ease-out"
            />
          </div>
        </div>

        {/* Right Column: Full Bleed Green Section with Refined Content Spacing */}
        <div className="bg-[#53663e] flex items-center justify-center relative shadow-[-20px_0_50px_rgba(0,0,0,0.05)] animate-[fade-in-right_2s_cubic-bezier(0.2,0.8,0.2,1)_forwards] px-12 py-20 lg:py-32">

          {/* Decorative elements removed as per request */}

          <div className="max-w-md text-center space-y-10 relative z-10 px-4">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-1.5 h-1.5 border border-white/40 rotate-45" />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/80 font-bold">PRIVATE DINING AT THE OLIVE TREE</span>
              <div className="w-1.5 h-1.5 border border-white/40 rotate-45" />
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl serif text-white leading-[1.1] font-light">
              Celebrate at <br />
              <span className="italic">The Olive Tree</span>
            </h3>

            <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-sm mx-auto opacity-75">
              Experience bespoke dining in our private dining rooms, designed to make every occasion feel special. From intimate family reunions to corporate celebrations, our team ensures every detail is handled with Mediterranean warmth.
            </p>

            <div className="pt-6">
              <a href="#" className="group/link inline-flex items-center text-white space-x-4">
                <span className="italic serif text-2xl lg:text-3xl border-b border-white/10 group-hover/link:border-white transition-all duration-700 pb-1">
                  Discover private dining
                </span>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1)">
                  <path d="M17 12L12 7M17 12L12 17M17 12H3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
