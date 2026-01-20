
import React from 'react';

const DiamondIcon = ({ color = "#d4af37" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke={color} strokeWidth="2" style={{ opacity: 0.6 }}>
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
  </svg>
);

const Footer: React.FC = () => {
  // Escaped SVG for the diamond outlines to be used as a CSS background (matching NewsletterSection)
  const diamondPattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='0.5' /%3E%3Cpath d='M0 0 L50 50 L0 100' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='0.5' /%3E%3Cpath d='M100 0 L50 50 L100 100' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='0.5' /%3E%3C/svg%3E")`;

  return (
    <footer className="relative">
      {/* Main Footer Wrapper */}
      <div className="relative z-20 bg-[#f9f7f2] overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
        {/* Top Decorative Border */}
        <div className="h-4 w-full opacity-20 border-t border-[#b35d43]/20" style={{ 
          backgroundImage: 'radial-gradient(circle, #b35d43 1px, transparent 1px)', 
          backgroundSize: '12px 12px' 
        }} />

        {/* Main Footer Content */}
        <div className="w-full px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Left Block: Brand Statement & Booking */}
            <div className="lg:col-span-5 space-y-10">
              <div className="flex items-center space-x-3">
                <DiamondIcon />
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">THE OLIVE TREE COLLECTION</span>
                <DiamondIcon />
              </div>

              <h2 className="text-3xl md:text-4xl serif text-[#2c2c2c] leading-tight max-w-sm">
                Delivering elevated dining with <span className="italic">timeless charm</span> in the heart of Southampton.
              </h2>

              <div className="pt-4">
                <button className="relative px-12 py-4 border border-[#53663e]/40 hover:border-[#53663e] transition-all duration-500 rounded-sm">
                  <span className="absolute inset-0.5 border border-[#53663e]/10 pointer-events-none" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#2c2c2c]">Book a Table</span>
                </button>
              </div>
            </div>

            {/* Middle Blocks: Navigation Links */}
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                {['Home', 'Menus', 'Private Dining', 'Loyalty', 'Events', 'Our Story', 'News', 'Gift Cards', 'Careers'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-lg md:text-xl serif text-[#53663e] hover:italic transition-all duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <ul className="space-y-3">
                {[
                  'Modern Slavery Statement', 
                  'Gender Pay Gap', 
                  'FAQs', 
                  'Contact', 
                  'Community Foundation', 
                  'Taxation', 
                  'Tipping Policy', 
                  'Terms and Conditions'
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-500 hover:text-[#53663e] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Block: Social & Logo */}
            <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
              <ul className="space-y-3 text-left lg:text-right mb-12">
                {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                  <li key={social}>
                    <a href="#" className="text-xs text-gray-500 hover:text-[#53663e] transition-colors">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="text-left lg:text-right">
                <h3 className="text-2xl font-bold tracking-[0.3em] text-[#53663e]">THE OLIVE TREE</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mt-1">Southampton</p>
              </div>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 tracking-wider space-y-4 md:space-y-0 uppercase">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
              <span>© 2024 THE OLIVE TREE</span>
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Sustainability</a>
            </div>
            <div className="flex items-center space-x-1">
              <span>CREATED BY</span>
              <span className="font-bold text-gray-500">A REFINED HALF TEAM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reveal Section: Unified Parallax Pattern matching NewsletterSection */}
      <div className="relative h-[600px] overflow-hidden bg-[#3a472b] z-10">
        {/* Diamond Outlines Layer - Fixed to sync */}
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
        
        {/* Geometric Color Gradients Layer - Fixed to sync */}
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
    </footer>
  );
};

export default Footer;
