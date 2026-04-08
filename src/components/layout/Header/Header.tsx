import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import SVGIcon from "../../ui/SVGIcon/SVGIcon";
import Drawer from "../../ui/Drawer/Drawer";
import { siteContent, type Language } from "../../../i18n/siteContent";
import styles from "./Header.module.scss";

type HeaderProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = siteContent[language];

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "ua" : "en"));
  };

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.activeLink);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <SVGIcon name="icon-logo-mark" className={styles.logoIcon} />
            <span className={styles.logoText}>Maksym Sirenko</span>
          </Link>

          <nav className={styles.desktopNav}>
            <ul className={styles.desktopNavList}>
              <li>
                <NavLink to="/" className={getLinkClass}>
                  {t.nav.home}
                </NavLink>
              </li>

              <li>
                <NavLink to="/projects" className={getLinkClass}>
                  {t.nav.projects}
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={getLinkClass}>
                  {t.nav.about}
                </NavLink>
              </li>
            </ul>

            <Button to="/about#contact" variant="secondary">
              {t.nav.contact}
            </Button>

            <button
              type="button"
              className={styles.languageButton}
              onClick={toggleLanguage}
              aria-label={t.nav.switchLanguage}
            >
              {language === "en" ? "UA" : "EN"}
            </button>
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <SVGIcon name={isMenuOpen ? "icon-close" : "icon-menu"} />
          </button>
        </div>
      </Container>

      <Drawer isOpen={isMenuOpen} onClose={closeMenu} language={language}>
        <nav id="mobile-navigation" className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            <li>
              <NavLink to="/" className={getLinkClass} onClick={closeMenu}>
                {t.nav.home}
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" className={getLinkClass} onClick={closeMenu}>
                {t.nav.projects}
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={getLinkClass} onClick={closeMenu}>
                {t.nav.about}
              </NavLink>
            </li>
          </ul>

          <Button
            to="/about#contact"
            variant="secondary"
            className={styles.mobileContactButton}
            onClick={closeMenu}
          >
            {t.nav.contact}
          </Button>

          <button
            type="button"
            className={styles.languageButton}
            onClick={toggleLanguage}
            aria-label={t.nav.switchLanguage}
          >
            {language === "en" ? "UA" : "EN"}
          </button>
        </nav>
      </Drawer>
    </header>
  );
}

export default Header;
