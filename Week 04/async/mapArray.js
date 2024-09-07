function double(num){
    return 2*num
}

function calculate(num,callback){
    return callback(num)
}

const result = calculate(5,double)

console.log(result)