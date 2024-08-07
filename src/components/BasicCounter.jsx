import { useState } from "react";

function BasicCounter() {
  const [count, setCount] = useState(0);

  let stateValue = 0;

  const incrementCount = () => {
    setCount(count + 1);
    stateValue = count + 1;
  };

  return (
    <div>
      <p>Count state value: {count}</p>
      <p>Count variable value: {stateValue}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default BasicCounter;
