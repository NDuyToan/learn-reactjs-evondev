import React from "react";
import "./index.scss";

// import Photos2 from "./components/photo/Photos2";
// import Counter from "./components/counter/Counter";
// import HackerNew from "./components/news2/HackerNew";
import StopWatch from "./components/clock/StopWatch";

const App = () => {
  return (
    <div style={{ padding: "10px", backgroundColor: "#eee", height: "1000px" }}>
      {/* <Photos2 /> */}
      {/* <Counter /> */}
      {/* <HackerNew /> */}
      <StopWatch />
    </div>
  );
};

export default App;
