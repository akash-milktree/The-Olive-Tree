
import React from 'react';

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L22 12L12 22L2 12L12 2Z" />
  </svg>
);

const EventsGrid: React.FC = () => {
  const events = [
    {
      title: "Mediterranean Weddings",
      image: "https://images.unsplash.com/photo-1519225495810-758b63300051?auto=format&fit=crop&q=80&w=800",
      description: "Celebrate your special day with authentic coastal charm and a bespoke Mediterranean banquet.",
      cta: "Plan your day",
      link: "#"
    },
    {
      title: "Private Dining Room",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      description: "Our intimate rustic room is the perfect setting for birthdays, anniversaries, and family reunions.",
      cta: "Explore the room",
      link: "#"
    },
    {
      title: "Corporate Gatherings",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      description: "From team lunches to professional celebrations, we provide the perfect blend of business and leisure.",
      cta: "Book an event",
      link: "#"
    },
    {
      title: "Live Terrace Sessions",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
      description: "Experience soulful melodies and al fresco dining under the stars during our weekend terrace sessions.",
      cta: "View calendar",
      link: "#"
    }
  ];

  return (
    <section className="bg-[#f9f7f2] py-24 md:py-32 px-6 md:px-12 w-full border-t border-gray-100">
      {/* Header Section */}
      <div className="w-full mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl serif text-[#2c2c2c] leading-tight">
              Experience <br />
              <span className="italic text-[#53663e]">moments at The Olive Tree</span>
            </h2>
          </div>
          <div className="lg:max-w-md lg:ml-auto space-y-8">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
              This season, host your celebrations in style at The Olive Tree Southampton. From sun-drenched terrace parties to cozy indoor gatherings, our team creates unforgettable experiences infused with Mediterranean spirit and warm hospitality.
            </p>
            <a href="#" className="group flex items-center space-x-4 text-[#53663e] text-xs uppercase tracking-[0.2em] font-bold border-b border-[#53663e]/20 pb-2 hover:border-[#53663e] transition-all duration-700 w-fit">
              <span className="italic serif text-lg normal-case tracking-normal">Reserve a table</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-3 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col space-y-6 group">
              <div className="flex items-center space-x-3 pb-2 border-b border-gray-100">
                <DiamondIcon />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold whitespace-nowrap">THE OLIVE TREE COLLECTION</span>
                <DiamondIcon />
              </div>

              <h3 className="text-xl md:text-2xl serif text-[#2c2c2c] group-hover:text-[#53663e] transition-colors duration-1000 cursor-pointer">
                {event.title}
              </h3>

              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-all duration-[3000ms] cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:scale-110 group-hover:opacity-90"
                />
              </div>

              <div className="space-y-8">
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed min-h-[4.5rem]">
                  {event.description}
                </p>

                <a href={event.link} className="group/link flex items-end justify-between text-[#53663e] transition-all duration-1000 relative pb-4">
                  <span className="italic serif text-2xl md:text-3xl normal-case tracking-normal transition-all duration-1000">
                    {event.cta}
                  </span>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 transform group-hover/link:translate-x-3 transition-transform duration-1000 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  
                  <div className="absolute bottom-0 left-0 w-full h-px bg-[#53663e]/10 group-hover/link:bg-[#53663e] transition-all duration-1000" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;
