import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaBars, FaUser, FaShoppingCart, FaCog, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className="navbar-container">
      <div className="logo">HMT groups</div>
      <FaBars className="menu-icon" onClick={toggleSidebar} />
      <div className="search-container">
  <input className="search-bar" type="text" placeholder="Search for products" />
  <FaSearch className="search-icon" />
</div>

      <div className="icon-container">
       
        
        <FaShoppingCart />
        <FaUser />
      </div>
      {isSidebarOpen && (
        <>
          <div className="sidebar">
            <button className="close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <div className="logo">HMT groups</div>
            <ul className="sidebar-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="overlay" onClick={toggleSidebar}></div>
        </>
      )}
    </div>
  );
};

export default Navbar;