"use client";

import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HomePageProps {
  lang: string;
}

export default function HomePage({ lang }: HomePageProps) {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      setLanguage(lang);
    }
  }, [lang, setLanguage]);

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}