import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Maksym Sirenko</h1>
            <p className={styles.subtitle}>
              Junior Fullstack Developer focused on clean UI, responsive
              layouts, and practical web solutions.
            </p>

            <div className={styles.actions}>
              <Button
                to="/projects"
                variant="primary"
                className={styles.actionButton}
              >
                View Projects
              </Button>

              <Button variant="secondary" className={styles.actionButton}>
                Contact Me
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default HomePage;
