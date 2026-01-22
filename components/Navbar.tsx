
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out px-6 md:px-12 py-4 flex items-center justify-between ${isScrolled && !isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
          }`}
      >
        {/* Brand Logo */}
        <div className="flex-shrink-0 cursor-pointer relative z-[110]">
          <img
            src="/nav-logo.png"
            alt="The Olive Tree Logo"
            className={`h-8 lg:h-10 w-auto transition-all duration-700 ${(isScrolled && !isMenuOpen) ? 'brightness-0' : 'brightness-0 invert'
              }`}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:text-[#d4af37] ${isScrolled ? 'text-[#2c2c2c]' : 'text-white'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Buttons & Burger */}
        <div className="flex items-center space-x-4 lg:space-x-8">
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 border rounded-sm ${isScrolled
                  ? 'border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white'
                  : 'border-white/40 text-white hover:bg-white hover:text-[#2c2c2c]'
                }`}
            >
              Menus
            </button>
            <button
              className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 rounded-sm ${isScrolled
                  ? 'bg-[#53663e] text-white hover:bg-[#425232]'
                  : 'bg-white text-[#53663e] hover:bg-[#53663e] hover:text-white'
                }`}
            >
              Book
            </button>
          </div>

          {/* Burger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-[110] w-12 h-12 flex flex-col items-center justify-center focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col items-end space-y-1.5 overflow-hidden">
              <span className={`block w-6 h-0.5 transition-all duration-500 transform ${isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : (isScrolled ? 'bg-[#2c2c2c]' : 'bg-white')}`} />
              <span className={`block w-4 h-0.5 transition-all duration-500 ${isMenuOpen ? 'opacity-0 translate-x-full' : (isScrolled ? 'bg-[#2c2c2c]' : 'bg-white')}`} />
              <span className={`block w-6 h-0.5 transition-all duration-500 transform ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : (isScrolled ? 'bg-[#2c2c2c]' : 'bg-white')}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-[#53663e] transition-all duration-1000 cubic-bezier(0.7, 0, 0.3, 1) ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <div className="h-full flex flex-col items-center justify-center px-8 md:px-12 space-y-12">
          {/* Animated Nav Links */}
          <div className="flex flex-col items-center space-y-6 md:space-y-10">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl md:text-5xl lg:text-6xl serif italic text-white/90 hover:text-white transition-all duration-700 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Buttons in Mobile Menu */}
          <div className={`flex flex-col w-full max-w-[280px] md:max-w-xs space-y-4 transition-all duration-1000 delay-[400ms] transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
            <button className="w-full py-4 text-[11px] uppercase tracking-[0.3em] font-bold border border-white/20 text-white hover:bg-white hover:text-[#53663e] transition-all shadow-sm">
              Menus
            </button>
            <button className="w-full py-4 text-[11px] uppercase tracking-[0.3em] font-bold bg-white text-[#53663e] hover:bg-gray-100 transition-all shadow-xl">
              Book a Table
            </button>
          </div>
        </div>

        {/* Decorative Background Elements for Menu */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
          <img src="/logo.png" alt="" className="h-48 md:h-64 object-contain" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
