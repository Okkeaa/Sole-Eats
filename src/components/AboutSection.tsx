import React from 'react';
import { ChefHat, Award, UtensilsCrossed } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="solo-section bg-gradient-to-b from-black to-solo-bg relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-solo-purple/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] order-2 lg:order-1">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-xl overflow-hidden border-2 border-solo-purple/20">
              <img 
                src="/lovable-uploads/0f972704-75e9-44d3-b2e8-e6be726f759e.png" 
                alt="Chef" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-solo-bg/80 to-transparent"></div>
            </div>
            
            {/* Kitchen Image */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-lg overflow-hidden border-2 border-solo-purple/40 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 w-36 h-36 rounded-lg overflow-hidden border-2 border-solo-purple/40 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551218372-a8789b81b253" 
                alt="Food close-up" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-lg overflow-hidden border-2 border-solo-purple/40 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1611489142320-4ece1652608e" 
                alt="Kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Purple Glow Accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-solo-purple/30 rounded-xl"></div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center justify-center mb-4 bg-solo-purple/20 px-4 py-2 rounded-full">
              <ChefHat className="text-solo-purple-light mr-2" size={18} />
              <span className="text-solo-purple-light font-solo">Our Story</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="glow-text">Vision</span> Behind SoloEats
            </h2>
            
            <p className="text-gray-300 mb-6">
              Founded by award-winning chef Alex Morgan, SoloEats was born from a passion for creating extraordinary culinary experiences that tell a story through flavor. Inspired by the aesthetic and philosophy of Solo Leveling, we believe every meal should be a journey of discovery.
            </p>
            
            <p className="text-gray-300 mb-8">
              Our team of culinary artisans works tirelessly to craft dishes that not only tantalize your taste buds but create memorable experiences. We source the finest ingredients and employ innovative techniques to ensure each plate served is nothing short of exceptional.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-solo-card p-6 rounded-lg border border-solo-purple/20">
                <Award className="text-solo-purple mb-4" size={24} />
                <h3 className="text-lg font-solo font-semibold mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-400">We source only the finest ingredients for exceptional flavor.</p>
              </div>
              
              <div className="bg-solo-card p-6 rounded-lg border border-solo-purple/20">
                <UtensilsCrossed className="text-solo-purple mb-4" size={24} />
                <h3 className="text-lg font-solo font-semibold mb-2">Artisanal Craft</h3>
                <p className="text-sm text-gray-400">Each dish is meticulously prepared with passion and precision.</p>
              </div>
              
              <div className="bg-solo-card p-6 rounded-lg border border-solo-purple/20">
                <ChefHat className="text-solo-purple mb-4" size={24} />
                <h3 className="text-lg font-solo font-semibold mb-2">Expert Chefs</h3>
                <p className="text-sm text-gray-400">Our culinary team brings years of expertise and creativity.</p>
              </div>
            </div>
            
            <button className="solo-button">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
