import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [input, setInput] = useState("");
  var [FontType, setFontType] = useState("h4");

  function h1Handler() {
    setFontType("h1");
  }

  function h2Handler() {
    setFontType("h2");
  }

  function h3Handler() {
    setFontType("h3");
  }

  return (
    <div className="App">
      <h1>H1, H2, H3 Font Changer</h1>
      <input onChange={(e) => setInput(e.target.value)} /> <br />
      <br />
      <FontType>{input}</FontType> <br />
      <button onClick={h1Handler}>h1</button>
      <button onClick={h2Handler}>h2</button>
      <button onClick={h3Handler}>h3</button>
    </div>
  );
}
