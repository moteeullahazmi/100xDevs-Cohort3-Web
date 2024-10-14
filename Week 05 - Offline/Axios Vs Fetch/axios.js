const axios = require('axios')



async function main(){
    let readData = await axios.get("http://dummyjson.com/test")
    let dataRead =  readData.data
    console.log(dataRead)
}
main()