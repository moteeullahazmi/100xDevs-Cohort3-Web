import React, { useState } from 'react'

const App = () => {
  return (
    <div>
      <Light/>
    </div>
  )
}

function Light(){
  const [BulbOn, setBulbOn] = useState(true);
  return <div>
    <BulbOnButton BulbOn={BulbOn}/>
    <ToggleOnButton  BulbOn={BulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function BulbOnButton({BulbOn}){
  

  
  return <div>
    {BulbOn ? "Bulb On " : "Bulb Off "}
    
  </div>
}

function ToggleOnButton({setBulbOn,BulbOn}){
  function changeToggle(){
    setBulbOn(!BulbOn)
  }
return <div>
  <button onClick={changeToggle}>Toggle Change</button>
</div>
}

export default App
