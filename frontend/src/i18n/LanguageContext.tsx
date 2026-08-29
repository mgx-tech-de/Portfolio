import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { en, type Translations } from './en';
import { de } from './de';

export type Lang = 'en' | 'de';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLang(): Lang {
  const saved = localStorage.getItem('mgx-lang');
  if (saved === 'de' || saved === 'en') return saved;
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    localStorage.setItem('mgx-lang', next);
    setLangState(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: lang === 'de' ? de : en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
