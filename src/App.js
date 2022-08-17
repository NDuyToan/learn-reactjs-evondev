import Button from "./components/button/Button";
import React from "react";
import Toggle from "./components/toggle/Toggle";

const App = () => {
  return <div style={{padding: '10px'}}>
    {/* <Toggle /> */}
    <Button> Primary</Button>
    <Button className="button--secondary"> Secondary</Button>
  </div>;
};

export default App;
