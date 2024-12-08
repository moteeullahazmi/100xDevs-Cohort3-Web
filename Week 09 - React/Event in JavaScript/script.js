let mode = document.getElementById("toggle");
let myMode = "light"

mode.addEventListener("click", ()=>{
    if(myMode === "light"){
        document.body.style.backgroundColor = "white";
        myMode ="dark"
       
    }
    else{
       
        document.body.style.backgroundColor ="black"
        myMode= "light"
    }
})



