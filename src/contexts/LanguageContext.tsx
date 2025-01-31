"use client";

import { createContext, useContext, useState, useEffect } from "react";

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const userLocale = navigator.language;
        const initialLanguage = userLocale.startsWith("pt") ? "pt-BR" : "en";
        setLanguage(initialLanguage);
        localStorage.setItem("language", initialLanguage);
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
