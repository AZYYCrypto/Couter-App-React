import { useState } from "react";

const BasicCounterApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        type="click"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        type="click"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default BasicCounterApp;
