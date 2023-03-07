// import useExitPrompt from "./useExitPrompt.js";
import { useEffect } from "react";
import useExitPrompt from "../../hooks/useExitPrompt";
import Haha from "./Haha";

export default function MyComponent() {
  const [showExitPrompt, setShowExitPrompt] = useExitPrompt(true);

  const handleClick = (e) => {
    e.preventDefault();
    setShowExitPrompt(!showExitPrompt);
  };

  //NOTE: this similar to componentWillUnmount()
  useEffect(() => {
    return () => {
      setShowExitPrompt(true);
    };
  }, []);

  return (
    <div className="App">
      <form>{/*Your code*/}</form>
      <button onClick={handleClick}>Show/Hide the prompt</button>
      <Haha setShowExitPrompt={setShowExitPrompt} />
    </div>
  );
}
