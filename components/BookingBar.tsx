
import React from 'react';

const BookingBar: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-8 md:pb-12 lg:px-12 flex justify-center translate-y-1/2">
      <div className="w-full max-w-6xl bg-white shadow-2xl flex flex-col md:flex-row items-stretch border-b-4 border-[#53663e]">
        {/* Booking Section: Restaurant */}
        <div className="flex-1 border-r border-gray-100 px-6 py-4 flex flex-col justify-center">
          <label className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Location</label>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-medium text-[#2c2c2c]">The Olive Tree, Southampton</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-[#53663e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Booking Section: Date */}
        <div className="flex-1 border-r border-gray-100 px-6 py-4 flex flex-col justify-center">
          <label className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Date</label>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-medium text-[#2c2c2c]">Today, 24 January</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-[#53663e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Booking Section: Guests */}
        <div className="flex-1 border-r border-gray-100 px-6 py-4 flex flex-col justify-center">
          <label className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Guests</label>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-medium text-[#2c2c2c]">2 Guests</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-[#53663e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Booking Section: Time */}
        <div className="flex-1 border-r border-gray-100 px-6 py-4 flex flex-col justify-center">
          <label className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Time</label>
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-medium text-[#2c2c2c]">Select time</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-[#53663e] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-[#53663e] text-white px-10 py-6 md:py-0 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#425232] transition-colors flex items-center justify-center">
          Find a Table
        </button>
      </div>
    </div>
  );
};

export default BookingBar;
