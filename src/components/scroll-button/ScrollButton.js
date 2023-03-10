import React, { useState, useEffect } from "react";
import { IMAGES } from "../../themes/images";
import "./ScrollButton.scss";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const handleGotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <>
      {visible && (
        <div className="btn-go-top" onClick={handleGotoTop}>
          <img src={IMAGES.go_top} alt="" />
        </div>
      )}
    </>
  );
};

export default ScrollButton;
