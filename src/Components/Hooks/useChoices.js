import { useState } from "react";

export function useChoices() {
  const [choice, setChoice] = useState();

  function changeChoice(e) {
    setChoice(e.target.value);
  }

  return { choice, changeChoice };
}
