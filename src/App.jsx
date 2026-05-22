import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutTechSection from './components/AboutTechSection';
import ImpactSection from './components/ImpactSection';
import CardsParallaxSection from './components/CardsParallaxSection';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="bg-background min-h-screen text-textPrimary selection:bg-primary selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutTechSection />
        <div id="projects">
          <CardsParallaxSection />
        </div>
        <ImpactSection />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
