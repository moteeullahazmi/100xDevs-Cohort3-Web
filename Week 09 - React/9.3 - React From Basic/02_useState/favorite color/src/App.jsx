import React, { useState } from "react";

export default function App(){
  const [color, setColor] = useState("blue");

  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button onClick={() => {setColor("blue");}}>Blue</button>
      <button onClick={() => {setColor("red");}}>Red</button>
      <button onClick={() => {setColor("pink");}}>pink</button>
      <button onClick={() => {setColor("green");}}>green</button>
    </>
  );
}