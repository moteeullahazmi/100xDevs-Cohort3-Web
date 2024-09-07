let area = new Promise(callback,3000)

function callback(){
    console.log("azmi")
}

callback(Promise).then(1000)