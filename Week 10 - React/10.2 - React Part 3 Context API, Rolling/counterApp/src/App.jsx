import React, { createContext, useContext, useState } from "react";

const BulbContext = createContext();

// Wrapper component
function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(false);

 return <BulbContext.Provider
    value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn,
    }}
  >
    {children}
  </BulbContext.Provider>;
}

const App = () => {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
};

function Light() {
  return (
    <>
      <LightBulb />
      <LightSwitch />
    </>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb  On" : "Bulb Off"}</div>;
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function ToggleOn() {
    setBulbOn(!bulbOn);
  }
  return (
    <div>
      <button onClick={ToggleOn}>Toggle Light</button>
    </div>
  );
}

export default App;
