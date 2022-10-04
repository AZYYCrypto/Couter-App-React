import { useState } from "react";

const FirstAppWithState = () => {
  const [isLit, setLit] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        width: "45%",
      }}
    >
      <h1>This is the room</h1>
      The Room is {isLit ? "white" : "dark"}
      <br />
      <button
        onClick={() => setLit(!isLit)}
        style={{ width: "100px", marginTop: "1rem" }}
      >
        flip
      </button>
    </div>
  );
};

export default FirstAppWithState;
