const fs = require('fs').promises;

const promisifiedReadFile = (filePath) => {
    return fs.readFile(filePath,'utf-8')
}

promisifiedReadFile('azmi.txt')
.then(data => {
    console.log(data);
})

.catch(error => {
    console.error('Error:' , error)
})