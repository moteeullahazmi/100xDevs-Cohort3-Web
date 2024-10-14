function promisidiedSetTimeout (delay) {
    return new Promise(function(resolve){
        setTimeout(resolve,delay);
    })
}

// usage

promisidiedSetTimeout(1000).then(()=>{
    console.log("Executed after 1 second")
})