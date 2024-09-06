const fs =require('fs')

fs.writeFileSync('exampsle.txt',"hello node js")

const data = fs.readFileSync('example.txt', 'utf-8')
console.log(data)