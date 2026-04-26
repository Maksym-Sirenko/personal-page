import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import type { Language } from "../i18n/siteContent";

export type Theme = "light" | "dark";

function getSavedLanguage(): Language | null {
  try {
    const savedLanguage = window.localStorage.getItem("language");

    return savedLanguage === "ua" || savedLanguage === "en" ? savedLanguage : null;
  } catch {
    return null;
  }
}

function getSavedTheme(): Theme | null {
  try {
    const savedTheme = window.localStorage.getItem("theme");

    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
  } catch {
    return null;
  }
}

function getPreferredTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function MainLayout() {
  const [language, setLanguage] = useState<Language>(() => {
    return getSavedLanguage() ?? "en";
  });
  const [theme, setTheme] = useState<Theme>(() => {
    return getSavedTheme() ?? getPreferredTheme();
  });

  useEffect(() => {
    document.documentElement.lang = language === "ua" ? "uk" : "en";

    try {
      window.localStorage.setItem("language", language);
    } catch {
      return;
    }
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      return;
    }
  }, [theme]);

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />
      <Outlet context={{ language }} />
      <Footer language={language} />
    </>
  );
}

export default MainLayout;
