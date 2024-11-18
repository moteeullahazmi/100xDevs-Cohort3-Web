import React, { useEffect, useState, memo } from 'react';


const App = () => {
  const [count,setCount] = useState(0);
  
  useEffect(()=>{
    setInterval(() => {
      setCount(count+1)
    }, 3000);
  },[count])

  

  return (
    <div>
      <Counter/>
      
      
    </div>
  )
}

const Counter = memo(function (){
  return <div>
    <Output/>
    <Increase/>
    <Decrease/>
  </div>
})

const Output = memo(function(){
  return <div>
    count
  </div>
})

const Increase = memo(function (){
  return <div>
    increase
  </div>
}
)
const Decrease =memo(function  (){
  return <>
    decrease
  </>
})

export default App
