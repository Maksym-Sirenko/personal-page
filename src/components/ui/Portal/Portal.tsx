import { createPortal } from "react-dom";
import type { ReactNode } from "react";

type PortalProps = {
  children: ReactNode;
};

function Portal({ children }: PortalProps) {
  return createPortal(children, document.body);
}

export default Portal;