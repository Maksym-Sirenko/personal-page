import type { Project } from "../../../types/project";
import Button from "../../ui/Button/Button";
import styles from "./ProjectCard.module.scss";
import { useOutletContext } from "react-router-dom";
import { translations, type Language } from "../../../i18n/translations";

type ProjectCardProps = {
  project: Project;
  onOpenDetails: (project: Project) => void;
};

function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const previewStack = project.stack.slice(0, 5);

  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language].projects;

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
  {t.viewDetails}
</Button>
      </div>
    </article>
  );
}

export default ProjectCard;
