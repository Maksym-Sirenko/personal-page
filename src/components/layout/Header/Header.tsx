import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import SVGIcon from "../../ui/SVGIcon/SVGIcon";
import styles from "./Header.module.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.activeLink);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/" onClick={closeMenu}>
            <SVGIcon name="icon-logo-mark" className={styles.logoIcon} />
            <span className={styles.logoText}>Maksym Sirenko</span>
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <SVGIcon name={isMenuOpen ? "icon-close" : "icon-menu"} />
          </button>

          <nav className={clsx(styles.nav, isMenuOpen && styles.navOpen)}>
            <ul className={styles.navList}>
              <li>
                <NavLink
                  to="/"
                  className={getLinkClass}
                  onClick={closeMenu}
                >
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
            <Button variant="secondary" className={styles.button}>
              Contact Me
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
