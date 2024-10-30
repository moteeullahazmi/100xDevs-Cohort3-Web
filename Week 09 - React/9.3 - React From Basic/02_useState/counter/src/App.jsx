import React, { useState } from "react";

function App(){
  const [count, setCount] = useState(1)

  function countFn(){
    setCount(azmi=>
    azmi+1
    );
  }

  return (
  <>
  <h1>Counter</h1>
  <button onClick={countFn}>{count}</button>
  </>
  )
}

export default App;