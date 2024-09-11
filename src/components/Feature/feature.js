import React from 'react';
import './FeaturedProducts.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FeaturedProducts = () => {
  const { t } = useTranslation(); // Import translation hook
  const products = [
    {
      name: 'Automatic Flat Bed Knitting Machine',
      price: '99.0 USD',
      oldPrice: '118.0 BDT',
      image: 'images/flat_bed_knitting_machine.png',
      category: 'Embroidery', // Keep this in English
    },
    {
      name: 'Industrial Sewing Machine',
      price: '345.0 USD',
      oldPrice: '380.0 BDT',
      image: 'images/machine2.png',
      category: 'Laser', // Keep this in English
    },
    {
      name: 'Multi-Needle Quilting Machine',
      price: '29.99 USD',
      oldPrice: '40.0 BDT',
      image: 'images/quilting_machine.png',
      category: 'Embroidery', // Keep this in English
    },
    {
      name: 'High-Speed Overlock Machine',
      price: '2567.0 USD',
      image: 'images/machine.png',
      category: 'Laser', // Keep this in English
    },
  ];

  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate('/products');
  };

  const categories = [
    { key: 'all', label: t('featuredProducts.categories.all') },
    { key: 'Embroidery', label: t('featuredProducts.categories.embroidery') },
    { key: 'Laser', label: t('featuredProducts.categories.laser') },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="featured-products_home">
      <h2>{t('featuredProducts.title')}</h2>
      <p>{t('featuredProducts.description')}</p>

      <div className="category-buttons_home">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button_home ${selectedCategory === category.key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="products-grid_home">
        {filteredProducts.map((product, index) => (
          <div className="product-card_home" key={index}>
            <div className="product-image-container_home">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details_home">
              <h3>{product.name}</h3>
              <p className="price_home">
                {product.price} {product.oldPrice && <span className="old-price_home">{product.oldPrice}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="see-all_home" onClick={handleSeeAllClick}>
        {t('featuredProducts.seeAll')}
      </button>
    </div>
  );
};

export default FeaturedProducts;
