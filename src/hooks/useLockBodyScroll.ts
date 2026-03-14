import { useEffect } from "react";

function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = isLocked ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
}

export default useLockBodyScroll;