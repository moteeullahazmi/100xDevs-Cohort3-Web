import { useState } from "react";

function CounterApp() {
 const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}

export default CounterApp
