import React, { useState, useEffect } from 'react';
import './ProductsDisplay.css';
import { useNavigate } from 'react-router-dom';

const Machines = [
  {
    name: 'Mini Desk Lamp',
    image: './images/machine.png',
    category: 'Home Embroidery Machines',
    produces: ['Palestine Embroidery', 'Deko Embroidery'], // Related products
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.'
  },
  {
    name: 'Dome Pendant',
    image: './images/machine2.png',
    category: 'Commercial',
    produces: ['Nanami Embroidery', 'Gon Embroidery'], // Related products
    description: 'Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.'
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine3.png',
    category: 'Single-Needle',
    produces: ['Sussuke Embroidery', 'Naruto Embroidery'], // Related products
    description: 'Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.'
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine4.png',
    category: 'Multi-Needle',
    produces: ['Palestine Embroidery', 'Nanami Embroidery'], // Related products
    description: 'Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.'
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine5.png',
    category: 'Industrial',
    produces: ['Gon Embroidery', 'Sussuke Embroidery'], // Related products
    description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
  },
  // Add more machines...
];

const OtherProducts = [
  {
    name: 'Palestine Embroidery',
    image: './images/Palestine.png',
    category: 'Electronics',
    relatedMachines: ['Mini Desk Lamp', 'Novelty Pendant'], // Related machines
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.'
  },
  {
    name: 'Deko Embroidery',
    image: './images/product1.png',
    category: 'Wearables',
    relatedMachines: ['Mini Desk Lamp'], // Related machines
    description: 'Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.'
  },
  {
    name: 'Nanami Embroidey',
    image: './images/product2.png',
    category: 'Electronics',
    relatedMachines: ['Dome Pendant', 'Novelty Pendant'], // Related machines
    description: 'Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.'
  },
  {
    name: 'Gon Embroidery',
    image: './images/Gon.png',
    category: 'Office Supplies',
    relatedMachines: ['Dome Pendant', 'Novelty Pendant'], // Related machines
    description: 'Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.'
  },
  {
    name: 'Sussuke Embroidey',
    image: './images/Machine1-Product1.png',
    category: 'Fitness',
    relatedMachines: ['Novelty Pendant'], // Related machines
    description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
  },
  {
    name: 'Naruto Embroidery',
    image: './images/Machine1-Product2.png',
    category: 'Office Supplies',
    relatedMachines: ['Novelty Pendant'], // Related machines
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
  },
  // Add more products here...
];  

const ProductDisplay = ({ selectedCategories, activeCategory, onActiveCategoryChange }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = (product) => {
    let relatedProducts = [];
    let relatedMachines = [];

    if (Machines.includes(product)) { // Check if it's a machine
      relatedProducts = product.produces; // Get related products from the machine
      relatedMachines = OtherProducts.filter(p => p.relatedMachines.includes(product.name));
    } else { // It's a product
      relatedMachines = Machines.filter(machine => product.relatedMachines.includes(machine.name));
    }

    navigate('/product-details', { state: { product, relatedProducts, relatedMachines } });
  };
  
  useEffect(() => {
    setLoading(true);
    
    // Simulate a delay for loading products
    const timeout = setTimeout(() => {
      let productData = [];
      if (activeCategory === 'machine' || activeCategory === 'all') {
        productData = productData.concat(Machines);
      }
      if (activeCategory === 'creation' || activeCategory === 'all') {
        productData = productData.concat(OtherProducts);
      }

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
              className={`sort-button ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => onActiveCategoryChange('all')}
            >
              All
            </button>
            <button
              className={`sort-button ${activeCategory === 'machine' ? 'active' : ''}`}
              onClick={() => onActiveCategoryChange('machine')}
            >
              Embroidery
            </button>
            <button
              className={`sort-button ${activeCategory === 'creation' ? 'active' : ''}`}
              onClick={() => onActiveCategoryChange('creation')}
            >
              Creation
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