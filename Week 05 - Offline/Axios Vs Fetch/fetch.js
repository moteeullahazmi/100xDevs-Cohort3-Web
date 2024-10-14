async function main(){
    
const dataFetch = await fetch('http://dummyjson.com/test')
let data = await dataFetch.json()
console.log(data)
console.error(data)
}

main()