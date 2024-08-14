import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
