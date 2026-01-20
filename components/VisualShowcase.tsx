
import React from 'react';

const VisualShowcase: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text + Interior */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-white text-3xl md:text-5xl serif tracking-wider uppercase leading-tight">
                Discover the Flavours <br />
                Of The Mediterranean
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-light max-w-md">
                Experience the vibrant spirit of coastal dining. Our interiors blend rustic charm with modern elegance, creating the perfect backdrop for your next culinary adventure.
              </p>
            </div>
            
            <div className="relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant Interior" 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Menu + Booking */}
          <div className="lg:col-span-7 space-y-12">
            <div className="relative overflow-hidden group lg:-mt-24">
              <img 
                src="https://images.unsplash.com/photo-1550966841-391d88cb627d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Blackboard Specials" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>

            <div className="bg-[#111] p-12 text-center space-y-8 border-t border-[#53663e]">
              <div className="space-y-3">
                <h3 className="text-white text-2xl serif tracking-widest uppercase">Book Online Anytime</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Monday — Sunday : 12pm - 10pm</p>
              </div>
              
              <div className="flex justify-center">
                <button className="px-12 py-4 border border-white/20 text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all">
                  Book A Table
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;
