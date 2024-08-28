var sum=0
function sumofArray(numbers){
    for(let number of numbers){
        sum= sum+number
    }
    return sum
}

console.log(sumofArray([1,2,3,4]))