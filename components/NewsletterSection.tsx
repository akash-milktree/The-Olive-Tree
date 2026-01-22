
import React from 'react';

const NewsletterSection: React.FC = () => {
  // Escaped SVG for the diamond outlines to be used as a CSS background
  const diamondPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='0.5' /%3E%3Cpath d='M0 0 L50 50 L0 100' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='0.5' /%3E%3Cpath d='M100 0 L50 50 L100 100' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='0.5' /%3E%3C/svg%3E")`;

  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden min-h-[800px] flex items-center justify-center">
      {/* Unified Parallax Background */}
      <div className="absolute inset-0 z-0 bg-[#3a472b]">
        {/* Diamond Outlines Layer - Fixed to sync with the colors */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: diamondPattern,
            backgroundPosition: '0 0',
            backgroundSize: '100px 100px',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Geometric Color Gradients Layer - Fixed to sync with the outlines */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(135deg, #2c3520 25%, transparent 25%), 
              linear-gradient(225deg, #2c3520 25%, transparent 25%), 
              linear-gradient(45deg, #2c3520 25%, transparent 25%), 
              linear-gradient(315deg, #2c3520 25%, #3a472b 25%)`,
            backgroundPosition: '50px 0, 50px 0, 0 0, 0 0',
            backgroundSize: '100px 100px',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed'
          }}
        />
      </div>

      {/* The Central White Container with Concave Cutout Corners */}
      <div
        className="relative z-10 w-full max-w-6xl bg-white shadow-2xl py-16 px-6 md:py-24 md:px-20"
        style={{
          mask: 'radial-gradient(50px at 0 0, #0000 98%, #000) 0 0, radial-gradient(50px at 100% 100%, #0000 98%, #000) 100% 100%, radial-gradient(50px at 100% 0, #0000 98%, #000) 100% 0, radial-gradient(50px at 0 100%, #0000 98%, #000) 0 100%',
          maskComposite: 'intersect',
          WebkitMask: 'radial-gradient(50px at 0 0, #0000 98%, #000) 0 0, radial-gradient(50px at 100% 100%, #0000 98%, #000) 100% 100%, radial-gradient(50px at 100% 0, #0000 98%, #000) 100% 0, radial-gradient(50px at 0 100%, #0000 98%, #000) 0 100%',
          WebkitMaskComposite: 'destination-in'
        }}
      >
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3a472b]">
              <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-5xl serif text-[#2c2c2c] leading-tight font-light">
            Sign up to our newsletter to receive <br />
            <span className="italic text-[#3a472b]">special moments before anyone else.</span>
          </h2>

          <form className="space-y-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="group border-b border-gray-200 focus-within:border-[#3a472b] transition-colors pb-1">
                <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">First Name</label>
                <input type="text" className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-[#2c2c2c] placeholder:text-gray-300" />
              </div>
              <div className="group border-b border-gray-200 focus-within:border-[#3a472b] transition-colors pb-1">
                <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">Surname</label>
                <input type="text" className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-[#2c2c2c] placeholder:text-gray-300" />
              </div>
              <div className="group border-b border-gray-200 focus-within:border-[#3a472b] transition-colors pb-1">
                <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-[#2c2c2c] placeholder:text-gray-300" />
              </div>
              <div className="group border-b border-gray-200 focus-within:border-[#3a472b] transition-colors pb-1">
                <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">Date of Birth</label>
                <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-[#2c2c2c] placeholder:text-gray-300" />
              </div>
            </div>

            <div className="group border-b border-gray-200 focus-within:border-[#3a472b] transition-colors pb-1 relative">
              <label className="block text-[10px] uppercase tracking-wider text-gray-400 mb-1">Preferred Restaurant Area</label>
              <select className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-[#2c2c2c] appearance-none">
                <option>The Olive Tree Southampton</option>
                <option>Private Dining Rooms</option>
                <option>Oxford Street Terrace</option>
              </select>
              <div className="absolute right-0 bottom-2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 text-center leading-relaxed max-w-lg mx-auto">
              By signing up you are agreeing to receive the latest news and exclusive offers from The Olive Tree Southampton. We treat your data with respect in accordance with our Privacy Policy.
            </p>

            <div className="flex justify-center pt-8">
              <button type="button" className="group/btn flex items-center space-x-6 text-[#3a472b] transition-all relative pb-4">
                <span className="italic serif text-3xl normal-case tracking-normal">
                  Sign up
                </span>
                <div className="w-24 border-b border-[#3a472b]/20 group-hover/btn:border-[#3a472b] transition-all duration-500 mb-2.5" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover/btn:translate-x-3 transition-transform duration-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
