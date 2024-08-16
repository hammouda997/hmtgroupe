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
import SidebarIndicator from '../components/SidebarIndicator/SidebarIndicator'; 
const sections = [
  { id: 'hero-section', label: 'Home' },
  { id: 'inspiration', label: 'Inspiration' },
  { id: 'services', label: 'Services' },
  { id: 'collections', label: 'Collections' },
  { id: 'partners', label: 'Partners' },
  { id: 'featured-products', label: 'Featured Products' },
  { id: 'customer-feedback', label: 'Customer Feedback' },
  { id: 'about-us', label: 'About Us' },
  { id: 'contact-section', label: 'Contact Us' },

];

function HomePage() {
  return (
    <div>
      <SidebarIndicator sections={sections} />
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="inspiration">
        <Inspiration />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="collections">
        <Collections />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="featured-products">
        <FeaturedProducts />
      </div>
      <div id="customer-feedback">
        <CustomerFeedback />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="contact-section">
        <ContactSection />
      </div>
      <div id="footer-section">

      </div>
    </div>
  );
}

export default HomePage;