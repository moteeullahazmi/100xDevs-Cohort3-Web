function MyButton(){
    function handleClick(){
        alert ("you clicked me")
    }
    return (
    <button onClick={handleClick}>Click me</button>
)}

export default MyButton

