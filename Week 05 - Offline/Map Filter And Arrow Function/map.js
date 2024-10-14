let arr = [3,4,5,6]

// for (let i = 0; i < arr.length; i++){
//   arr[i] = arr[i] * 3;
// }

// console.log(arr); // [9, 12, 15, 18]

let newarr = arr.map(function(element){
    return element *3;
})

console.log(newarr)