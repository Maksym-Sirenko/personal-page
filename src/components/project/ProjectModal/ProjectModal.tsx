import type { Project } from "../../../types/project";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import styles from "./ProjectModal.module.scss";
import { useOutletContext } from "react-router-dom";
import { translations, type Language } from "../../../i18n/translations";

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language].projects;

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <p className={styles.category}>{project.category}</p>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>{t.techStack}</h3>
          <ul className={styles.stackList}>
            {project.stack.map((item) => (
              <li key={item} className={styles.stackItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>{t.responsibilities}</h3>
          <ul className={styles.responsibilitiesList}>
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <Button href={project.liveDemo} variant="primary">
            {t.liveDemo}
          </Button>

          <Button href={project.github} variant="secondary">
            {t.github}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;
