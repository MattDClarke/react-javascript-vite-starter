import { useState } from "react";
import Number from "./Number";

function Counter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const onClick = (n) => {
    setNumber(n);
  };

  // fix
  // const onClick = useCallback(
  //   (number) => {
  //     setNumber(number);
  //   },
  //   [setNumber]
  // );

  return (
    <div
      style={{
        border: "3px solid #37afa9",
        background: "#37afa9",
        fontWeight: "bold",
        borderRadius: "10px",
        width: "400px",
      }}
    >
      <h3>
        <u>Parent</u>
      </h3>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((count) => count + 1)}
        style={{
          background: "#37afa9",
          marginBottom: "20px",
          border: "2px solid black",
        }}
      >
        Increment
      </button>
      <Number setNumber={onClick} />
      <p>Number: {number}</p>
    </div>
  );
}

export default Counter;
