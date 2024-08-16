import React, { useState , useEffect ,   } from 'react';
import './ProductsDisplay.css';
import { useNavigate } from 'react-router-dom';

const Machines = [
  {
    name: 'Mini Desk Lamp',
    image: './images/machine.png',
    category: 'Home Embroidery Machines',
    produces: ['Palestine Embroidery', 'Deko Embroidery'] // Related products
  },
  {
    name: 'Dome Pendant',
    image: './images/machine2.png',
    category: 'Commercial',
    produces: ['Nanami Embroidery', 'Gon Embroidery'] // Related products
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine3.png',
    category: 'Single-Needle',
    produces: ['Sussuke Embroidery', 'Naruto Embroidery'] // Related products
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine4.png',
    category: 'Multi-Needle',
    produces: ['Palestine Embroidery', 'Nanami Embroidery'] // Related products
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine5.png',
    category: 'Industrial',
    produces: ['Gon Embroidery', 'Sussuke Embroidery'] // Related products
  },
  // Add more machines...
];

const OtherProducts = [
  {
    name: 'Palestine Embroidery',
   
    image: './images/Palestine.png',
    category: 'Electronics',
  },
  {
    name: 'Deko Embroidery',
  
    image: './images/product1.png',
    category: 'Wearables',
  },
  {
    name: 'Nanami Embroidey',
   
    image: './images/product2.png',
    category: 'Electronics',
  },
  {
    name: 'Gon Embroidery',
   
    image: './images/Gon.png',
    category: 'Office Supplies',
  },
  {
    name: 'Sussuke Embroidey',
   
    image: './images/Machine1-Product1.png',
    category: 'Fitness',
  },
  {
    name: 'Naruto Embroidery',
   
    image: './images/Machine1-Product2.png',
    category: 'Office Supplies',
  },

  // Add more products here...
];



const ProductDisplay = ({ selectedCategories, activeCategory, onActiveCategoryChange }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = (product) => {
    navigate('/product-details', { state: { product } });
  };

  useEffect(() => {
    setLoading(true);
    
    // Simulate a delay for loading products
    const timeout = setTimeout(() => {
      const productData = activeCategory === 'embroidery' ? Machines : OtherProducts;

      // Filter products based on selected categories
      const filtered = selectedCategories.length > 0
        ? productData.filter(product => selectedCategories.includes(product.category))
        : productData;

      setFilteredProducts(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [selectedCategories, activeCategory]);

  return (
    <div className="product-display-container">
      <div className="product-sort-view">
        <div className="view-options">
          <button className="grid-view active"></button>
          <button className="list-view"></button>
        </div>
        <div className="sort-options">
          <span>Sort By</span>
          <div className="sort-buttons">
            <button
              className={`sort-button ${activeCategory === 'embroidery' ? 'active' : ''}`}
              onClick={() => onActiveCategoryChange('embroidery')}
            >
              Embroidery
            </button>
            <button
              className={`sort-button ${activeCategory === 'other-products' ? 'active' : ''}`}
              onClick={() => onActiveCategoryChange('other-products')}
            >
              Other Products
            </button>
          </div>
        </div>
      </div>
      <div className="product-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="product-card-shimmer shimmer-wrapper" key={index}>
                <div className="shimmer"></div>
              </div>
            ))
          : filteredProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <button onClick={() => handleButtonClick(product)} className="add-to-cart">View</button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductDisplay;