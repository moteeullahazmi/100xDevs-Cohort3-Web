let numbers=[5, 10, 15, 20, 25, 30, 35];

let filterArray = numbers.filter(function(num){
    return num>15 && num<30
})

console.log(filterArray)