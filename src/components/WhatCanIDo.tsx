import React from 'react';
import { 
  Zap, 
  Shield, 
  HardDrive, 
  Cpu, 
  Database, 
  Wifi 
} from 'lucide-react';

const problems = [
  {
    icon: Zap,
    title: "PC lento o con errori?",
    description: "Lo rimetto in sesto."
  },
  {
    icon: Shield,
    title: "Hai preso un virus?",
    description: "Lo elimino in sicurezza."
  },
  {
    icon: HardDrive,
    title: "Serve più velocità?",
    description: "Installo SSD e RAM su misura."
  },
  {
    icon: Cpu,
    title: "Vuoi un PC nuovo?",
    description: "Progetto e assemblo la tua build ideale."
  },
  {
    icon: Database,
    title: "Hai perso dati importanti?",
    description: "Provo a recuperarli."
  },
  {
    icon: Wifi,
    title: "Non vuoi spostarti?",
    description: "Offro anche supporto da remoto."
  }
];

const WhatCanIDo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cosa posso fare per te
          </h2>
          <p className="text-xl text-gray-600">
            Soluzioni rapide e professionali per ogni problema informatico
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-purple-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      {problem.description}
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

export default WhatCanIDo;