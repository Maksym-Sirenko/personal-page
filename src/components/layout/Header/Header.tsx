import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import SVGIcon from "../../ui/SVGIcon/SVGIcon";
import Drawer from "../../ui/Drawer/Drawer";
import styles from "./Header.module.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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

          <nav className={styles.desktopNav}>
            <ul className={styles.desktopNavList}>
              <li>
                <NavLink to="/" className={getLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/projects" className={getLinkClass}>
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={getLinkClass}>
                  About / Contact
                </NavLink>
              </li>
            </ul>

            <Button variant="secondary">Contact Me</Button>
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <SVGIcon name={isMenuOpen ? "icon-close" : "icon-menu"} />
          </button>
        </div>
      </Container>

      <Drawer isOpen={isMenuOpen} onClose={closeMenu}>
        <nav id="mobile-navigation" className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
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
              <NavLink to="/about" className={getLinkClass} onClick={closeMenu}>
                About / Contact
              </NavLink>
            </li>
          </ul>

          <Button
            variant="secondary"
            className={styles.mobileContactButton}
            onClick={closeMenu}
          >
            Contact Me
          </Button>
        </nav>
      </Drawer>
    </header>
  );
}

export default Header;
