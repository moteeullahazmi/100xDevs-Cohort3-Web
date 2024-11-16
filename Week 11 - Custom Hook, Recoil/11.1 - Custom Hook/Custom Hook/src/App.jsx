import  { useEffect, useState } from 'react';
import { useFetchDataDummy } from './hook/useFetchDataDummy';


// create hook 
function useCounter(){
  const [count, setCount] = useState(0);
  function increaseButton(){
    setCount(count+1);
  }

  // return in object
  return {
    count:count,
    increaseButton:increaseButton
  }
}

const App = () => {

   // destructure
  return (
    <div>
      
      <Counter/>
      <FetchDataDummy/>
    </div>
  )
}

function Counter(){
  const {count,increaseButton} = useCounter(); 
  return <div>
  
      <button onClick={increaseButton}>Increase {count}</button>
  </div>
}


function FetchDataDummy() {
  const {todo} = useFetchDataDummy();

  return(
    <div>
      {todo ? todo : <>...loading</>}
    </div>
  )
}




export default App
