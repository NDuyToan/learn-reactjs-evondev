import React, { useState } from "react";
import "./index.scss";

// import Photos2 from "./components/photo/Photos2";
// import Counter from "./components/counter/Counter";
import HackerNew from "./components/news2/HackerNew";
import HackerNewWithHook from "./components/news2/HackerNewWithHook";
import HackerNews from "./components/news/HackerNews";
// import StopWatch from "./components/clock/StopWatch";
// import DropDown from "./components/dropdown/DropDown";
// import Blog2 from "./components/Blog2";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-5">
      {/* <Photos2 /> */}
      {/* <Counter /> */}
      {/* <HackerNew /> */}
      {/* <StopWatch /> */}
      {/* <DropDown /> */}
      {/* <Blog2 /> */}
      <button
        onClick={() => setShow(!show)}
        className="bg-green-500 text-white px-4 py-2 border border-green-200"
      >
        Toggle Button
      </button>
      {/* {show && <HackerNews />} */}
      {show && <HackerNewWithHook />}
      {/* {<HackerNewWithHook />} */}
    </div>
  );
};

export default App;
