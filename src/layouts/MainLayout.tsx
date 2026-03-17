import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import type { Language } from "../i18n/translations";

function MainLayout() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Outlet context={{ language }} />
      <Footer />
    </>
  );
}

export default MainLayout;