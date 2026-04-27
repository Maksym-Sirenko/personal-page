import type { Project } from "../../../types/project";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import styles from "./ProjectModal.module.scss";
import { useOutletContext } from "react-router-dom";
import { siteContent, type Language } from "../../../i18n/siteContent";

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language } = useOutletContext<{ language: Language }>();
  const t = siteContent[language].projects;

  if (!project) return null;

  const modalImages = [project.coverImage, ...(project.galleryImages ?? [])].filter(
    (image): image is string => Boolean(image)
  );
  const primaryImageSize =
    modalImages[0] === project.coverImage ? project.coverImageSize : undefined;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      language={language}
      titleId={`project-modal-title-${project.id}`}
    >
      <div className={styles.wrapper}>
        <p className={styles.category}>{project.category[language]}</p>
        <h2 id={`project-modal-title-${project.id}`} className={styles.title}>
          {project.title[language]}
        </h2>
        <p className={styles.description}>{project.description[language]}</p>

        {modalImages.length > 0 && (
          <div className={styles.gallery}>
            <div className={styles.primaryImageWrap}>
              <img
                src={modalImages[0]}
                alt={`${project.title[language]} preview`}
                className={styles.primaryImage}
                width={primaryImageSize?.width}
                height={primaryImageSize?.height}
                decoding="async"
              />
            </div>

            {modalImages.length > 1 && (
              <div className={styles.galleryGrid}>
                {modalImages.slice(1).map((image, index) => (
                  <div key={image} className={styles.galleryItem}>
                    <img
                      src={image}
                      alt={`${project.title[language]} screen ${index + 2}`}
                      className={styles.galleryImage}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

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
            {project.responsibilities[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <Button href={project.liveDemo} variant="primary" className={styles.actionButton}>
            {t.liveDemo}
          </Button>

          <Button href={project.github} variant="secondary" className={styles.actionButton}>
            {t.github}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;
