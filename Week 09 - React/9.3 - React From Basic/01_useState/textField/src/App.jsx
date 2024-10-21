import { useState } from "react";

useState
function App(){
  const [text,setText] = useState("Enter your Name")

  function changeText(e){
    setText(e.target.value)
  }
  function resetText(){
    setText("hello")
  }

  return (
    <>
      <input onChange={changeText}></input> <button onClick={resetText} >Reset Name</button>
      <h1>You typed : {text}</h1>
    </>
  )
}
export default App