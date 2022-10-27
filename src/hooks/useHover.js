import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    //mouseover
    //mouseout
    console.log("elementRef", elementRef.current);
    function handleMouseOver() {
      setHovered(true);
    }

    function handleMouseOut() {
      setHovered(false);
    }
    if (elementRef.current) {
      elementRef.current.addEventListener("mouseover", handleMouseOver);
      elementRef.current.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener("mouseover", handleMouseOver);
        elementRef.current.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  return {
    hovered,
    elementRef,
  };
}
