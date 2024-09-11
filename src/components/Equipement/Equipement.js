import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Equipement.css';

const Equipement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
    const categories = t('categories', { returnObjects: true });

  const handleCardClick = (categoryKey) => {
    navigate(`/products?category=${encodeURIComponent(categoryKey)}`);
  };
  return (
    <div className="categories-container">
      <h2>{t('equipment.heading')}</h2>
      <div className="centered-paragraph">
        <p>{t('equipment.description')}</p>
      </div>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            className="category-item"
            key={index}
            onClick={() => handleCardClick(category.key)} 
          >
            <div
              className="category-image"
              style={{ backgroundImage: `url(${category.img})` }}
            />
            {/* Directly display the label from the JSON file */}
            <h3>{category.label}</h3> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipement;
