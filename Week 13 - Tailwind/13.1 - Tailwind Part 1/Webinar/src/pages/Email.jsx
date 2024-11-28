import React, { useState } from "react";



const Email = () => {

    
  return (
    <div>
      <div className="flex  justify-center items-center flex-col text-white bg-[#002A5A] h-screen">
        <h1 className="text-3xl m-4 ">Webinar.gg</h1>

       
        <p className="m-2">Enter your email.</p>
        <input className="m-2 block text-gray-700 mb-2 border rounded px-4 py-2" type="email" name="" id="" placeholder="enter your email" />
        <button className="hover:bg-sky-700 m-2 border rounded px-4 py-2">Continue</button>
      </div>
    </div>
  );
};

export default Email;
