function macValue (arr:number[]){
    let max=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
    return max;
}

console.log(macValue([1,2,3,54,4]))