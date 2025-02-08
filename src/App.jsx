import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Benefits />
      <Timeline />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;