
import React from 'react';

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
  </svg>
);

const MenuShowcase: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden group bg-[#f2efe9]">
      {/* Background Image: High-quality Mediterranean Dish (Pasta focus) */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-[4s] ease-out group-hover:scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-black/30 md:bg-black/20" />

      {/* Content Container aligned to match Navbar padding */}
      <div className="relative z-20 h-full w-full px-6 md:px-12 flex items-center justify-start">
        <div className="relative p-8 md:p-14 lg:p-16 w-full max-w-3xl animate-[fade-in-left_1.2s_ease-out] bg-black/10 backdrop-blur-[2px]">
          
          {/* Thin Decorative Border Frame with 4 Corner Accents */}
          <div className="absolute inset-0 border border-white/20 m-2 md:m-4 pointer-events-none">
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#b35d43]/80" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#b35d43]/80" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#b35d43]/80" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#b35d43]/80" />
          </div>

          <div className="space-y-10 md:space-y-14">
            {/* Header: Exact Match to Hero Section "Established 1998" style */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <DiamondIcon />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white font-semibold">THE OLIVE TREE COLLECTION</span>
              <DiamondIcon />
            </div>

            {/* Menu Links: Vertically Aligned (Stack) */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              <a href="#" className="text-3xl md:text-5xl lg:text-6xl text-white serif hover:italic transition-all duration-500 block w-fit drop-shadow-lg">
                Set Lunch Menu
              </a>
              <a href="#" className="text-3xl md:text-5xl lg:text-6xl text-white serif hover:italic transition-all duration-500 block w-fit drop-shadow-lg">
                Evening A La Carte
              </a>
              <a href="#" className="text-3xl md:text-5xl lg:text-6xl text-white serif italic hover:not-italic transition-all duration-500 block w-fit drop-shadow-lg">
                Wine & Cocktails
              </a>
            </div>

            {/* Footer Link */}
            <div className="pt-6">
              <a href="#" className="group flex items-center space-x-6 text-white text-xs uppercase tracking-[0.3em] font-bold pb-3 border-b border-white/30 hover:border-white transition-all w-fit">
                <span className="italic serif text-xl normal-case tracking-normal">All our menus</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
      `}</style>
    </section>
  );
};

export default MenuShowcase;
