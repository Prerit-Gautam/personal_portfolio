import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'achievements', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        current = 'contact';
      }
      
      if (window.scrollY < 100) {
        current = 'home';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (section) => {
    const baseClass = "transition-colors hover:text-primary";
    return `${baseClass} ${activeSection === section ? "text-primary" : "text-textSecondary"}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-medium text-textPrimary hover:text-primary transition-colors">Prerit Gautam</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className={getLinkClass('home')}>Home</a>
          <a href="#about" className={getLinkClass('about')}>About</a>
          <a href="#projects" className={getLinkClass('projects')}>Projects</a>
          <a href="#achievements" className={getLinkClass('achievements')}>Achievements</a>
        </nav>

        <a href="#contact" className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
          Contact me <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
};

export default Header;
