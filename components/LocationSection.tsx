
import React, { useState } from 'react';
import { BRAND_COLORS } from '../constants';

const LocationSection: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('contact');

  const sections = [
    {
      id: 'contact',
      title: 'Contact',
      content: (
        <div className="space-y-4 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Address</p>
            <p className="text-sm text-gray-700 leading-relaxed">34-35 Oxford St, Southampton, Hampshire, SO14 3DS, United Kingdom</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Telephone</p>
            <p className="text-sm text-gray-700">023 8033 5144</p>
          </div>
        </div>
      )
    },
    {
      id: 'hours',
      title: 'Opening hours',
      content: (
        <div className="py-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Mon - Thu</span>
            <span className="text-gray-800">12:00 - 22:00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Fri - Sat</span>
            <span className="text-gray-800">12:00 - 23:00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Sun</span>
            <span className="text-gray-800">12:00 - 21:00</span>
          </div>
        </div>
      )
    },
    {
      id: 'amenities',
      title: 'Amenities',
      content: (
        <div className="py-4">
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Outdoor Terrace Seating</li>
            <li>• Private Event Hire</li>
            <li>• Wheelchair Accessible</li>
            <li>• Authentic Wood-fired Oven</li>
          </ul>
        </div>
      )
    },
    {
      id: 'nearby',
      title: 'Nearby',
      content: (
        <div className="py-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            Situated on the historic Oxford Street, we are just a short walk from the Southampton Town Quay and the vibrant Ocean Village Marina.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="relative px-6 md:px-12 lg:px-24 overflow-hidden bg-[#f5f1e9]">
      {/* Background Texture: Mediterranean Limestone/Sandstone pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/sandpaper.png")',
        }}
      />
      
      {/* Balanced Padding Container */}
      <div className="relative z-10 max-w-7xl mx-auto py-32 md:py-48 flex flex-col items-center">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24 md:mb-32">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-8 animate-[fade-in-left_1s_ease-out]">
            <div className="flex items-center space-x-3">
              <span className="text-[#b35d43] text-[10px]">◊</span>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">THE SOUTHAMPTON INSTITUTION</h4>
              <span className="text-[#b35d43] text-[10px]">◊</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl text-gray-800 serif leading-tight">
              The Olive Tree has been a <span className="italic">beloved fixture</span> of Southampton's dining scene since 1998, celebrating authentic Mediterranean cuisine.
            </h2>

            <div className="space-y-6 max-w-2xl">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Nestled in the historic charm of Oxford Street, The Olive Tree brings the warmth of coastal Europe to the heart of the city. With a focus on fresh, sun-ripened ingredients and traditional hospitality, we offer a sanctuary for relaxed afternoons and intimate evening dining.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 pt-4">
              <a href="#" className="group flex items-center space-x-4 text-[#53663e] text-xs uppercase tracking-[0.2em] font-bold border-b border-[#53663e]/20 pb-2 hover:border-[#53663e] transition-all">
                <span className="italic serif text-lg normal-case tracking-normal mr-2">View our menus</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#" className="group flex items-center space-x-4 text-[#53663e] text-xs uppercase tracking-[0.2em] font-bold border-b border-[#53663e]/20 pb-2 hover:border-[#53663e] transition-all">
                <span className="italic serif text-lg normal-case tracking-normal mr-2">Reserve a table</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion-style Details */}
          <div className="lg:col-span-5 animate-[fade-in-right_1s_ease-out]">
            <div className="bg-white/60 backdrop-blur-md relative border-l border-r border-[#b35d43]/20 shadow-sm">
              {/* Pattern Border Top */}
              <div className="h-4 w-full opacity-30 border-t border-[#b35d43]/10" style={{ 
                backgroundImage: 'radial-gradient(circle, #b35d43 1px, transparent 1px)', 
                backgroundSize: '12px 12px' 
              }} />
              
              <div className="p-0">
                {sections.map((section) => (
                  <div key={section.id} className="border-b border-[#b35d43]/10 last:border-b-0">
                    <button 
                      onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                      className="w-full px-8 py-7 flex items-center justify-between group transition-colors hover:bg-white/40"
                    >
                      <span className="text-lg serif text-gray-800 tracking-wide">{section.title}</span>
                      <div className="relative w-8 h-8 flex items-center justify-center">
                        {/* Diamond Border */}
                        <div className={`absolute inset-0 border border-[#b35d43]/30 rotate-45 transition-transform duration-700 ${openSection === section.id ? 'rotate-[225deg]' : 'group-hover:rotate-[135deg]'}`} />
                        <div className="relative text-[#b35d43]">
                          {openSection === section.id ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>
                    <div className={`px-8 overflow-hidden transition-all duration-700 ease-in-out ${openSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pattern Border Bottom */}
              <div className="h-4 w-full opacity-30 border-b border-[#b35d43]/10" style={{ 
                backgroundImage: 'radial-gradient(circle, #b35d43 1px, transparent 1px)', 
                backgroundSize: '12px 12px' 
              }} />
            </div>
          </div>
        </div>

        {/* Transition ornament now integrated into the flex flow for balanced padding */}
        <div className="flex flex-col items-center opacity-0 animate-[fade-in-up_1s_ease-out_0.5s_forwards]">
          <div className="w-px h-24 bg-gradient-to-t from-[#53663e] to-transparent opacity-20 mb-8" />
          <div className="text-center space-y-4">
            <svg viewBox="0 0 24 24" className="w-6 h-6 mx-auto text-[#53663e]" fill="currentColor">
               <path d="M12 2C10 2 8 4 8 6C8 7.5 9 8.8 10.3 9.6C9.5 10.1 9 11 9 12C9 13.5 10.5 15 12 15C13.5 15 15 13.5 15 12C15 11 14.5 10.1 13.7 9.6C15 8.8 16 7.5 16 6C16 4 14 2 12 2Z" />
               <path d="M11 15H13V22H11V15Z" />
            </svg>
            <p className="text-[10px] italic tracking-[0.3em] text-gray-400 font-semibold uppercase">Step into the heart of the Mediterranean</p>
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
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default LocationSection;
