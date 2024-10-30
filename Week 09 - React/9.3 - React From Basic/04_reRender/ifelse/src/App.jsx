import React from "react";
import { useState } from "react";

export default function App(){
  const [click, setClick] = useState(false);

  let message;
  if (click) {
    message = <p>This message is conditionally rendered!</p>;
  } else {
    message = <p></p>;
  }

    function buttonTap(){
      setClick(!click)
    }
      return(
      
         <>
      <button onClick={buttonTap}>Toggle Message</button> 
    {message}
    </>
    
     
    )
  }
