import React from 'react';
import { TranslatedText } from './TranslatedText';
import { useTranslationContext } from '@/contexts/TranslationContext';

// Example component showing how ANY text content can be automatically translated
export const UniversalTranslationExample: React.FC = () => {
  const { language, changeLanguage } = useTranslationContext();

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        <TranslatedText>Exemple de Traduction Universelle</TranslatedText>
      </h2>
      
      <div className="space-y-4">
        <p>
          <TranslatedText>
            Ce texte sera automatiquement traduit en anglais quand vous changez la langue.
          </TranslatedText>
        </p>
        
        <p>
          <TranslatedText>
            Même les descriptions de produits, les noms de services, et tout autre contenu dynamique seront traduits automatiquement.
          </TranslatedText>
        </p>
        
        <div className="bg-white p-4 rounded border">
          <h3 className="font-semibold mb-2">
            <TranslatedText>Contenu Dynamique</TranslatedText>
          </h3>
          <p>
            <TranslatedText>
              Ceci est un exemple de contenu qui peut venir de votre CMS, base de données, ou API. 
              Il sera traduit automatiquement sans aucune configuration supplémentaire.
            </TranslatedText>
          </p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => changeLanguage('fr')}
            className={`px-4 py-2 rounded ${language === 'fr' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Français
          </button>
          <button 
            onClick={() => changeLanguage('en')}
            className={`px-4 py-2 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            English
          </button>
        </div>
        
        <p className="text-sm text-gray-600">
          <TranslatedText>
            Langue actuelle: {language === 'fr' ? 'Français' : 'English'}
          </TranslatedText>
        </p>
      </div>
    </div>
  );
};
