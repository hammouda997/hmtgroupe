import React, { useState } from 'react';
import './HeroSection.css';

const HeroSectionData = [
  {
    subtitle: 'Precision and Creativity in Every Stitch',
    title: 'Discover the Art of Machine Embroidery',
    image: '/images/machine.png',
  },
  {
    subtitle: 'Unlock the Potential of Your Fabric',
    title: 'Elevate Your Designs with Embroidery',
    image: '/images/fabric.png',
  },
  {
    subtitle: 'Bring Your Visions to Life',
    title: 'Transform Textiles with Embroidery Expertise',
    image: '/images/design.png',
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? HeroSectionData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === HeroSectionData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="hero-container">
      <div className="hero-text">
        <p className="hero-subtitle">{HeroSectionData[currentIndex].subtitle}</p>
        <h1 className="hero-title">{HeroSectionData[currentIndex].title}</h1>
        <button className="shop-button">Explore Now</button>
      </div>
      <div className="pagination">
        <button className="prev-btn" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="next-btn" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
      <img
        className="hero-image"
        src={HeroSectionData[currentIndex].image}
        alt="Embroidery Machine"
      />
      
    </section>
  );
};

export default HeroSection;