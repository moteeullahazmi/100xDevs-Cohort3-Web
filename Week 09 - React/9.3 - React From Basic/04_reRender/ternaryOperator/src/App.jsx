import React from "react";
import { useState } from "react";

export default function App(){
  const [click, setClick] = useState(false);



    function buttonTap(){
      setClick(!click)
    }
      return (
      
         <>
        <button onClick={buttonTap}>Toggle Message</button> 
        {click ? <p></p> : <p>render the calue</p>}
    </>
    )
  
}