// src/LanguageSwitcher.js
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close the dropdown after selection
  };

  const handleClickOutside = (event) => {
    if (switcherRef.current && !switcherRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="language-switcher"
      ref={switcherRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
<button className="dropdown-toggle">
  <FaGlobe className="globe-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <button onClick={() => handleLanguageChange('en')}>
              EN
            </button>
          </li>
          <li>
            <button onClick={() => handleLanguageChange('fr')}>
              FR
            </button>
          </li>
          <li>
            <button onClick={() => handleLanguageChange('arb')}>
            ARB           </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
