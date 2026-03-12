import clsx from "clsx";
import styles from "./SVGIcon.module.scss";

type SVGIconProps = {
  name: string;
  className?: string;
};

function SVGIcon({ name, className }: SVGIconProps) {
  return (
    <svg className={clsx(styles.icon, className)} aria-hidden="true">
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}

export default SVGIcon;