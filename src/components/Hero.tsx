import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-purple-600" />
            <span className="text-purple-600 font-medium">Svizzera Italiana – Canton Ticino</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Assistenza PC e Build
            <span className="block text-purple-600">Personalizzate</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Hai un problema con il tuo computer? Oppure vuoi assemblare un PC su misura per 
            <span className="text-purple-600 font-semibold"> giocare</span>, 
            <span className="text-indigo-600 font-semibold"> lavorare</span> o 
            <span className="text-purple-600 font-semibold"> studiare</span>?
          </p>
          
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Parliamone senza impegno</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-700">Anni di esperienza</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">1h</div>
              <div className="text-gray-700">Tempo di risposta</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700">Preventivo gratuito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;