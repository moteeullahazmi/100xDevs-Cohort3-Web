import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // Timer ka state
  const [runningTime, setRunningTime] = useState(0); // Timer ke liye state

  // Timer function jo running time ko increment karega
  function timer() {
    setRunningTime((prev) => prev + 1); // Increment running time
  }

  // useEffect to manage timer
  useEffect(() => {
    let interval; // Interval variable
    if (isRunning) {
      interval = setInterval(timer, 1000); // Timer set
    }
    return () => clearInterval(interval); // Cleanup function
  }, [isRunning]); // isRunning par depend karega

  return (
    <>  
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Increment</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
      
      <h1>Running Time: {runningTime} seconds</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"} Timer
      </button>
    </>
  );
}
