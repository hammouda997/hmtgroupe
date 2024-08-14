import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage';

import './App.css';
import Products from './pages/Products/Products';
import Footer from './components/Footer/footer';

const App = () => {
  return (
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer/>
      </div>
  );
};

export default App;
