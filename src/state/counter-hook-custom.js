import React, { useState } from "react";
import useCounter from "./use-counter";

function Counter() {
  const [count, increment, decrement] = useCounter();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}> - </button>
      <button onClick={decrement}> + </button>
    </>
  );
}

export default Counter;
