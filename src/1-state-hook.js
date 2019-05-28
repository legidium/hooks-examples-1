import React, { useState } from "react";

function Counter({ color }) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count => count + 1);
  }

  function handleDecrement() {
    setCount(count => count - 1);
  }

  return (
    <div>
      <h1 style={{ color }}>{count}</h1>
      <button onClick={handleDecrement}>{" - "}</button>
      <button onClick={handleIncrement}>{" + "}</button>
    </div>
  );
}

export default Counter;
