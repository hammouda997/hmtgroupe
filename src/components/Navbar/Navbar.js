import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

// Sample product data
const products = [
  { name: 'Mini Desk Lamp', price: 99.0, originalPrice: 110.0, image: './images/machine.png', category: 'Home Embroidery Machines' },
  { name: 'Dome Pendant', price: 345.0, originalPrice: 380.0, image: './images/machine2.png', category: 'Commercial' },
  { name: 'Novelty Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine3.png', category: 'Single-Needle' },
  {
    name: 'Automatic Flat Bed Knitting Machine',
    oldPrice: '118.0 BDT',
    image: 'images/flat_bed_knitting_machine.png',
    category: 'Embroidery',
  },
  {
    name: 'Industrial Sewing Machine',
    oldPrice: '380.0 BDT',
    image: 'images/machine2.png',
    category: 'Laser',
  },
  {
    name: 'Multi-Needle Quilting Machine',
    oldPrice: '40.0 BDT',
    image: 'images/quilting_machine.png',
    category: 'Embroidery',
  },
  {
    name: 'High-Speed Overlock Machine',
    image: 'images/machine.png',
    category: 'Laser',
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterProducts(term);
  };

  const filterProducts = (term) => {
    const lowercasedTerm = term.toLowerCase();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(lowercasedTerm) ||
      product.category.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredProducts(results);
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <img className='logo-img' src='/images/logo3.png' alt='logo' />
      </div>
      <FaBars className="menu-icon" onClick={toggleSidebar} />
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FaSearch className="search-icon" />
        {searchTerm && (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="search-result-item">
                <img src={product.image} alt={product.name} className="search-result-image" />
                <div className="search-result-info">
                  <h3>{product.name}</h3>
                  <p>Category: {product.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
      </div>
      <div className="icon-container">
        {/* Add icons or other elements here */}
      </div>
      {isSidebarOpen && (
        <>
          <div className="sidebar">
            <button className="close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <div className="logo-drop">
              <img className='logo-img-sidebar' src='/images/logo3.png' alt='sidebar logo'/>
            </div>
            <ul className="sidebar-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="overlay" onClick={toggleSidebar}></div>
        </>
      )}
      {/* Display search results */}
      
    </div>
  );
};

export default Navbar;
