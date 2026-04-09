import { useEffect, useState } from "react";
import { siteContent, type Language } from "../../../i18n/siteContent";
import styles from "./ScrollTopButton.module.scss";

type ScrollTopButtonProps = {
  language: Language;
  threshold?: number;
};

function ScrollTopButton({
  language,
  threshold = 320,
}: ScrollTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleScrollToTop}
      aria-label={siteContent[language].ui.backToTop}
    >
      ↑
    </button>
  );
}

export default ScrollTopButton;
