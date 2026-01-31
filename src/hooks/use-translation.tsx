'use client';

import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import en from '@/lib/i18n/locales/en.json';
import si from '@/lib/i18n/locales/si.json';

type Language = 'en' | 'si';

const translations = { en, si };

type TranslationContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, values?: { [key: string]: string }) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Helper function to navigate nested objects
const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string, values?: { [key: string]: string }): string => {
    let text = getNestedValue(translations[language], key);

    if (!text) {
        // Fallback to English
        text = getNestedValue(translations.en, key);
    }
    
    if (typeof text !== 'string') {
        return key; // Return the key if no translation is found
    }

    if (values) {
      Object.entries(values).forEach(([valueKey, value]) => {
        text = text.replace(new RegExp(`{{${valueKey}}}`, 'g'), value);
      });
    }

    return text;
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
