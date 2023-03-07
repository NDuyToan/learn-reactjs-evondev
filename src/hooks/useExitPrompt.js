import { useState, useEffect } from "react";

const initBeforeUnLoad = (showExitPrompt) => {
  window.onbeforeunload = (event) => {
    if (showExitPrompt) {
      const e = event || window.event;
      e.preventDefault();
      console.log("showExitPrompt", showExitPrompt);
      console.log("e", e);
      if (e) {
        e.returnValue = "";
      }
      return "";
    }
  };
};

// Hook
export default function useExitPrompt(bool) {
  const [showExitPrompt, setShowExitPrompt] = useState(bool);

  window.onload = function () {
    initBeforeUnLoad(showExitPrompt);
  };

  useEffect(() => {
    initBeforeUnLoad(showExitPrompt);
  }, [showExitPrompt]);

  return [showExitPrompt, setShowExitPrompt];
}
