import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  to?: string;
  href?: string;
  onClick?: () => void;
};

function Button({ children, variant = "primary", to, href, onClick }: ButtonProps) {
  const className = clsx(styles.button, styles[variant]);

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
