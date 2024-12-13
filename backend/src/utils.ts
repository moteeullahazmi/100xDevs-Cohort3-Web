export function random(len:number){
    let options = "qwertyuiop2345678";
    let length =options.length
    let ans= "";
    for(let i =0; i<len; i++){
        ans +=options[Math.floor((Math.random() * length))];  // 0 to 20
    }
    return ans;
}