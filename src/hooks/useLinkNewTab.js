import { useRef, useEffect } from "react";

export default function useOpenLinkNewTab() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef) {
      const links = contentRef.current.querySelectorAll("a");

      links.forEach((element) => {
        element.setAttribute("target", "_blank");
      });
    }

    return () => {};
  }, []);
  return {
    contentRef,
  };
}
