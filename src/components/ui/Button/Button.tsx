import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
    href?: never;
  };

type RouterLinkProps = BaseProps & {
  to: string;
  href?: never;
  onClick?: () => void;
};

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: never;
  };

type ButtonProps = NativeButtonProps | RouterLinkProps | AnchorProps;

function isRouterLinkProps(props: ButtonProps): props is RouterLinkProps {
  return "to" in props && typeof props.to === "string";
}

function isAnchorProps(props: ButtonProps): props is AnchorProps {
  return "href" in props && typeof props.href === "string";
}

function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props;

  const buttonClassName = clsx(styles.button, styles[variant], className);

  if (isRouterLinkProps(props)) {
    return (
      <Link to={props.to} className={buttonClassName} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  if (isAnchorProps(props)) {
    const { href, onClick, target, rel, download } = props;

    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? (target === "_self" || download ? undefined : "noopener noreferrer")}
        className={buttonClassName}
        onClick={onClick}
        download={download}
      >
        {children}
      </a>
    );
  }

  const buttonProps = { ...props };
  delete buttonProps.className;
  delete buttonProps.variant;
  delete buttonProps.children;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={buttonClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
