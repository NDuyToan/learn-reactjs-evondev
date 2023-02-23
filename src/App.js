import React from "react";
import SignUpForm from "./components/form/SignUpForm";
import SignUpFormV2 from "./components/form/SignUpFormV2";

import "./index.scss";

const App = () => {
  return (
    <div className="p-5">
      {/* <SignUpForm /> */}
      <SignUpFormV2 />
    </div>
  );
};

export default App;
