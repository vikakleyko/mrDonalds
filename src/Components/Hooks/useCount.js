import { useState } from "react";

export function useCount(openItem, isEdit) {
  const amount = isEdit ? openItem.count : 1;

  const [count, setCount] = useState(amount);

  const onChange = (e) => setCount(e.target.value);

  return { count, setCount, onChange };
}
