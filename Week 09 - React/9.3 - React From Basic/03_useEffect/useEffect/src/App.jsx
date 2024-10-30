import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // useEffect ko use karke title update karna
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]); // Dependency: count

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
