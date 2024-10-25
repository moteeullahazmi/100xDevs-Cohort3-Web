const fs =require("fs");

fs.readFile("azmi.txt", "utf-8", (err,data)=>{
    if(data){
       const replData = data.replace(/\s+/g, " ").trim();

//        \s: matches any whitespace symbol: spaces, tabs, and line breaks
// +: match one or more of the preceding tokens (referencing \s)
// g: the g at the end indicates iterative searching throughout the full string
        console.log(replData)
    }
    console.error()
})
