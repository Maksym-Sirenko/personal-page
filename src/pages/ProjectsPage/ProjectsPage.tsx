import { useEffect, useState } from "react";
import Container from "../../components/ui/Container/Container";
import ProjectCard from "../../components/project/ProjectCard/ProjectCard";
import ProjectModal from "../../components/project/ProjectModal/ProjectModal";
import { projectsContent } from "../../data/projectsContent";
import type { Project } from "../../types/project";
import styles from "./ProjectsPage.module.scss";
import { siteContent, type Language } from "../../i18n/siteContent";
import { useOutletContext } from "react-router-dom";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { language } = useOutletContext<{ language: Language }>();
  const t = siteContent[language].projects;

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Container>
        <section className={styles.section}>
          <h1 className={styles.title}>{t.title}</h1>

          <p className={styles.subtitle}>{t.subtitle}</p>

          <div className={styles.grid}>
            {projectsContent.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>

          {showScrollTop && (
            <button
              type="button"
              className={styles.scrollTopButton}
              onClick={handleScrollToTop}
              aria-label={language === "ua" ? "Повернутися нагору" : "Back to top"}
            >
              ↑
            </button>
          )}
        </section>
      </Container>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleCloseDetails}
      />
    </main>
  );
}

export default ProjectsPage;
