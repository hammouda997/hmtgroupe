import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Collections from '../components/Collections/Collections';
import FeaturedProducts from '../components/Feature/feature';
import Inspiration from '../components/Inspiration/Inspiration';
import './HomePage.css';  // Import the CSS file for HomePage

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection className="home-hero" />
      <Inspiration className="home-inspiration" />
      <Collections className="home-collections" />
      <FeaturedProducts className="home-featured-products" />
    </div>
  );
}

export default HomePage;
