import { useState } from "react";

function useCounter(intialValue = 0) {
  const [count, setCount] = useState(intialValue);

  const increment = () => setCount(count => count + 1);

  const decrement = () => setCount(count => count - 1);

  return [count, increment, decrement];
}

export default useCounter;
