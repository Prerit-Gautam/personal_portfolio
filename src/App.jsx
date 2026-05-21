import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutTechSection from './components/AboutTechSection';
import ImpactSection from './components/ImpactSection';
import ProjectsSection from './components/ProjectsSection';
import DetailedProjectOverview from './components/DetailedProjectOverview';
import ServicesSection from './components/ServicesSection';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="bg-background min-h-screen text-textPrimary selection:bg-primary selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutTechSection />
        <div id="projects">
          <ProjectsSection />
          <DetailedProjectOverview />
          <ServicesSection />
        </div>
        <ImpactSection />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
