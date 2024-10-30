import React from "react";
import { useState } from "react";

export default function App(){
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  

  const blue = function() {
    setCar(azmi => {
      return { ...azmi, color: "blue" }
    });
  }


  return(
    <>
    <h1>My {car.brand}</h1>
    <p>It is {car.color} {car.model} from {car.year}</p>

    <button onClick={blue}>blue</button>

    </>
  )
}