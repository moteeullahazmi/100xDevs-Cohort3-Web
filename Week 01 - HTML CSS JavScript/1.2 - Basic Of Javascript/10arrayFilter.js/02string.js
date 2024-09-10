let fruits = ["apple", "banana", "cherry", "date", "fig", "grape"]

let filterfruit = fruits.filter(function(fruit){
    return fruit.length >4
})

console.log(filterfruit)