import Container from "../Container/Container";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>
          © {new Date().getFullYear()} Maksym Sirenko. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;