import React from "react";
import Button from "./compoents/Button";
import Input from "./compoents/Input";
import Otp from "./compoents/Otp";

const App = () => {
  return (
    <div className="h-screen bg-blue-700 ">
      <br /><br /><br />
      {/* <Input type="text" placeholder="Username"></Input>
      <Button disabled={false}> Singup </Button> */}
      <Otp/>
    </div>
  );
};

export default App;
