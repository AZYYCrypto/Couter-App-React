import { useState } from "react";
const initialState = 0;
const BasicCounterApp = () => {
  const [counter, setCounter] = useState(initialState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
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
      <button
        type="click"
        onClick={() => {
          setCounter(initialState);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default BasicCounterApp;
