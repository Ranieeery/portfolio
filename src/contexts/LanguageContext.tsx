"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState("en");
    const router = useRouter();

    const handleSetLanguage = (newLang: string) => {
        setLanguage(newLang);
        localStorage.setItem("language", newLang);
        document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${60 * 60 * 24 * 365}`;
        
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/^\/(en|pt-BR)/, `/${newLang}`);
        router.push(newPath);
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
            return;
        }

        const cookies = document.cookie.split(';');
        const localeCookie = cookies.find(c => c.trim().startsWith('NEXT_LOCALE='));
        if (localeCookie) {
            const cookieValue = localeCookie.split('=')[1];
            setLanguage(cookieValue);
            localStorage.setItem("language", cookieValue);
            return;
        }

        const browserLanguage = navigator.language;
        const defaultLanguage = browserLanguage.startsWith('pt') ? 'pt-BR' : 'en';
        setLanguage(defaultLanguage);
        localStorage.setItem("language", defaultLanguage);
        document.cookie = `NEXT_LOCALE=${defaultLanguage};path=/;max-age=${60 * 60 * 24 * 365}`;
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
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
