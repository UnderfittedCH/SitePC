import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatCanIDo from './components/WhatCanIDo';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';


function App() {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatCanIDo />
      <Services />
      <About />
      <Contact />
      <Footer onPrivacyClick={() => setPrivacyOpen(true)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}

export default App;

