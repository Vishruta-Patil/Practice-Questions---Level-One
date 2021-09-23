import "./styles.css";
import { useState } from "react";

export default function App() {
  var [num1,setNum1] = useState("");
  var [num2,setNum2] = useState("");
  var [result,setResult] = useState("");

  function num1handler(event) {
    num1 = event.target.value;
    setNum1(num1);
  }

  function num2Handler(event) {
    num2 = event.target.value;
    setNum2(num2);
  }

  function addHandler() {
    setResult(parseFloat(num1) + parseFloat(num2));
  }

  function subHandler() {
    setResult(parseFloat(num1) - parseFloat(num2));
  }

  function multiplyHandler() {
    setResult(parseFloat(num1) * parseFloat(num2));
  }

  function divisionHandler() {
    setResult(parseFloat(num1) / parseFloat(num2));
  }


  return (
    <div className="App">
      <h1>Calculator</h1>
      <input onChange={num1handler} /> <br/>
      <input onChange={num2Handler} /> <br/>
      <div>{result}</div>
      <div>
        <button onClick={addHandler}>+</button>
        <button onClick={subHandler}>-</button>
        <button onClick={multiplyHandler}>*</button>
        <button onClick={divisionHandler}>/</button>
      </div>
    </div>
  );
}
