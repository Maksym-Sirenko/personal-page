import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import TelegramChatButton from "../components/ui/TelegramChatButton/TelegramChatButton";
import type { Language } from "../i18n/siteContent";

function MainLayout() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("language");

    return savedLanguage === "ua" || savedLanguage === "en"
      ? savedLanguage
      : "en";
  });

  useEffect(() => {
    document.documentElement.lang = language === "ua" ? "uk" : "en";
    window.localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Outlet context={{ language }} />
      <TelegramChatButton language={language} />
      <Footer language={language} />
    </>
  );
}

export default MainLayout;
