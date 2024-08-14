import React, { useState } from 'react';
import './HeroSection.css';

const HeroSectionData = [
  {
    subtitle: 'Exceptional Craftsmanship Meets Innovation',
    title: 'Master the Art of Embroidery Machines',
    image: '/images/machine.png',
  },
  {
    subtitle: 'Elevate Your Creative Potential',
    title: 'Transform Fabrics with Cutting-Edge Technology',
    image: '/images/fabric.png',
  },
  {
    subtitle: 'Unleash Your Design Vision',
    title: 'Advanced Embroidery for Stunning Results',
    image: '/images/design.png',
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero-container">
      <div className="hero-text">
        <p className="hero-subtitle">{HeroSectionData[currentIndex].subtitle}</p>
        <h1 className="hero-title">{HeroSectionData[currentIndex].title}</h1>
        <button className="shop-button">Explore Now</button>
      </div>
      <img
        className="hero-image"
        src={HeroSectionData[currentIndex].image}
        alt="Embroidery Machine"
      />
      <div className="pagination">
        {HeroSectionData.map((_, index) => (
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
