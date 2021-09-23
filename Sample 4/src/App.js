import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [input, setInput] = useState("");
  var [color, setColor] = useState("black");

  return (
    <div className="App">
      <h1>Color Changer App</h1>
      <input onChange={(event) => setInput(event.target.value)} /> <br />
      <br />
      <div style={{ color: color }}>{input}</div>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}
