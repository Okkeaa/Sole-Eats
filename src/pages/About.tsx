
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen bg-solo-bg text-white">
      <NavBar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
