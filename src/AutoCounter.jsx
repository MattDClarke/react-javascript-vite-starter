import { useEffect, useState } from "react";

function AutoCounter() {
  const [countVal, setCountVal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountVal((countVal) => countVal + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>countVal is {countVal}</div>;
}

export default AutoCounter;
