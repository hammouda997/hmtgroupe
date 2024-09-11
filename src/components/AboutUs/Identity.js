import React from "react";
import { useTranslation } from 'react-i18next';
import './AboutUs.css';
import { FaCheckCircle } from 'react-icons/fa';

const Identity = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutus-supercontainer">
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2 className="about-us-heading">{t('aboutUs')}</h2>
          <p className="intro-paragraph">
            {t('welcomeMessage')}
          </p>
          <p>{t('whyChooseUs')}</p>
          <ul className="about-us-list">
            <li>
              <FaCheckCircle className="list-icon" />
              <span className="list-text">{t('highQualityMachinery')}</span>
            </li>
            <li>
              <FaCheckCircle className="list-icon" />
              <span className="list-text">{t('tailoredSolutions')}</span>
            </li>
            <li>
              <FaCheckCircle className="list-icon" />
              <span className="list-text">{t('expertAdvice')}</span>
            </li>
            <li>
              <FaCheckCircle className="list-icon" />
              <span className="list-text">{t('innovativeEquipment')}</span>
            </li>
            <li>
              <FaCheckCircle className="list-icon" />
              <span className="list-text">{t('dedicatedManufacturing')}</span>
            </li>
          </ul>
        </div>
        <img 
          src="https://www.suntech-machine.com/uploads/image/20230507/20230507204259_89901.jpg" 
          alt="HMT Groupe" 
          className="about-us-image"
        />
      </div>
    </div>
    </div>
  );
}

export default Identity;
