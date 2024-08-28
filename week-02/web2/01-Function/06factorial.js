function factorial(num){
    let total=1;
    if(num==0){
        return 0
    }
    else {for(let i=1; i<=num;i++){
        total = total*i
        // console.log(total)
    }}
    return total
}

console.log(factorial(5))
console.log(factorial(0))
