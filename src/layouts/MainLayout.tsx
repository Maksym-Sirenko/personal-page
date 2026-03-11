import { Link, Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

function MainLayout() {
  return (
    <>
      <header className={styles.header}>
        <nav>
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
      </header>

      <Outlet />

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Maksym Sirenko</p>
      </footer>
    </>
  );
}

export default MainLayout;