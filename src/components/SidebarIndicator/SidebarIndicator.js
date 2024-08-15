import React, { useState, useEffect } from 'react';
import './SidebarIndicator.css'; 

const SidebarIndicator = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0].id;
      const heroSection = document.getElementById('hero-section');
      const footerSection = document.getElementById('footer-section'); 

      if (heroSection && footerSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();

        const isHeroVisible = heroRect.top <= window.innerHeight && heroRect.bottom > 0;

        const isFooterVisible = footerRect.top < window.innerHeight && footerRect.bottom > 0;

        setIsHidden(isHeroVisible || isFooterVisible);

        sections.forEach(section => {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top < window.innerHeight / 2) {
            currentSection = section.id;
          }
        });

        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className={`sidebar-indicator ${isHidden ? 'hidden' : ''}`}>
      {sections.map((section) => (
        <div
          key={section.id}
          className={`indicator-item ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
        >
          {section.label}
        </div>
      ))}
    </div>
  );
};

export default SidebarIndicator;
