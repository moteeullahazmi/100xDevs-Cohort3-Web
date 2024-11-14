import React from 'react'
import {
  BrowserRouter,Routes, Route,Link, Outlet
} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
        <Route path='/' element=<Layout/>>
        <Route path='/' element=<Home/>/>
          <Route path='/Class11' element=<Class11/>/>
          <Route path='/Class12' element=<Class12/>/>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout(){
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function Header(){
  return <div>
    
    <Link to="/">Home</Link>
      <Link to="/Class11">Class 11</Link>
      <Link to="/Class12">Class 12</Link>
  </div>
}

function Footer(){
  return <div>
    
    <Link to="/">Home</Link>
      <Link to="/Class11">Class 11</Link>
      <Link to="/Class12">Class 12</Link>
  </div>
}
function Home(){
  return(
    <h1>Home</h1>
  )
}
function Class11(){
  return(
    <h1>Class 11</h1>
  )
}

function Class12(){
  return(
    <h1>Class 12</h1>
  )
}

export default App
