import React, { useState, useEffect, useRef } from 'react';
import './ProductsDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import ProductDetailsModal from './ProductDetailsModal';
const categories = [
  { key: 'tracing_material', label: 'TRACING MATERIAL', img: 'https://www.frenchtex.org/media/cache/large_jobs_item/uploads/ckeditor/img/Metiers/French_Tex-Coupeur.jpg' },
  { key: 'quilting_and_cutting', label: 'QUILTING AND CUTTING', img: 'https://img.fashion-skills.com/wp-content/uploads/sites/44/2019/02/coupeur-textile-1.jpg' },
  { key: 'sewing_machines', label: 'SEWING MACHINES', img: 'https://www.meloncollie.fr/wp-content/uploads/2020/01/meloncollie.jpg' },
  { key: 'bonding_and_ultrasonic_machines', label: 'BONDING AND ULTRASONIC MACHINES', img: 'https://i.ytimg.com/vi/b7KhDVhIdq8/maxresdefault.jpg' },
  { key: 'embroidery_machines', label: 'EMBROIDERY MACHINES', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7TEVClBriEFWUwOvDjgGEa7KiCru9A6jvw&s' },
  { key: 'ironing_and_fusing_equipment', label: 'IRONING AND FUSING EQUIPMENT', img: 'https://www.apicius-shop.com/media/common/categories/repassage_1_1.jpg' },
  { key: 'washing_dyeing_drying_finishing_equipment', label: 'WASHING, DYEING, DRYING, AND FINISHING EQUIPMENT', img: 'https://image.made-in-china.com/202f0j00SEbRLpfgIWkP/Washing-and-Dyeing-Machine-for-Sock-Clothes-Garment-T-Shirts.webp' },
  { key: 'cads_software', label: 'CAD SOFTWARE', img: 'https://www.lectra.com/sites/default/files/styles/1050x430/public/2021-11/AM%26AN%20Header.jpg?itok=9CuylhSq' },
  { key: 'leather_and_furniture', label: 'LEATHER AND FURNITURE', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3PJ8GpUXnE2guMSoxchDB9lrODwxDdZi_g&s' },
  { key: 'accessories', label: 'ACCESSORIES', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJnCl0-KKCQHXKz9HIK38I128z9lS5dkn3w&s' },
  { key: 'spare_parts', label: 'SPARE PARTS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9kWUtvFHmzDk0ClHP9oRB3YALJ2753HV2g&s' }
];

const ProductDisplay = ({ selectedCategories, activeCategory, onActiveCategoryChange }) => {
const ProductDisplay = ({ selectedCategories, activeCategory, onActiveCategoryChange }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localLoading, setLocalLoading] = useState(false); 
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategoryState, setActiveCategoryState] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastSortButton, setLastSortButton] = useState('all');
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [productsToShow, setProductsToShow] = useState(6);
  const [noMoreProducts, setNoMoreProducts] = useState(false); 
  const productListRef = useRef(null);
  const containerRef = useRef(null);
  const { t } = useTranslation();
  const Machines = [
    { name: 'Mini Desk Lamp', price: 99.0, originalPrice: 110.0, image: './images/machine.png', category: 'tracing_material' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Dome Pendant', price: 345.0, originalPrice: 380.0, image: './images/machine2.png', category: 'quilting_and_cutting', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Novelty Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine3.png', category: 'sewing_machines' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Novelty Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine4.png', category: 'bonding_and_ultrasonic_machines',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Novelty Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine5.png', category: 'washing_dyeing_drying_finishing_equipment' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Novelty Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine1.png', category: 'embroidery_machines' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Novelty Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine3.png', category: 'spare_parts' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Noveltyaa Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine4.png', category: 'accessories' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Novelty Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine2.png', category: 'cads_software' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Novelty Pendant', price: 780.0, originalPrice: 820.0, image: './images/machine5.png', category: 'leather_and_furniture' ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  ];

  const OtherProducts = [
    { name: 'Palestine Embroidery', image: './images/Palestine.png', category: 'accessories' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Deko Embroidery', image: './images/product1.png', category: 'embroidery_machines' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Nanami Embroidey', image: './images/product2.png', category: 'embroidery_machines' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Gon Embroidery', image: './images/Gon.png', category: 'embroidery_machines' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Sussuke Embroidey', image: './images/Machine1-Product1.png', category: 'leather_and_furniture', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: 'Naruto Embroidery', image: './images/Machine1-Product2.png', category: 'ironing_and_fusing_equipment' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  ];

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);

      const timeout = setTimeout(() => {
        let productData = [];
        if (activeCategoryState === 'all') {
          productData = Machines.concat(OtherProducts);
        } else if (activeCategoryState === 'machine') {
          productData = Machines;
        } else if (activeCategoryState === 'creation') {
          productData = OtherProducts;
        }

        let filtered = [];
        if (selectedCategories.length > 0) {
          filtered = productData.filter(product =>
            selectedCategories.includes(product.category)
          );
        } else {
          filtered = productData;
        }

        setFilteredProducts(filtered);
        setDisplayedProducts(filtered.slice(0, productsToShow));
        setNoMoreProducts(filtered.length <= productsToShow); 
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    };

    fetchProducts();
  }, [selectedCategories, activeCategoryState]);
  useEffect(() => {
    if (localLoading) return;

    setDisplayedProducts(filteredProducts.slice(0, productsToShow));
    setNoMoreProducts(filteredProducts.length <= productsToShow); 
  }, [productsToShow, filteredProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
        setShowLoadMore(true);
      } else {
        setShowLoadMore(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCategoryChange = (category) => {
    setActiveCategoryState(category);
    setLastSortButton(category);
    onActiveCategoryChange(category);
  };

  const loadMoreProducts = () => {
    if (localLoading || noMoreProducts) return;

    setLocalLoading(true); 

    const scrollTop = containerRef.current.scrollTop;

    setTimeout(() => {
 
      const newCount = productsToShow + 6;
      setProductsToShow(newCount);
      setDisplayedProducts(filteredProducts.slice(0, newCount));
      setNoMoreProducts(filteredProducts.length <= newCount);
      setLocalLoading(false); 

      containerRef.current.scrollTop = scrollTop; 
    }, 500); 
  };

  useEffect(() => {
    setDisplayedProducts(filteredProducts.slice(0, productsToShow));
    setNoMoreProducts(filteredProducts.length <= productsToShow); 
  }, [productsToShow, filteredProducts]);

  return (
    <div className="product-display-container" ref={containerRef}>
      <div className="product-sort-view">
        <div className="view-options">
          <button
            className={`view-option ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FontAwesomeIcon icon={faTh} />
          </button>
          <button
            className={`view-option ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>

        <div className="sort-options">
        <span style={{ marginTop: "2%" , marginLeft:"1%" , display:"inline-block" , whiteSpace:"nowrap" }}>{t('sortBy')}</span>
        <div className="sort-buttons" style={{
          flexWrap:"nowrap",
          display:"flex"
        }}>
            <button
              className={`sort-button ${lastSortButton === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
                            {t('all')}

            </button>
            <button
              className={`sort-button ${lastSortButton === 'machine' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('machine')}
            >
                            {t('machine')}

            </button>
            <button
              className={`sort-button ${lastSortButton === 'creation' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('creation')}
            >
                            {t('creation')}

            </button>
          </div>
        </div>
      </div>
      <div className={`product-${viewMode}`}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="product-card-shimmer shimmer-wrapper" key={index}>
                <div className="shimmer"></div>
              </div>
            ))
          : displayedProducts.map((product, index) => (
              <div className={`product-card ${viewMode}`} key={index}>
                <img className='img' src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3 className={`product-name ${viewMode}`}>{product.name}</h3>
                  <p className={`product-category ${viewMode}`}>{categories.find(cat => cat.key === product.category)?.label || "No label"}</p>
                  <p className={`description ${viewMode}`}>{product.description}</p>
                  <div className={`button-container ${viewMode}`}>
                    <button onClick={() => handleButtonClick(product)} className={`view-button`}>  {t('view')}</button>
                  </div>
                </div>
              </div>
            ))
        }
      </div>

      {localLoading && (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}


      {!loading && !noMoreProducts && showLoadMore && (
        <button className="load-more-button" onClick={loadMoreProducts}>
          {localLoading ?  t('loading') : t('loadMore')}
          </button>
      )}

      {noMoreProducts && !loading && (
        <div className="no-more-products-message">
          No more products to load.
        </div>
      )}

      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProductDisplay;