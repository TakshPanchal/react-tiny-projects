import { useState } from "react";
import "./styles.css";

const getRGBString = (color) => `rgb(${color[0]},${color[1]},${color[2]})`;
const getHexString = (color) => {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const [r, g, b] = color;

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const RandomColor = () => {
  const [hexOrRGB, setHexOrRGB] = useState(true);
  const [color, setColor] = useState([255, 255, 255]);
  const colorString = hexOrRGB ? getHexString(color) : getRGBString(color);

  const generateColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor([r, g, b]);
  };

  return (
    <div
      className="container"
      style={{
        background: colorString,
      }}
    >
      <div className="btn-bar">
        <button className="btn" onClick={() => setHexOrRGB(true)}>
          HEX Color
        </button>
        <button className="btn" onClick={() => setHexOrRGB(false)}>
          RGB Color
        </button>
        <button className="btn" onClick={generateColor}>
          Generate Random Color
        </button>
      </div>
      <div className="color-text">
        <h1> {colorString}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
