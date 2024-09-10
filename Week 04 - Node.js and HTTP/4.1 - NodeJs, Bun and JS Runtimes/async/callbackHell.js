function fetchData(dataID,nextData){
setTimeout(function main(){
    console.log(dataID,"fetched")
    if (nextData){
    nextData();
    }

},400)
}

// callback hell
fetchData(1,function main(){
    console.log()
    fetchData(2,function main(){
    fetchData(3,)
})
})