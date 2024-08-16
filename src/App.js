import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage';
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer';

import './App.css';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import ContactSection from './components/ContactSection/ContactSection';
import ProductDescription from './components/ProductDetails/ProductDetails';

const App = () => {
  return (
    <><Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/product-details" element={<ProductDescription/>} />
          </Routes>
        </main>
      </div>
    </Router><Footer /></>

  );
};

export default App;
