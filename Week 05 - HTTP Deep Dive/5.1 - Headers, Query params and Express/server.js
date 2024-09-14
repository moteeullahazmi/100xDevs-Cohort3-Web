const express = require("express")
const app = express()

app.get("/sum",function(req,res){
    const a= parseInt(req.query.a);
    const b= parseInt(req.query.b);
    const sum =a+b

    res.json({"sum":sum})
}
)

app.get("/sum/:a/:b",function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const sum =a+b

    res.json({"sum":sum})
}
)
//
app.get("/mul/:a/:b",function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const multiply =a*b
    res.json({"multiply":multiply})
}
)

app.get("/sub/:a/:b",function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.param.b);
    const Subtract =a-b
    res.json({"Subtract":Subtract})
}
)

app.get("/div/:a/:b",function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    const Divide =a/b
    res.json({"Divide":Divide})
}
)

// port
app.listen(3000, ()=>{
    console.log("Server start this port")
}
)