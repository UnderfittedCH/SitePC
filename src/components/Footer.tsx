import React from 'react';
import { Monitor, MapPin, Mail, Phone } from 'lucide-react';

// Definisci il tipo delle props con onPrivacyClick
interface FooterProps {
  onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">underfitted</span>
            </div>
            <p className="text-gray-400 mb-4">
              Assistenza PC e build personalizzate in Ticino. 
              Oltre 15 anni di esperienza al tuo servizio.
            </p>
            <div className="flex items-center space-x-2 text-purple-400">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Svizzera Italiana – Canton Ticino</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Servizi</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">Chi siamo</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contatti</button>
              {/* Usa la prop onPrivacyClick invece della funzione interna */}
              <button onClick={onPrivacyClick} className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-2">
              <a 
                href="mailto:info@underfitted.ch" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@underfitted.ch</span>
              </a>
              <a 
                href="tel:+41782111187" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+41 78 211 11 87</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} underfitted. Tutti i diritti riservati. 
            Operativo in Svizzera Italiana – Canton Ticino
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
