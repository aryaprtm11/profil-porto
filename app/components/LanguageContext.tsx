"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Language } from "../data/types";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");
  const [hasLoadedSavedLanguage, setHasLoadedSavedLanguage] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedLanguage = window.localStorage.getItem("portfolio-language");

      if (savedLanguage === "id" || savedLanguage === "en") {
        setLanguage(savedLanguage);
      }

      setHasLoadedSavedLanguage(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasLoadedSavedLanguage) {
      return;
    }

    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [hasLoadedSavedLanguage, language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => {
        setLanguage((currentLanguage) => {
          return currentLanguage === "id" ? "en" : "id";
        });
      },
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
