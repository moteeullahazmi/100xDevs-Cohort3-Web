import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  
  let azmi = typeof count === "string";
  console.log(azmi);
  function increament (){
    let azmi ="number"
     if (typeof count === "string") {
      setCount(1); // Reset to 1
    } else {
      setCount( count + 1); // Increment the count
    }}

  function decreament(){
    if(count>0){
       setCount(count - 1);
    }
    else{
      setCount("Not value go after zero ")
    }
   
  }
  
  function reset(){
    setCount(0)
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreament</button>
      <button onClick={reset}>Clear</button>
    </>
  );
}

export default App
