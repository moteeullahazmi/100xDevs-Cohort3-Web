const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

const myLogger2 = function (req, res, next) {
  console.log('only LOGGED2')
  next()
}
app.use(myLogger)


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/a', (req, res) => {
  res.send('a World!')
})

app.get('/az',myLogger2 ,(req, res) => {
  res.send('az World!')
})
app.listen(3000)