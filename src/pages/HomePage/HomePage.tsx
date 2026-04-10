import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import Button from "../../components/ui/Button/Button";
import ProjectCard from "../../components/project/ProjectCard/ProjectCard";
import ProjectModal from "../../components/project/ProjectModal/ProjectModal";
import ScrollTopButton from "../../components/ui/ScrollTopButton/ScrollTopButton";
import { projectsContent } from "../../data/projectsContent";
import type { Project } from "../../types/project";
import { siteContent, type Language } from "../../i18n/siteContent";
import styles from "./HomePage.module.scss";

type OutletContextType = {
  language: Language;
};

const featuredProjectIds = ["travel-trucks", "leleka-app", "notehub"];
const heroImageSrc = "/profile/maksym-hero.jpg";
const resumeHref = "/documents/maksym-sirenko-resume.pdf";
const MODAL_EXIT_DELAY = 500;

function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useOutletContext<OutletContextType>();
  const t = siteContent[language].home;

  const featuredProjects = projectsContent.filter((project) =>
    featuredProjectIds.includes(project.id)
  );

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    window.setTimeout(() => {
      setSelectedProject(null);
    }, MODAL_EXIT_DELAY);
  };

  return (
    <main>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroShell}>
            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>{t.role}</p>
                <h1 className={styles.title}>{t.title}</h1>
                <p className={styles.subtitle}>{t.subtitle}</p>

                <div className={styles.actions}>
                  <Button to="/projects" variant="primary" className={styles.actionButton}>
                    {t.viewProjects}
                  </Button>

                  <Button to="/about#contact" variant="secondary" className={styles.actionButton}>
                    {t.contact}
                  </Button>

                  <Button
                    href={resumeHref}
                    target="_blank"
                    download
                    variant="secondary"
                    className={styles.actionButton}
                  >
                    {t.downloadResume}
                  </Button>
                </div>

                <div className={styles.highlights}>
                  {t.highlights.map((item) => (
                    <div key={item.label} className={styles.highlightItem}>
                      <span className={styles.highlightValue}>{item.value}</span>
                      <span className={styles.highlightLabel}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.imageFrame}>
                  <img
                    src={heroImageSrc}
                    alt="Maksym Sirenko portrait"
                    className={styles.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.featuredTitle}</h2>
            <p className={styles.sectionText}>{t.featuredSubtitle}</p>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.aboutStrip}>
            <div>
              <h2 className={styles.sectionTitle}>{t.aboutTitle}</h2>
              <p className={styles.sectionText}>{t.aboutText}</p>
            </div>

            <Button to="/about" variant="secondary">
              {t.aboutAction}
            </Button>
          </div>
        </Container>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />
      <ScrollTopButton language={language} />
    </main>
  );
}

export default HomePage;
