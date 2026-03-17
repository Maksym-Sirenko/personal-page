import { useState } from "react";
import Container from "../../components/ui/Container/Container";
import ProjectCard from "../../components/project/ProjectCard/ProjectCard";
import ProjectModal from "../../components/project/ProjectModal/ProjectModal";
import { projects } from "../../data/projects";
import type { Project } from "../../types/project";
import styles from "./ProjectsPage.module.scss";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <main>
      <Container>
        <section className={styles.section}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            Selected projects that reflect my frontend and fullstack growth.
          </p>

          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
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
