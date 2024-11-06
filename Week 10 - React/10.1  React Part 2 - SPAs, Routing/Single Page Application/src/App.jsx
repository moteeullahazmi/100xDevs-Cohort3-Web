import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  
  
  return (
    <div>
    
    <BrowserRouter >
    <Link to={"/"}>Home</Link>
    <Link to={"/class11"}>Class 11</Link>
    <Link to={"/class12"}>Class 12</Link>
      <Routes>
        <Route path="/class11" element={<Class11/>} />
        <Route path="/class12" element={<Class12/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

function Home(){
  return(
    <>
      <h1>Home</h1>
    </>
  )
}

function Class11(){
  return (
    <>
      <h1>Class11</h1>
    </>
  )
}



function Class12() {
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }
  return(
    <>
      <h1>Class 12</h1>
      <button onClick={redirectUser}> Go back </button>
    </>
  )
}

export default App;
