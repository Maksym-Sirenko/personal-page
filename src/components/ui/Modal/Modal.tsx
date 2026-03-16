import { useEffect, type ReactNode } from "react";
import clsx from "clsx";
import Portal from "../Portal/Portal";
import Backdrop from "../Backdrop/Backdrop";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import SVGIcon from "../SVGIcon/SVGIcon";
import styles from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

function Modal({ isOpen, onClose, children, className }: ModalProps) {
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <Portal>
      <>
        <Backdrop isVisible={isOpen} onClick={onClose} />
        <div
          className={clsx(styles.modal, isOpen && styles.open, className)}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <SVGIcon name="icon-close" />
          </button>

          <div className={styles.content}>{children}</div>
        </div>
      </>
    </Portal>
  );
}

export default Modal;
