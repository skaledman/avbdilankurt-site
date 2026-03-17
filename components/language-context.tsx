"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import trMessages from "@/locales/tr.json";
import enMessages from "@/locales/en.json";

type Language = "tr" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("site_language");
      if (saved === "tr" || saved === "en") setLanguage(saved);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("site_language", language);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const messages = language === "tr" ? (trMessages as Record<string, unknown>) : (enMessages as Record<string, unknown>);
  const t = (key: string) => {
    const parts = key.split(".");
    let cur: unknown = messages;
    for (const part of parts) {
      if (cur && typeof cur === "object" && part in (cur as Record<string, unknown>)) {
        cur = (cur as Record<string, unknown>)[part];
      } else {
        return key;
      }
    }
    return typeof cur === "string" ? cur : key;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((prev) => (prev === "tr" ? "en" : "tr")),
      t,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};

