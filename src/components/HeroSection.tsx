import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-solo-bg">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-solo-purple/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-solo-purple/15 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Every meal unlocks a 
              <span className="block glow-text">new level of flavor.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience personalized culinary journeys crafted exclusively for your taste. Elevate your dining experience with our Solo Leveling inspired cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="solo-button animate-glow flex items-center justify-center gap-2">
                Personalize Your Menu <ArrowRight size={18} />
              </button>
              <button className="bg-transparent border border-solo-purple text-solo-purple-light hover:text-white hover:bg-solo-purple/20 font-solo font-semibold px-6 py-2 rounded transition-all">
                Explore Our Dishes
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative h-[400px] w-[400px] mx-auto">
              {/* Owner Image with Purple Overlay/Lighting Effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/0f972704-75e9-44d3-b2e8-e6be726f759e.png" 
                  alt="Chef" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-solo-purple/40 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-solo-purple/50 rounded-xl translate-x-4 translate-y-4"></div>
              
              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-solo-purple rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-solo-purple rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-solo-purple rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-solo-purple rounded-br-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
