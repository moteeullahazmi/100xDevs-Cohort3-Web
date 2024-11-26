import React from 'react'

const App = () => {
  return (
    <div  style={{height:"1024px", width:"1440px", backgroundColor: "#FDECD7"}} >
      <div
      style={{ display:'flex', justifyContent:"space-around", alignItems:"center" , height:"126px", width:"1440px", backgroundColor: "#F8B579"}}
      >
      <h1 style={{}}
      >BIMAL</h1>
      <div style={{display:'flex', flexDirection:"row"}} >
        <ul style={{display:'flex', justifyItems:'center', gap:"40px", listStyle:'none'}   }>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <button style={{margin:" 0px 0px 0px 10px"}}>Buy Now</button>
        
      </div>

      </div>
    </div>
  )
}

export default App
