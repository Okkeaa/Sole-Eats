
import React, { useState } from 'react';
import { Sliders, CheckCircle, HeartPulse, ChevronsRight } from 'lucide-react';

const PersonalizeSection = () => {
  const [preferences, setPreferences] = useState({
    spiceLevel: 'medium',
    flavor: 'savory',
    dietary: '',
  });

  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);

  const handleSpiceLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences({
      ...preferences,
      spiceLevel: e.target.value,
    });
  };

  const handleFlavorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPreferences({
      ...preferences,
      flavor: e.target.value,
    });
  };

  const toggleDietary = (value: string) => {
    setSelectedDietary(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  return (
    <section className="solo-section bg-solo-bg relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-solo-purple/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-solo-purple/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 bg-solo-purple/20 px-4 py-2 rounded-full">
            <Sliders className="text-solo-purple-light mr-2" size={18} />
            <span className="text-solo-purple-light font-solo">Personalize Your Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="glow-text">Customize</span> Your Culinary Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us your preferences and dietary needs, and we'll craft the perfect meal recommendations just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="solo-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Your Taste Profile
            </h3>

            <div className="space-y-6">
              {/* Spice Level Slider */}
              <div>
                <label className="block text-white mb-2 font-solo">Spice Level</label>
                <div className="flex flex-col">
                  <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={
                      preferences.spiceLevel === 'mild' ? 1 :
                      preferences.spiceLevel === 'medium' ? 3 :
                      preferences.spiceLevel === 'hot' ? 5 : 3
                    } 
                    onChange={handleSpiceLevelChange}
                    className="w-full h-2 bg-solo-card rounded-lg appearance-none cursor-pointer accent-solo-purple"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>Mild</span>
                    <span>Medium</span>
                    <span>Hot</span>
                  </div>
                </div>
              </div>

              {/* Flavor Profile */}
              <div>
                <label className="block text-white mb-2 font-solo">Flavor Preference</label>
                <select 
                  value={preferences.flavor}
                  onChange={handleFlavorChange}
                  className="solo-input w-full text-white bg-solo-card"
                >
                  <option value="savory">Savory</option>
                  <option value="sweet">Sweet</option>
                  <option value="spicy">Spicy</option>
                  <option value="umami">Umami</option>
                  <option value="tangy">Tangy</option>
                </select>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label className="block text-white mb-2 font-solo">Dietary Restrictions</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Low-Carb'].map((diet) => (
                    <button
                      key={diet}
                      type="button"
                      onClick={() => toggleDietary(diet)}
                      className={`flex items-center p-3 rounded-lg border ${
                        selectedDietary.includes(diet)
                          ? 'border-solo-purple bg-solo-purple/20 text-white'
                          : 'border-gray-700 text-gray-300 hover:border-solo-purple/50'
                      } transition-colors`}
                    >
                      {selectedDietary.includes(diet) ? (
                        <CheckCircle size={16} className="mr-2 text-solo-purple-light" />
                      ) : (
                        <HeartPulse size={16} className="mr-2 text-gray-400" />
                      )}
                      <span className="text-sm">{diet}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button className="solo-button w-full flex items-center justify-center gap-2">
                Get Personal Recommendations <ChevronsRight size={18} />
              </button>
            </div>
          </div>

          {/* Recommendation Preview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-white text-center lg:text-left">
              Recommendations Preview
            </h3>

            <div className="solo-card p-6 flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" 
                alt="Recommended Food" 
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-solo font-semibold text-lg text-white">Monarch's Feast</h4>
                <p className="text-gray-400 text-sm line-clamp-2">A royal dish featuring premium-grade ribeye steak served with truffle-infused mashed potatoes.</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-solo-purple/20 text-solo-purple-light px-2 py-1 rounded-full">Savory</span>
                  <span className="text-xs bg-solo-purple/20 text-solo-purple-light px-2 py-1 rounded-full">Medium Spice</span>
                </div>
              </div>
            </div>

            <div className="solo-card p-6 flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1623341214825-9f4f963727da" 
                alt="Recommended Food" 
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-solo font-semibold text-lg text-white">Shadow Ramen</h4>
                <p className="text-gray-400 text-sm line-clamp-2">Black garlic tonkotsu broth with char siu pork, ajitama egg, and house-made noodles.</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-solo-purple/20 text-solo-purple-light px-2 py-1 rounded-full">Umami</span>
                  <span className="text-xs bg-solo-purple/20 text-solo-purple-light px-2 py-1 rounded-full">Medium Spice</span>
                </div>
              </div>
            </div>

            <div className="solo-card p-6 flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c" 
                alt="Recommended Food" 
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-solo font-semibold text-lg text-white">Arise Sushi Platter</h4>
                <p className="text-gray-400 text-sm line-clamp-2">Premium selection of nigiri and maki rolls featuring fresh seasonal fish.</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-solo-purple/20 text-solo-purple-light px-2 py-1 rounded-full">Savory</span>
                  <span className="text-xs bg-solo-purple/20 text-solo-purple-light px-2 py-1 rounded-full">Low Spice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizeSection;
