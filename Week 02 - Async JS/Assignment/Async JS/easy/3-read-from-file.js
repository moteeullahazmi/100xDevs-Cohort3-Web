const fs = require("fs")

fs.readFile("azmi.txt", "utf-8",(err,data)=>{
if(err){
    console.error(err)
    return;
}
console.log(data)
})

// // Expensive operation: A simple, large computational task
// Expensive operation: Synchronous loop
let sum = 0;
for (let i = 0; i < 1e8; i++) { // Increase this number to make the operation more expensive  1e9 mean 1 power 9
    sum += i;
}

console.log("Expensive task completed. Sum is:", sum);