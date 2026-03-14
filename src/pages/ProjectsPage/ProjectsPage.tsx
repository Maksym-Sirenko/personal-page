import { useState } from "react";
import Container from "../../components/ui/Container/Container";
import ProjectCard from "../../components/project/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import type { Project } from "../../types/project";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <main>
      <Container>
        <section>
          <h1>Projects</h1>
          <p>Selected projects that reflect my frontend and fullstack growth.</p>

          <div
            style={{
              display: "grid",
              gap: "20px",
              marginTop: "24px",
            }}
          >
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export default ProjectsPage;