import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GrowingProcess from './components/GrowingProcess';
import FarmExperience from './components/FarmExperience';
import MushroomCollection from './components/MushroomCollection';
import CTASection from './components/CTASection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutFarm from './components/AboutFarm';
import ConsultationSection from './components/ConsultationSection';
import Footer from './components/Footer';

// Section background colours — alternating dark forest shades for visual rhythm
const sectionBg = {
  process:            '#0e1610',
  experience:         '#0a0f0b',
  collection:         '#0c1410',
  'available-trainings': '#131c14',
  'about-us':         '#0e1610',
  'future-goal':      '#131c14',
};

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0f0b', color: '#f2ecd9', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <main>
        {/* Full-page hero */}
        <Hero />

        {/* Cultivation Methodology */}
        <div style={{ background: sectionBg.process }}>
          <GrowingProcess />
        </div>

        {/* Infrastructure */}
        <div style={{ background: sectionBg.experience }}>
          <FarmExperience />
        </div>

        {/* Marketing */}
        <div style={{ background: sectionBg.collection }}>
          <MushroomCollection />
        </div>

        {/* Available Trainings */}
        <div style={{ background: sectionBg['available-trainings'] }}>
          <CTASection />
        </div>

        {/* About Us */}
        <div style={{ background: sectionBg['about-us'] }}>
          <WhyChooseUs />
        </div>

        {/* Future Goal */}
        <div style={{ background: sectionBg['future-goal'] }}>
          <AboutFarm />
        </div>

        {/* Consultation */}
        <div style={{ background: '#0a0f0b' }}>
          <ConsultationSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
