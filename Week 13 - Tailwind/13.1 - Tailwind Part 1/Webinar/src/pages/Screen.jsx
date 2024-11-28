import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Screen = () => {
  const naviagte = useNavigate();
    
  return (
    <div>
      <div className="flex  justify-center items-center flex-col text-white bg-[#002A5A] h-screen">
        <h1 className="text-3xl m-4 ">Webinar.gg</h1>

        <h2 className="text-xl p-4">Veryify Your Age</h2>
        <p className="m-2">Please confirm your birth year. This data will not be stored.</p>
        <input className="m-2 block text-gray-700 mb-2 border rounded px-4 py-2" type="date" name="" id="" placeholder="Your birth Year" />
        <button onClick={()=> naviagte("/email")} className="hover:bg-sky-700 m-2 border rounded px-4 py-2">Continue</button>
      </div>
    </div>
  );
};

export default Screen;
