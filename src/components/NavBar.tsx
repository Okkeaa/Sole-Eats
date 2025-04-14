
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-solo-purple/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-solo font-bold text-2xl">
              <span className="glow-text">SOLO</span>EATS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link active-nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/personalize" className="nav-link">Personalize</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <button className="solo-button">Order Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-solo-card border-b border-solo-purple/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link py-2 active-nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/menu" className="nav-link py-2" onClick={toggleMenu}>Menu</Link>
            <Link to="/personalize" className="nav-link py-2" onClick={toggleMenu}>Personalize</Link>
            <Link to="/about" className="nav-link py-2" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="nav-link py-2" onClick={toggleMenu}>Contact</Link>
            <button className="solo-button w-full">Order Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
