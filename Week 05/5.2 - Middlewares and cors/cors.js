async  function sumData(){
        const a= document.getElementById("a").value
        const b= document.getElementById("b").value

           const sum = await axios.put("http://localhost:3001/mul")
           console.log(sum.data)
            document.getElementById("Result").innerHTML= sum.data