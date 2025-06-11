import React from 'react';
import { Users, Globe2, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Chi siamo
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">Underfitted</strong> è una realtà professionale con sede in Ticino, 
                specializzata in assistenza tecnica e soluzioni IT personalizzate per privati, 
                professionisti e piccole imprese.
              </p>
              <p>
                Con oltre <strong className="text-purple-600">15 anni di esperienza</strong> nel settore, 
                forniamo supporto qualificato per computer fissi e portatili: riparazioni hardware e software, 
                aggiornamenti, installazioni, configurazioni e recupero dati.
              </p>
              <p>
                Progettiamo build personalizzate ad alte prestazioni, ottimizzate per carichi di lavoro 
                specifici come grafica, sviluppo software, CAD, gaming o utilizzo quotidiano.
              </p>
              <p>
                Lavoriamo con attenzione al cliente, offrendo consulenze multilingua e interventi rapidi, 
                anche da remoto. Ogni servizio è accompagnato da preventivi trasparenti, soluzioni scalabili 
                e componenti selezionati per garantire affidabilità e continuità operativa.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-700">Anni di esperienza</div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-700">Clienti soddisfatti</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <Globe2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-700">Lingue supportate</div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 text-center">
              <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-indigo-600 mb-2">1h</div>
              <div className="text-gray-700">Tempo di risposta</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Lingue supportate</h3>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-white/20 rounded-full px-4 py-2">🇮🇹 Italiano</span>
            <span className="bg-white/20 rounded-full px-4 py-2">🇫🇷 Français</span>
            <span className="bg-white/20 rounded-full px-4 py-2">🇬🇧 English</span>
            <span className="bg-white/20 rounded-full px-4 py-2">🇩🇪 Deutsch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;