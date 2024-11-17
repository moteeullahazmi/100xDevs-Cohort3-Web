import  { useEffect, useState } from 'react';

import { useFetch } from './hook/useFetch';




const App = () => {

   // destructure
  return (
    <div>
      
     

      <FetchData/>
    </div>
  )
}

function FetchData() {
  const [postChange, setPostChange] = useState(1)
    const { dataInput, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" +postChange);

    if(loading){
      return <h1>
        Loading
      </h1>
    }

    return (
        <div>
        
        <button onClick={()=>setPostChange(1)}>1</button>
        <button onClick={()=>setPostChange(2)}>2</button>
        <button onClick={()=>setPostChange(3)}>3</button>
            {JSON.stringify(dataInput)}
        </div>
    );
}







export default App
