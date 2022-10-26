import React, { useState, useRef } from "react";

const StopWatch = () => {
  let [counter, setCounter] = useState(0);
  const timer = useRef(null);

  // const timer = setInterval(() => {
  //   setCounter(counter++);
  // }, 1000);

  const handleStart = () => {
    console.log("timer", timer.current);
    if (timer.current) return;
    timer.current = setInterval(() => {
      setCounter((preCounter) => preCounter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };
  console.log("render");

  return (
    <div>
      <h2>Stop Watch</h2>
      <h5>Timer: {counter} s</h5>
      <button
        onClick={handleStart}
        className="px-5 py-2 bg-green-500 text-white m-3"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="px-5 py-2 bg-purple-500 text-white"
      >
        Stop
      </button>
    </div>
  );
};

export default StopWatch;
