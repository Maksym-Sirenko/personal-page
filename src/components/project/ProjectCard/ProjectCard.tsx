import type { Project } from "../../../types/project";
import Button from "../../ui/Button/Button";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  project: Project;
  onOpenDetails: (project: Project) => void;
};

function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const previewStack = project.stack.slice(0, 5);

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <p className={styles.category}>{project.category}</p>

        <h2 className={styles.title}>{project.title}</h2>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.stackList}>
          {previewStack.map((tech) => (
            <li key={tech} className={styles.stackItem}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.actions}>
        <Button variant="primary" onClick={() => onOpenDetails(project)}>
          View Details
        </Button>
      </div>
    </article>
  );
}

export default ProjectCard;
