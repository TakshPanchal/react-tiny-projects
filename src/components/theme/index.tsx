import { useEffect, useState } from "react";
import "./styles.css";
import useLocalStorage from "./useLocalstorage";

const Theme = () => {
  const [darkMode, setDarkMode] = useLocalStorage("theme", "light");

  return (
    <div className="container" data-theme={darkMode}>
      <div className="col">
        <h1>Hello World + {darkMode}</h1>
        <button
          onClick={() =>
            setDarkMode((prev: string) => (prev === "dark" ? "light" : "dark"))
          }
        >
          {darkMode === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Theme;
