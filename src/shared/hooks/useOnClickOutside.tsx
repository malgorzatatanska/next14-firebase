import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: TouchEvent | MouseEvent) => {
      if (
        ref === null ||
        ref.current === null ||
        !ref.current ||
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
