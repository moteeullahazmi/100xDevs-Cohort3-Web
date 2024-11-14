import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Link to="/">Home</Link> | 
      <Link to="/class11">Class 11</Link> | 
      <Link to="/class12">Class 12</Link> | 
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/class11" element=<Class11 /> />
          <Route path="/class12" element=<Class12 /> />
          <Route path="/*" element=<ErrorPage/>></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

// Class 11
function Class11() {
  return (
    <>
      <h1>Class 11</h1>
    </>
  );
}

// Class 12
function Class12() {
  const navigate = useNavigate();
  function goback(){
    return (
      navigate('/')
    )
  }
  return (
    <>
      <h1>Class 12</h1>
      <button onClick={goback}>go back</button>
    </>
  );
}

function ErrorPage(){
  const navigate = useNavigate();
  function goback(){
    return (
      navigate('/')
    )
  }
return (
  <div>
    <h1>Page Not Found</h1>
    <button onClick={goback}>Go back Home Page</button>
  </div>
)
}

export default App;
