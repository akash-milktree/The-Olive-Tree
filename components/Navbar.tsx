
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, BRAND_COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 flex items-center justify-between ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      {/* Brand Logo */}
      <div className="flex-shrink-0 cursor-pointer">
        <img
          src="/nav-logo.png"
          alt="The Olive Tree Logo"
          className={`h-8 md:h-10 w-auto transition-all duration-500 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'
            }`}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-xs uppercase tracking-widest font-medium transition-colors duration-500 hover:text-[#b35d43] ${isScrolled ? 'text-[#2c2c2c]' : 'text-white'
              }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button
          className={`hidden md:block px-6 py-2.5 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 border ${isScrolled
              ? 'border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-[#2c2c2c]'
            }`}
        >
          Menus
        </button>
        <button
          className={`px-6 py-2.5 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 ${isScrolled
              ? 'bg-[#53663e] text-white hover:bg-[#425232]'
              : 'bg-white text-[#53663e] hover:bg-[#53663e] hover:text-white'
            }`}
        >
          Book
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
