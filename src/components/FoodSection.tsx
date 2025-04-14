
import React, { useState } from 'react';
import { ChevronDown, Flame, Heart, Zap } from 'lucide-react';

// Food data
const foodItems = [
  {
    id: 1,
    name: "Monarch's Feast",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    description: "A royal dish featuring premium-grade ribeye steak served with truffle-infused mashed potatoes and seasonal vegetables.",
    spiceLevel: 2,
    category: "main",
    price: 32.99,
    attributes: ["protein-rich", "gourmet", "savory"]
  },
  {
    id: 2,
    name: "Shadow Ramen",
    image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da",
    description: "Black garlic tonkotsu broth with char siu pork, ajitama egg, and house-made noodles in a rich, umami-packed bowl.",
    spiceLevel: 3,
    category: "main",
    price: 18.99,
    attributes: ["warm", "umami", "comfort-food"]
  },
  {
    id: 3,
    name: "Arise Sushi Platter",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    description: "Premium selection of nigiri and maki rolls featuring fresh seasonal fish with a special purple rice infusion.",
    spiceLevel: 1,
    category: "main",
    price: 26.99,
    attributes: ["fresh", "protein-rich", "light"]
  },
  {
    id: 4,
    name: "Hunter's Bowl",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    description: "Power-packed bowl with marinated grilled chicken, quinoa, avocado, and seasonal vegetables with a signature dressing.",
    spiceLevel: 2,
    category: "main",
    price: 16.99,
    attributes: ["protein-rich", "healthy", "balanced"]
  },
  {
    id: 5,
    name: "Mana Potion",
    image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7",
    description: "Revitalizing blueberry and blackberry smoothie with banana, protein, and a hint of lavender, topped with chia seeds.",
    spiceLevel: 0,
    category: "beverage",
    price: 8.99,
    attributes: ["refreshing", "sweet", "energizing"]
  },
  {
    id: 6,
    name: "Dungeon Dessert",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    description: "Dark chocolate lava cake with a molten center, served with purple sweet potato ice cream and berries.",
    spiceLevel: 0,
    category: "dessert",
    price: 12.99,
    attributes: ["sweet", "indulgent", "warm"]
  },
];

const FoodSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredItems = selectedCategory === 'all' 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <section id="featured-food" className="solo-section bg-gradient-to-b from-solo-bg to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="glow-text">Featured</span> Dishes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our chef-crafted specialties inspired by the world of Solo Leveling. Each dish is designed to take your taste buds on an extraordinary journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-solo-card rounded-lg p-1 border border-solo-purple/20">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md font-solo font-medium transition-all ${
                selectedCategory === 'all' 
                  ? 'bg-solo-purple text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setSelectedCategory('main')}
              className={`px-4 py-2 rounded-md font-solo font-medium transition-all ${
                selectedCategory === 'main' 
                  ? 'bg-solo-purple text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Main
            </button>
            <button 
              onClick={() => setSelectedCategory('beverage')}
              className={`px-4 py-2 rounded-md font-solo font-medium transition-all ${
                selectedCategory === 'beverage' 
                  ? 'bg-solo-purple text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Beverages
            </button>
            <button 
              onClick={() => setSelectedCategory('dessert')}
              className={`px-4 py-2 rounded-md font-solo font-medium transition-all ${
                selectedCategory === 'dessert' 
                  ? 'bg-solo-purple text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Desserts
            </button>
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} food={item} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="solo-button animate-glow">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

const FoodCard = ({ food }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="solo-card overflow-hidden group">
      <div className="relative overflow-hidden h-60">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Purple overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-solo-purple text-white py-1 px-3 rounded font-solo font-semibold">
          ${food.price}
        </div>
        
        {/* Spice level indicator */}
        <div className="absolute bottom-4 left-4 flex items-center">
          {food.spiceLevel > 0 && (
            <div className="flex gap-1">
              {[...Array(food.spiceLevel)].map((_, i) => (
                <Flame 
                  key={i} 
                  size={16} 
                  className="text-red-500"
                  fill={i < food.spiceLevel ? "currentColor" : "none"}
                />
              ))}
            </div>
          )}
        </div>

        {/* Food title */}
        <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center text-xl font-bold px-4 text-white">
          {food.name}
        </h3>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-4 line-clamp-2">
          {food.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {food.attributes.map((attr, index) => (
            <span 
              key={index}
              className="bg-solo-card border border-solo-purple/30 text-solo-purple-light text-xs px-2 py-1 rounded-full"
            >
              {attr}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-solo-purple/90 hover:bg-solo-purple text-white py-2 rounded font-solo font-medium transition-colors">
            Add to Order
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-solo-card border border-solo-purple/30 hover:bg-solo-purple/10 text-solo-purple-light rounded transition-colors">
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
