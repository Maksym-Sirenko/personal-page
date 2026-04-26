import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import ScrollTopButton from "../../components/ui/ScrollTopButton/ScrollTopButton";
import ProjectCard from "../../components/project/ProjectCard/ProjectCard";
import ProjectModal from "../../components/project/ProjectModal/ProjectModal";
import { projectsContent } from "../../data/projectsContent";
import { siteContent, type Language } from "../../i18n/siteContent";
import type { Project } from "../../types/project";
import styles from "./ProjectsPage.module.scss";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const modalExitDelay = 500;

  const { language } = useOutletContext<{ language: Language }>();
  const t = siteContent[language].projects;

  const technologies = Array.from(
    new Set(projectsContent.flatMap((project) => project.stack))
  ).sort((a, b) => a.localeCompare(b));

  const filteredProjects = selectedTech
    ? projectsContent.filter((project) => project.stack.includes(selectedTech))
    : projectsContent;

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    window.setTimeout(() => {
      setSelectedProject(null);
    }, modalExitDelay);
  };

  return (
    <main>
      <Container>
        <section className={styles.section}>
          <h1 className={styles.title}>{t.title}</h1>

          <p className={styles.subtitle}>{t.subtitle}</p>

          <div className={styles.filterGroup}>
            <p className={styles.filterLabel}>{t.filterLabel}</p>

            <div className={styles.filters} aria-label={t.filterLabel}>
              <button
                type="button"
                className={!selectedTech ? styles.activeFilter : styles.filterButton}
                aria-pressed={!selectedTech}
                onClick={() => setSelectedTech(null)}
              >
                {t.allTechnologies}
              </button>

              {technologies.map((technology) => (
                <button
                  key={technology}
                  type="button"
                  className={
                    selectedTech === technology ? styles.activeFilter : styles.filterButton
                  }
                  aria-pressed={selectedTech === technology}
                  onClick={() => setSelectedTech(technology)}
                >
                  {technology}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className={styles.emptyState}>{t.emptyFilter}</p>
          )}
        </section>
      </Container>

      <ScrollTopButton language={language} />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />
    </main>
  );
}

export default ProjectsPage;
