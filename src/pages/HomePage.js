import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Collections from '../components/Collections/Collections';
import FeaturedProducts from '../components/Feature/feature';
import Inspiration from '../components/Inspiration/Inspiration';
import AboutUs from '../components/AboutUs/AboutUs';
import Services from '../components/Services/Services';
import CustomerFeedback from '../components/CustomerFeedback/CustomerFeedback';
import Partners from '../components/Partners/Partners';
import ContactSection from '../components/ContactSection/ContactSection';

function HomePage() {
  return (
    <div >
      <HeroSection  />
      <Inspiration  />
      <Services />
      <Collections  />
      <Partners />

      <FeaturedProducts />
      <CustomerFeedback/>

      <AboutUs/>
      <ContactSection />
    </div>
  );
}

export default HomePage;
