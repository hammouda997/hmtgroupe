import React, { useState, useEffect, useRef } from 'react';
import './SidebarIndicator.css';

const SidebarIndicator = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isHidden, setIsHidden] = useState(true);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0].id;
      const heroSection = document.getElementById('hero-section');
      const footerSection = document.getElementById('footer-section');
      const scrollPosition = window.scrollY || window.pageYOffset;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const showSidebarThreshold = pageHeight * 0.01; 
      if (heroSection && footerSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();

        const isHeroVisible = heroRect.top <= window.innerHeight && heroRect.bottom > 0;
        const isFooterVisible = footerRect.top < window.innerHeight && footerRect.bottom > 0;
        setIsHidden(!(scrollPosition > showSidebarThreshold && !isHeroVisible && !isFooterVisible));

        sections.forEach((section) => {
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
    if (id === 'hero-section') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        console.log(`Scrolling to ${id}`);
  
        const yOffset = -20; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
        window.scrollTo({ top: y, behavior: 'smooth' });
        
        setActiveSection(id);
      } else {
        console.error(`Element with id ${id} not found`);
      }
    }
  };

  useEffect(() => {
    if (sidebarRef.current) {
      const activeIndicator = sidebarRef.current.querySelector(`#sidebar-${activeSection}`);
      if (activeIndicator) {
        const offset = activeIndicator.offsetLeft + (activeIndicator.offsetWidth - sidebarRef.current.offsetWidth) / 2;
        sidebarRef.current.scrollLeft = offset;
      }
    }
  }, [activeSection]);

  return (
    <div ref={sidebarRef} className={`sidebar-indicator ${isHidden ? 'hidden' : ''}`}>
      {sections.map((section) => (
        <div
          id={`sidebar-${section.id}`}
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
