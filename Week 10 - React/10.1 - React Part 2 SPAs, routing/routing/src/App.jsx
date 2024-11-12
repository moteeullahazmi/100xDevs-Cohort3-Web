import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="class11" element=<Class11 /> />
          <Route path="class12" element=<Class12 /> />
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
  return (
    <>
      <h1>Class 12</h1>
    </>
  );
}

export default App;
