const fs = require("fs").promises;

// const content ="Moteeullah Azmi"

// fs.writeFile((__dirname +"neFile"), content ,(err,data)=>{
//     if(err){
//         console.error(err)
//     }
//     console.log(data)
// })


async function writeToFile(filename, content) {
  try {
    await fs.writeFile(filename, content,"utf-8");
    console.log("File has been written successfully");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

// Usage
writeToFile("example.txt", "Hello, world!");



