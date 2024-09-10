const promisidiedFetch = (url,options)=>{
    return new Promise((resolve,reject)=>{
        fetch(url,options).then((response)=>{
            if(!response.ok){
                reject(new Error("Network reponse was not ok"))
            }

            return response.json();
        })
        .then(resolve)
        .catch(reject)
    })
}

//usage

promisidiedFetch("https://jsonplaceholder.typicode.com/todos/1")
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log('Error:',error)
})