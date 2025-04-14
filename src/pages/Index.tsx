
import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FoodSection from '../components/FoodSection';
import PersonalizeSection from '../components/PersonalizeSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-solo-bg text-white">
      <NavBar />
      <main>
        <HeroSection />
        <FoodSection />
        <PersonalizeSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
