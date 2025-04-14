
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Menu = () => {
  return (
    <div className="min-h-screen bg-solo-bg text-white">
      <NavBar />
      <div className="pt-20 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="glow-text">Our</span> Menu
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Full menu coming soon. Check back later for our complete selection of dishes.
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={() => window.history.back()} 
            className="solo-button"
          >
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
