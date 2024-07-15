import { useMemo, useState } from "react";

function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

// eslint-disable-next-line react/prop-types
function ContentPage() {
  const [userInput, setUserInput] = useState(10);

  const allPrimes = useMemo(() => {
    const result = [];
    console.log("expensive calc");
    for (let counter = 2; counter < userInput; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }

    return result;
  }, [userInput]);

  return (
    <div>
      <input
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>Result: {allPrimes.join(", ")}</p>
    </div>
  );
}

export default ContentPage;
