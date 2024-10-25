let count =0;

function timer(){
    count++;
    console.clear(clear)
    console.log(count)
    setTimeout(timer,1000)
}
setTimeout(timer,1000)