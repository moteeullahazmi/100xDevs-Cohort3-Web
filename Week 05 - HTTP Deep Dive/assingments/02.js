const express = require("express")

const app = express()
app.use(express.json())

let count = 0
function logsMiddleware(req, res, next) {

    count = count + 1;

    console.log(`The method used is: ${method}, \nURL opened is: ${url}, \nCurrent time is: ${currentTime}, \nTotal Count is: ${count}`);
    next();  // Move to the next middleware or route
}


app.use(logsMiddleware)

app.get('/', (req,res)=>{
res.json({
    "azmi":"azmi"
})})
app.post('/a', (req,res)=>{
res.json({
    "azmi":"azmi"
})})

app.listen(3000,()=>{
    console.log("server start")
})