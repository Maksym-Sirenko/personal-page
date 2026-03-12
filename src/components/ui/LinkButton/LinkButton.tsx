import type { ReactNode } from "react";
import styles from "./LinkButton.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

type LinkButtonVariant = "primary" | "secondary" | "ghost";

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  className?: string;
};

function LinkButton({
  to,
  children,
  variant = "primary",
  className,
}: LinkButtonProps) {
  return (
    <Link className={clsx(styles.linkButton, styles[variant], className)} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;