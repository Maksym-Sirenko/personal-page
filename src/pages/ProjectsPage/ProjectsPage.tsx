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
  const modalExitDelay = 500;

  const { language } = useOutletContext<{ language: Language }>();
  const t = siteContent[language].projects;

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

          <div className={styles.grid}>
            {projectsContent.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
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
