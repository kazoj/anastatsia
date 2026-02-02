import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <span className={`font-serif text-2xl tracking-widest font-bold ${isScrolled ? 'text-chocolate' : 'text-white'}`}>
            ANASTASIA
          </span>
          <span className={`text-[0.65rem] uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-gold-dark' : 'text-gold-light'}`}>
            Immobilier
          </span>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide ${isScrolled ? 'text-gray-600' : 'text-gray-100'}`}>
          <a href="#" className="hover:text-gold transition-colors">Présentation</a>
          <a href="#" className="hover:text-gold transition-colors">Achats</a>
          <a href="#" className="hover:text-gold transition-colors">Locations</a>
          <a href="#" className="hover:text-gold transition-colors">Divers</a>
        </div>

        {/* CTA & Contact */}
        <div className="hidden md:flex items-center space-x-6">
          <div className={`flex flex-col items-end text-xs ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>
             <span className="flex items-center gap-1"><Phone size={12} /> 01 43 00 00 00</span>
             <span className="flex items-center gap-1"><Mail size={12} /> contact@anastasia.immo</span>
          </div>
          <button className="bg-chocolate hover:bg-chocolate-dark text-white px-6 py-3 rounded-sm font-serif italic shadow-md transition-transform hover:-translate-y-0.5 duration-300 border border-gold/30">
            Estimation Gratuite
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 text-center">
          <a href="#" className="text-gray-800 font-medium hover:text-gold">Présentation</a>
          <a href="#" className="text-gray-800 font-medium hover:text-gold">Achats</a>
          <a href="#" className="text-gray-800 font-medium hover:text-gold">Locations</a>
          <button className="bg-chocolate text-white px-6 py-3 w-full rounded-sm">
            Estimation Gratuite
          </button>
        </div>
      )}
    </nav>
  );
};