import { useState } from "react";




function App() {
  const [like, setLike] = useState(true);

  function likeChange(e) {
    setLike(e.target.checked);
  }
  return (
    <>
      <input type="checkbox" checked={like} onChange={likeChange} />

      <h1>{like ? "I like You" :  "I dont Like you"} </h1>
    </>
  );
}

export default App