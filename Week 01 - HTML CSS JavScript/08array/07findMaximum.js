// Given the array let values = [10, 5, 100, 2, 50];, find and print the maximum value.

let values = [10, 5, 100, 2, 50];
let max = values[0]

for (let i=0; i<values.length; i++){
    if(values[i]>max){
        max=values[i]
    }
    }
console.log(max)

