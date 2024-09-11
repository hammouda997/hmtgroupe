import React from 'react';
import { FaTools, FaBox, FaTruck, FaShieldAlt, FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Advantages.css';

const iconMap = {
  tools: <FaTools />,
  box: <FaBox />,
  truck: <FaTruck />,
  shieldAlt: <FaShieldAlt />,
  phone: <FaPhone />
};

const Advantages = () => {
  const { t } = useTranslation();
  const advantages = t('advantages', { returnObjects: true });

  return (
    <div className="advantages-container">
      <h2 className="advantages-title">{t('advantagesTitle')}</h2>
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-item">
            <div className="advantage-icon">{iconMap[advantage.icon]}</div>
            <h3 className="advantage-title">{advantage.title}</h3>
            <p className="advantage-description">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
