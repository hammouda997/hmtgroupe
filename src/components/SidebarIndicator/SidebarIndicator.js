import React, { useState, useEffect } from 'react';
import './SidebarIndicator.css';

const SidebarIndicator = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = rect.bottom + window.scrollY;

          if (window.scrollY >= elementTop - window.innerHeight / 2 && window.scrollY < elementBottom - window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    const debounce = (func, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [sections]);

  useEffect(() => {
    const updateScrollPosition = () => {
      const indicator = document.querySelector('.sidebar-indicator');
      const activeItem = document.querySelector('.indicator-item.active');
      if (indicator && activeItem) {
        const indicatorRect = indicator.getBoundingClientRect();
        const activeItemRect = activeItem.getBoundingClientRect();

        if (activeItemRect.left < indicatorRect.left || activeItemRect.right > indicatorRect.right) {
          indicator.scrollLeft = activeItem.offsetLeft - indicator.offsetWidth / 2 + activeItem.offsetWidth / 2;
        }
      }
    };

    updateScrollPosition();
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="sidebar-indicator">
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
