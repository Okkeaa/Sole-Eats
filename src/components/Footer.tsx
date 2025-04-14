
import React from 'react';
import { Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black relative">
      {/* Purple accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-solo-purple-dark via-solo-purple to-solo-purple-light"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="font-solo font-bold text-2xl">
                <span className="glow-text">SOLO</span>EATS
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Experience personalized culinary journeys crafted exclusively for your taste. Every meal unlocks a new level of flavor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-solo-card flex items-center justify-center text-gray-300 hover:bg-solo-purple hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-solo-card flex items-center justify-center text-gray-300 hover:bg-solo-purple hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-solo-card flex items-center justify-center text-gray-300 hover:bg-solo-purple hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-solo font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-solo-purple-light transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-solo-purple-light transition-colors">Menu</Link></li>
              <li><Link to="/personalize" className="text-gray-400 hover:text-solo-purple-light transition-colors">Personalization</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-solo-purple-light transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-solo-purple-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-solo font-bold text-xl mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-solo-purple-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-solo-purple-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-solo-purple-light transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-solo-purple-light transition-colors">Accessibility</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-solo font-bold text-xl mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest offerings and promotions.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="solo-input"
              />
              <button type="submit" className="solo-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SoloEats. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-solo-card hover:bg-solo-purple transition-colors p-3 rounded-full"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
