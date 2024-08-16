  import React, { useState, useRef, useEffect } from 'react';
  import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
  import { useLocation, Link } from 'react-router-dom';
  import './Navbar.css';

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
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchContainerRef = useRef(null);
    const location = useLocation(); // Access current location

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
          setIsSearchFocused(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const toggleSidebar = () => {
      setIsSidebarOpen(prevState => !prevState);
    };

    const handleSearchChange = (e) => {
      const term = e.target.value;
      setSearchTerm(term);
      filterProducts(term);
    };

    const handleSearchFocus = () => {
      setIsSearchFocused(true);
    };

    const handleSearchBlur = () => {
      // Delayed to ensure the click is processed
      setTimeout(() => {
        if (!searchContainerRef.current.contains(document.activeElement)) {
          setIsSearchFocused(false);
        }
      }, 100);
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
        <div
          ref={searchContainerRef}
          className={`search-container ${isSearchFocused ? 'focused' : ''}`}
        >
          <input
            className="search-bar"
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          <FaSearch className="search-icon" />
          {isSearchFocused && searchTerm && (
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
                <li>
                  <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className={location.pathname === '/products' ? 'active' : ''}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={location.pathname === '/about' ? 'active' : ''}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="overlay" onClick={toggleSidebar}></div>
          </>
        )}
      </div>
    );
  };

  export default Navbar;
