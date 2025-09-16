import React from 'react';
import { useRealTimeTranslation } from '@/hooks/useRealTimeTranslation';
import { useTranslationContext } from '@/contexts/TranslationContext';

interface TranslatedTextProps {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  showLoading?: boolean;
  loadingText?: string;
}

// Universal component that automatically translates any text content
export const TranslatedText: React.FC<TranslatedTextProps> = ({ 
  children, 
  className, 
  as: Component = 'span',
  showLoading = false,
  loadingText = 'Translating...'
}) => {
  const { language } = useTranslationContext();
  const { translatedText, isTranslating } = useRealTimeTranslation(children, language);

  if (showLoading && isTranslating) {
    return <Component className={className}>{loadingText}</Component>;
  }

  return <Component className={className}>{translatedText}</Component>;
};

// Component for translating multiple text elements
interface TranslatedTextsProps {
  texts: string[];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  separator?: string;
}

export const TranslatedTexts: React.FC<TranslatedTextsProps> = ({ 
  texts, 
  className, 
  as: Component = 'div',
  separator = ' '
}) => {
  const { language } = useTranslationContext();
  const { translatedTexts, isTranslating } = useRealTimeTranslation(texts, language);

  if (isTranslating) {
    return <Component className={className}>Translating...</Component>;
  }

  return <Component className={className}>{translatedTexts.join(separator)}</Component>;
};

// Higher-order component for translating any component's text content
export const withTranslation = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return React.forwardRef<any, P>((props, ref) => {
    const { language } = useTranslationContext();
    
    // This would need to be customized based on the component
    // For now, we'll just pass through the props
    return <WrappedComponent {...props} ref={ref} />;
  });
};
