import { useState } from 'react'

function App() {
  const [age, setAge] = useState(24)
  const [name, setName] = useState("")

  function nameChange(e){
    setName(e.target.value)
  }

  function ageChange() {
  setAge( age+1);
  }

  return (
    <>
      <input 
      type='name'
      value={name} 
      placeholder='what is your name' 
      onChange={nameChange}

      /><br/>
      <button onClick={ageChange}>increase age</button>


      <h1>My name is { name } and my age is {age}</h1>
  
    </>
  );
}

export default App
