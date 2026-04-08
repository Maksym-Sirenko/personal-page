import { useOutletContext } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import { siteContent, type Language } from "../../i18n/siteContent";
import styles from "./HomePage.module.scss";

type OutletContextType = {
  language: Language;
};

function HomePage() {
  const { language } = useOutletContext<OutletContextType>();
  const t = siteContent[language];

  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{t.home.title}</h1>

            <p className={styles.subtitle}>{t.home.subtitle}</p>

            <div className={styles.actions}>
              <Button
                to="/projects"
                variant="primary"
                className={styles.actionButton}
              >
                {t.home.viewProjects}
              </Button>

              <Button
                to="/about#contact"
                variant="secondary"
                className={styles.actionButton}
              >
                {t.home.contact}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default HomePage;
