import { useOutletContext } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import ScrollTopButton from "../../components/ui/ScrollTopButton/ScrollTopButton";
import { siteContent, type Language } from "../../i18n/siteContent";
import styles from "./AboutPage.module.scss";

type OutletContextType = {
  language: Language;
};

const resumeHref = "/documents/maksym-sirenko-resume.pdf";
const certificateHref = "/documents/maksym-sirenko-certificate.pdf";

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
              <p className={styles.introLead}>{t.introLead}</p>
              <p className={styles.introBody}>{t.introBody}</p>
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

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>{t.goalsTitle}</h2>
              <ul className={styles.list}>
                {t.goalsItems.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>{t.documentsTitle}</h2>
              <p className={styles.cardText}>{t.documentsText}</p>

              <div className={styles.documentGrid}>
                <div className={styles.documentBlock}>
                  <h3 className={styles.documentTitle}>{t.resumeLabel}</h3>
                  <p className={styles.documentText}>{t.resumeText}</p>
                  <Button href={resumeHref} target="_blank" download variant="primary">
                    {t.downloadResume}
                  </Button>
                </div>

                <div className={styles.documentBlock}>
                  <h3 className={styles.documentTitle}>{t.certificateLabel}</h3>
                  <p className={styles.documentText}>{t.certificateText}</p>
                  <Button href={certificateHref} target="_blank" variant="secondary">
                    {t.viewCertificate}
                  </Button>
                </div>
              </div>
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
              <Button to="/projects" variant="secondary">
                {t.projectsLink}
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <ScrollTopButton language={language} />
    </main>
  );
}

export default AboutPage;

