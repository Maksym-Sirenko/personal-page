import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import SVGIcon from "../../ui/SVGIcon/SVGIcon";
import styles from "./Header.module.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <SVGIcon name={isMenuOpen ? "icon-close" : "icon-menu"} />
          </button>

          <nav
            id="mobile-navigation"
            className={clsx(styles.nav, isMenuOpen && styles.navOpen)}
          >
            <ul className={styles.navList}>
              <li>
                <NavLink to="/" className={getLinkClass} onClick={closeMenu}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  className={getLinkClass}
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={getLinkClass}
                  onClick={closeMenu}
                >
                  About / Contact
                </NavLink>
              </li>
            </ul>

            <Button
              variant="secondary"
              className={styles.contactButton}
              onClick={closeMenu}
            >
              Contact Me
            </Button>
          </nav>
        </div>
      </Container>

      <div
        className={clsx(styles.overlay, isMenuOpen && styles.overlayVisible)}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}

export default Header;
