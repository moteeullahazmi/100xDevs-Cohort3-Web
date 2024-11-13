import React, { useRef, useState } from 'react'

const App = () => {
  // a clock start and stop

  const [currentCount, setcurrentCount] = useState(0);
  const timer = useRef();



  function  startTimer(){
   let value= setInterval(function () {
      setcurrentCount(c=> c +  1)
    }, 1000);
    timer.current=value;
  }

  function stopTimer(){
    console.log("stop")
    clearInterval(timer.current);
  }


  return (
    <div>
    <h1>{currentCount}</h1>
      <button  onClick={startTimer}>Start</button>
      <button  onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default App
