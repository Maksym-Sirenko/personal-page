import clsx from "clsx";
import styles from "./Backdrop.module.scss";

type BackdropProps = {
  isVisible: boolean;
  onClick?: () => void;
  className?: string;
};

function Backdrop({ isVisible, onClick, className }: BackdropProps) {
  return (
    <div
      className={clsx(
        styles.backdrop,
        isVisible && styles.visible,
        className
      )}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

export default Backdrop;
