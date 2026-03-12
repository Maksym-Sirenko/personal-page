import type { ReactNode } from "react";
import clsx from "clsx";
import Backdrop from "../Backdrop/Backdrop";
import Portal from "../Portal/Portal";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import styles from "./Drawer.module.scss";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

function Drawer({ isOpen, onClose, children, className }: DrawerProps) {
  useLockBodyScroll(isOpen);

  return (
    <Portal>
      <>
        <Backdrop isVisible={isOpen} onClick={onClose} />
        <div
          className={clsx(styles.drawer, isOpen && styles.open, className)}
          aria-hidden={!isOpen}
        >
          {children}
        </div>
      </>
    </Portal>
  );
}

export default Drawer;