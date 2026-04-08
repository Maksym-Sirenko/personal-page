import { useEffect, useRef, type ReactNode } from "react";
import clsx from "clsx";
import Backdrop from "../Backdrop/Backdrop";
import Portal from "../Portal/Portal";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import { siteContent, type Language } from "../../../i18n/siteContent";
import styles from "./Drawer.module.scss";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  language?: Language;
};

function Drawer({
  isOpen,
  onClose,
  children,
  className,
  language = "en",
}: DrawerProps) {
  useLockBodyScroll(isOpen);
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const t = siteContent[language].ui;

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    drawerRef.current?.focus();
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <Portal>
      <>
        <Backdrop isVisible={isOpen} onClick={onClose} />
        <div
          ref={drawerRef}
          className={clsx(styles.drawer, isOpen && styles.open, className)}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          aria-label={t.navigationLabel}
          tabIndex={-1}
        >
          {children}
        </div>
      </>
    </Portal>
  );
}

export default Drawer;
