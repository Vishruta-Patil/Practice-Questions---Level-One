import "./styles.css";
import { useState } from "react";

export default function App() {
  var [input, setInput] = useState("");
  var [fontSize, setfontSize] = useState(25);

  function increaseFontHandler() {
    setfontSize(35);
  }

  function decreaseFontHandler() {
    setfontSize(15);
  }

  return (
    <div className="App">
      <h1>Increase/Decrease Font Size</h1>
      <input onChange={(e) => setInput(e.target.value)} /> <br />
      <div style={{ fontSize: fontSize }}>{input}</div>
      <div>
        <button onClick={increaseFontHandler}>+</button>
        <button onClick={decreaseFontHandler}>-</button>
      </div>
    </div>
  );
}
