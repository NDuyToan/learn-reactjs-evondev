import "./Button.scss";

import React from "react";

// import styles from "./Button.module.css";
// styled-components
const Button = (props) => {
  return (
    <button className={`button ${props.className || ''}`}
     
    >
      {props.children}
    </button>
  );
};

export default Button;
