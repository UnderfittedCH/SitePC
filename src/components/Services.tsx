import React from 'react';
import { 
  Settings, 
  Wrench, 
  Globe, 
  FileX 
} from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: "Build Personalizzate",
    description: "Progettiamo e assembliamo PC su misura per gaming, lavoro o studio. Componenti selezionati per massime prestazioni e silenziosità.",
    color: "purple"
  },
  {
    icon: Wrench,
    title: "Assistenza PC",
    description: "Riparazioni, upgrade, pulizia interna, installazioni. Soluzioni rapide per computer fissi e portatili.",
    color: "indigo"
  },
  {
    icon: Globe,
    title: "Supporto Remoto",
    description: "Interventi software a distanza per chi ha bisogno di assistenza senza spostarsi. Sicuro e veloce.",
    color: "purple"
  },
  {
    icon: FileX,
    title: "Recupero Dati",
    description: "Tentativi professionali di recupero dati da hard disk, SSD e chiavette USB.",
    color: "indigo"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            I nostri servizi
          </h2>
          <p className="text-xl text-gray-600">
            Soluzioni complete per tutte le tue esigenze informatiche
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = service.color === 'purple' 
              ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-200' 
              : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200';
            
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${colorClasses} rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;