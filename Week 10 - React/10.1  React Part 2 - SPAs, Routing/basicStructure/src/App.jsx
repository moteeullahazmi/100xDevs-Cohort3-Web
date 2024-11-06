import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
 
  )
}



export default App
