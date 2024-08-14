import React from 'react';
import './ProductsDisplay.css';

const products = [
  {
    name: 'Mini Desk Lamp',
    price: 99.0,
    originalPrice: 110.0,
    image: './images/machine.png',
  },
  {
    name: 'Dome Pendant',
    price: 345.0,
    originalPrice: 380.0,
    image: './images/machine2.png',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine3.png',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine4.png',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine5.png',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine4.png',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine2.png',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine3.png',
  },
  // Add more products here...
];

const ProductDisplay = () => {
  return (
    <div className="product-display-container">
      <div className="product-sort-view">
        <div className="view-options">
          <button className="grid-view active"></button>
          <button className="list-view"></button>
        </div>
        <div className="sort-options">
          <span >Sort By</span>
          <select>
            <option value="trending">Trending</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">
              ৳{product.price.toFixed(1)} BDT{' '}
              <span className="original-price">৳{product.originalPrice.toFixed(1)} BDT</span>
            </p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
