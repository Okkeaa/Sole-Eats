
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PersonalizeSection from '../components/PersonalizeSection';

const Personalize = () => {
  return (
    <div className="min-h-screen bg-solo-bg text-white">
      <NavBar />
      <div className="pt-20">
        <PersonalizeSection />
      </div>
      <Footer />
    </div>
  );
};

export default Personalize;
