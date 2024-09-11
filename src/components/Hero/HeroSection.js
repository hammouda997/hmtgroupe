import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % t('hero', { returnObjects: true }).length);
    }, 3250);

    return () => clearInterval(interval);
  }, [t]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const heroData = t('hero', { returnObjects: true });

  return (
    <section className="hero-container">
      <div className="hero-text">
        <p className="hero-subtitle">{heroData[currentIndex].subtitle}</p>
        <h1 className="hero-title">{heroData[currentIndex].title}</h1>
        <button className="shop-button">{t('buttons.explore')}</button>
      </div>
      <img
        className="hero-image"
        src={heroData[currentIndex].image}
        alt="Hero"
      />
      <div className="pagination">
        {heroData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
