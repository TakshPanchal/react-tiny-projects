import React, { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(
  key: string,
  defaultValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [val, setVal] = useState(() => {
    let val = String(defaultValue);
    try {
      val = localStorage.getItem(key) || String(defaultValue);
    } catch (error) {
      console.log(error);
    }
    return val;
  });

  useEffect(() => {
    localStorage.setItem(key, val);
  }, [key, val]);

  return [val, setVal];
}
