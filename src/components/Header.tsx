import React, { useState } from 'react';
import { Monitor, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">underfitted</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Servizi
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Chi siamo
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contatti
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors w-full text-left"
              >
                Servizi
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors w-full text-left"
              >
                Chi siamo
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors w-full text-left"
              >
                Contatti
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;