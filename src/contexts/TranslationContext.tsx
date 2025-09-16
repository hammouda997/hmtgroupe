import React, { createContext, useContext, useState, useEffect } from 'react';
import { translationService } from '@/lib/translation';

interface TranslationContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  isTranslating: boolean;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Auto-detect browser language
    const browserLang = navigator.language || navigator.languages?.[0] || 'fr';
    return browserLang.startsWith('en') ? 'en' : 'fr';
  });
  const [isTranslating, setIsTranslating] = useState(false);

  // Initialize translation service with detected language
  useEffect(() => {
    translationService.setLanguage(language);
  }, [language]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    translationService.setLanguage(lang);
    
    // Trigger a custom event to notify components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  };

  const t = (key: string) => {
    // Simple translation function for static keys
    const translations: Record<string, Record<string, string>> = {
      fr: {
        requestQuote: 'Demander un Devis',
        home: 'Accueil',
        about: 'À Propos',
        products: 'Produits',
        services: 'Services',
        contact: 'Contact'
      },
      en: {
        requestQuote: 'Request a Quote',
        home: 'Home',
        about: 'About',
        products: 'Products',
        services: 'Services',
        contact: 'Contact'
      }
    };
    return translations[language]?.[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, isTranslating, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};
