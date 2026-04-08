import { useEffect, useId, useRef, type ReactNode } from "react";
import clsx from "clsx";
import Portal from "../Portal/Portal";
import Backdrop from "../Backdrop/Backdrop";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import SVGIcon from "../SVGIcon/SVGIcon";
import { siteContent, type Language } from "../../../i18n/siteContent";
import styles from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  language?: Language;
  titleId?: string;
};

function Modal({
  isOpen,
  onClose,
  children,
  className,
  language = "en",
  titleId,
}: ModalProps) {
  useLockBodyScroll(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);
  const fallbackTitleId = useId();
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const t = siteContent[language].ui;

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

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    modalRef.current?.focus();

    return () => {
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <Portal>
      <>
        <Backdrop isVisible={isOpen} onClick={onClose} />
        <div
          ref={modalRef}
          className={clsx(styles.modal, isOpen && styles.open, className)}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          aria-label={titleId ? undefined : t.modalLabel}
          aria-labelledby={titleId ?? fallbackTitleId}
          tabIndex={-1}
        >
          {!titleId && (
            <span id={fallbackTitleId} className={styles.visuallyHidden}>
              {t.modalLabel}
            </span>
          )}
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label={t.closeModal}
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
