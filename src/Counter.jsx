import { useState } from "react";
import Logo from "./Logo";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Logo />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default Counter;
