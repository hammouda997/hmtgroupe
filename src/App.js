import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage';
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer';
import AboutUsPAge from './pages/AboutUs/AboutUs';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <><Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUsPAge />} />

          </Routes>
        </main>
      </div>
    </Router><Footer /></>

  );
};

export default App;
