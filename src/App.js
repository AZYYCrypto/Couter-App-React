import "./App.css";
import React, { useState } from "react";

function App() {
  const [Counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button
        type="click"
        onClick={() => {
          setCounter(Counter - 1);
        }}
      >
        -
      </button>
      <p>{Counter}</p>
      <button
        type="click"
        onClick={() => {
          setCounter(Counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
