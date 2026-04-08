import { useOutletContext } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import { siteContent, type Language } from "../../i18n/siteContent";
import styles from "./AboutPage.module.scss";

type OutletContextType = {
  language: Language;
};

function AboutPage() {
  const { language } = useOutletContext<OutletContextType>();
  const t = siteContent[language].about;

  return (
    <main>
      <section className={styles.section}>
        <Container>
          <div className={styles.hero}>
            <div className={styles.copy}>
              <h1 className={styles.title}>{t.title}</h1>
              <p className={styles.intro}>{t.intro}</p>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>{t.summaryTitle}</h2>
              <ul className={styles.list}>
                {t.summaryItems.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="contact" className={styles.contactCard}>
            <div className={styles.contactCopy}>
              <h2 className={styles.cardTitle}>{t.contactTitle}</h2>
              <p className={styles.contactText}>{t.contactText}</p>
            </div>

            <div className={styles.actions}>
              <Button href="mailto:maksym.sirenko.dev@gmail.com" variant="primary">
                {t.email}
              </Button>
              <Button href="https://github.com/Maksym-Sirenko" variant="secondary">
                {t.github}
              </Button>
              <Button
                href="https://www.linkedin.com/in/maksym-sirenko/"
                variant="secondary"
              >
                {t.linkedin}
              </Button>
              <Button href="https://t.me/Yambren" variant="secondary">
                {t.telegram}
              </Button>
              <Button to="/projects" variant="ghost">
                {t.projectsLink}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default AboutPage;
