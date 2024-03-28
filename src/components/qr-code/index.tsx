import { useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";

const QRDisplay = () => {
  const [text, setText] = useState("");
  const [qrValue, setQRValue] = useState("");

  const handleQRGenerate = () => {
    setQRValue(text);
    setText("");
  };
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div className="form">
        <input
          type="text"
          name="qr-code"
          placeholder="Enter value for QR Generator"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleQRGenerate}>Generate</button>
      </div>
      <QRCode value={qrValue} style={{ "margin-top": "10px" }} />
    </div>
  );
};

export default QRDisplay;
