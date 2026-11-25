import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFarm from './components/AboutFarm';
import MushroomCollection from './components/MushroomCollection';
import GrowingProcess from './components/GrowingProcess';
import FarmExperience from './components/FarmExperience';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c120d] font-sans antialiased text-[#f2ecd9]">
      <Navbar />
      <main className="w-full bg-[#0c120d]">
        <Hero />
        <GrowingProcess />
        <FarmExperience />        
        <MushroomCollection />
        <CTASection />
        <WhyChooseUs />
        <AboutFarm />
      </main>
      <Footer />
    </div>
  );
}
