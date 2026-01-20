
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeritageSection from './components/HeritageSection';
import LocationSection from './components/LocationSection';
import MenuShowcase from './components/MenuShowcase';
import EventsGrid from './components/EventsGrid';
import PrivateDiningSection from './components/PrivateDiningSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        {/* New Ivy-inspired Heritage Statement */}
        <HeritageSection />

        {/* Replicated Ivy-style Location & Contact Section */}
        <LocationSection />

        {/* Replicated Ivy-style Menu Showcase Section */}
        <MenuShowcase />

        {/* New Replicated Ivy-style Events Section */}
        <EventsGrid />

        {/* New Replicated Ivy-style Private Dining Section */}
        <PrivateDiningSection />

        {/* New Replicated Ivy-style Newsletter Section */}
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
