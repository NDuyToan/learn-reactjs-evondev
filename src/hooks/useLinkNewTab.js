import React, { useRef, useEffect } from "react";

export default function useOpenLinkNewTab() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef) {
      console.log("ref", contentRef);
      const links = contentRef.current.querySelectorAll("a");
      console.log("link", links);
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
