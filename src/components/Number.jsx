import { memo } from "react";

function _Number(props) {
  const array = new Uint32Array(5000);
  for (const _ of Array(10000).fill(0)) {
    crypto.getRandomValues(array);
  }
  const number = array[0];

  return (
    <div
      style={{
        border: "3px solid #febc38",
        background: "#febc38",
        borderRadius: "10px",
        margin: "0 1rem",
      }}
    >
      <h3>
        <u>Child</u>
      </h3>
      <button
        onClick={() => {
          props.setNumber(number);
        }}
        style={{
          background: "#febc38",
          border: "2px solid black",
          marginBottom: "10px",
        }}
      >
        Set number to large <br />
        random number: {number}
      </button>
    </div>
  );
}

const Number = memo(_Number);

export default Number;
