import React from "react";
import useOpenLinkNewTab from "../hooks/useLinkNewTab";
import useHover from "../hooks/useHover";

const Blog2 = () => {
  // const contentRef = useRef(null);
  const { contentRef } = useOpenLinkNewTab();
  const { hovered, elementRef } = useHover();

  // useEffect(() => {
  //   if (contentRef) {
  //     const links = contentRef.current.querySelectorAll("a");
  //     console.log("link", links);
  //     links.forEach((element) => {
  //       element.setAttribute("target", "_blank");
  //     });
  //   }

  //   return () => {};
  // }, []);

  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
        distinctio ipsa corrupti rerum aliquid soluta commodi, iure doloribus
        obcaecati placeat error porro quidem nulla voluptatum tempore.
        Voluptate, saepe{" "}
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}  `}
          ref={elementRef}
        >
          google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
        distinctio ipsa{" "}
        <a href="https://google.com" className="underline">
          google.com
        </a>{" "}
        rerum aliquid soluta commodi, iure doloribus obcaecati placeat error
        porro quidem nulla voluptatum tempore. Voluptate, saepe suscipit?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste deleniti
        distinctio ipsa corrupti rerum aliquid soluta commodi, iure doloribus
        obcaecati{" "}
        <a href="https://google.com" className="underline">
          google.com
        </a>{" "}
        error porro quidem nulla voluptatum tempore. Voluptate, saepe suscipit?
      </p>
    </div>
  );
};

export default Blog2;
