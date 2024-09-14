const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())

// For using with cors file 
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname +"/public/cors_index.html")
// })

app.post("/mul",(req,res)=>{
    const a =  parseInt(req.body.a)
    const b =  parseInt(req.body.b)

    res.json({
        "mult": a*b
    })
})

app.listen(3001, ()=>{
    console.log("start")
})