import { Link } from "react-router-dom";
import Container from "../../ui/Container/Container";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/">
            Maksym Sirenko
          </Link>

          <ul className={styles.navList}>
            <li>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/about">
                About / Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;