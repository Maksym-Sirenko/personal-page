import Container from "../../ui/Container/Container";
import { siteContent, type Language } from "../../../i18n/siteContent";
import styles from "./Footer.module.scss";

type FooterProps = {
  language: Language;
};

function Footer({ language }: FooterProps) {
  const t = siteContent[language].footer;

  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>
          © {new Date().getFullYear()} Maksym Sirenko. {t.rights}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
