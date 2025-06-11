import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  Clock,
  Shield,
  Euro
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const isLocalhost = window.location.hostname === 'localhost';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLocalhost) {
      // Simulazione invio email in ambiente locale
      console.log('Simulazione invio email in ambiente locale');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 10000);
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    const serviceID = 'service_kg5nio6';
    const templateID = 'template_xsu3rl6';
    const userID = 'Q8Tn5wZaKL7j1ytQo';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('Si è verificato un errore. Riprova più tardi.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contatti
          </h2>
          <p className="text-xl text-gray-600">
            Parliamone senza impegno. Risposta garantita entro 1 ora.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Richiedi informazioni
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Messaggio inviato!
                </h4>
                <p className="text-gray-600">
                  Ti risponderò entro 1 ora. Controlla la tua email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="la.tua@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Descrivi il tuo problema o cosa ti serve..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Invia messaggio
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Contatto rapido</h4>
                  <p className="text-gray-600">Risposta entro 1 ora</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:info@underfitted.ch" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@underfitted.ch</span>
                </a>
                
                <a 
                  href="tel:+41782111187" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+41 78 211 11 87</span>
                </a>
                
                <a 
                  href="https://wa.me/41782111187" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Garanzie di qualità
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Euro className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Preventivo gratuito prima di ogni intervento</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700">Ricambi di qualità</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Niente sorprese</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;