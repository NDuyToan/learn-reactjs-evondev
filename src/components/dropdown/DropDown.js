import React, { useState, useRef, useEffect } from "react";

const DropDown = () => {
  let [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutSide(e) {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        console.log("click in side");
      } else {
        console.log("click out side");
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  const handleOpenDropDown = () => {
    setShow(!show);
  };

  return (
    <div>
      {/* <h1>DropDown</h1> */}
      <div className="relative inline-block" ref={dropdownRef}>
        <h2
          onClick={handleOpenDropDown}
          className="px-5 py-2 border border-blue-400 w-[300px] cursor-pointer rounded-md"
        >
          Open dropdown
        </h2>
        {show && (
          <div className="border border-blue-300 w-[300px] rounded-md absolute top-full left-0">
            <div className="px-5 py-2 cursor-pointer w-full">JavaScrip</div>
            <div className="px-5 py-2 cursor-pointer w-full">JavaScrip</div>
            <div className="px-5 py-2 cursor-pointer w-full">JavaScrip</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
