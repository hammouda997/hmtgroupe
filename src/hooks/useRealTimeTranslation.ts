import { useState, useEffect, useCallback } from 'react';
import { translationService } from '@/lib/translation';

// Hook for real-time translation of any text content
export const useRealTimeTranslation = (text: string, language: string) => {
  const [translatedText, setTranslatedText] = useState(text);
  const [isTranslating, setIsTranslating] = useState(false);

  const translate = useCallback(async () => {
    if (!text || language === 'fr') {
      setTranslatedText(text);
      return;
    }

    setIsTranslating(true);
    try {
      const translated = await translationService.translateAnyText(text, language);
      setTranslatedText(translated);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText(text);
    } finally {
      setIsTranslating(false);
    }
  }, [text, language]);

  useEffect(() => {
    translate();
  }, [translate]);

  return { translatedText, isTranslating };
};

// Hook for translating multiple texts at once
export const useBatchTranslation = (texts: string[], language: string) => {
  const [translatedTexts, setTranslatedTexts] = useState(texts);
  const [isTranslating, setIsTranslating] = useState(false);

  const translate = useCallback(async () => {
    if (!texts.length || language === 'fr') {
      setTranslatedTexts(texts);
      return;
    }

    setIsTranslating(true);
    try {
      const translated = await translationService.translateBatch(texts, language);
      setTranslatedTexts(translated);
    } catch (error) {
      console.error('Batch translation error:', error);
      setTranslatedTexts(texts);
    } finally {
      setIsTranslating(false);
    }
  }, [texts, language]);

  useEffect(() => {
    translate();
  }, [translate]);

  return { translatedTexts, isTranslating };
};

// Hook for translating any object/array content
export const useContentTranslation = <T>(content: T, language: string) => {
  const [translatedContent, setTranslatedContent] = useState<T>(content);
  const [isTranslating, setIsTranslating] = useState(false);

  const translate = useCallback(async () => {
    if (!content || language === 'fr') {
      setTranslatedContent(content);
      return;
    }

    setIsTranslating(true);
    try {
      const translated = await translationService.translateObject(content, language) as T;
      setTranslatedContent(translated);
    } catch (error) {
      console.error('Content translation error:', error);
      setTranslatedContent(content);
    } finally {
      setIsTranslating(false);
    }
  }, [content, language]);

  useEffect(() => {
    translate();
  }, [translate]);

  return { translatedContent, isTranslating };
};
