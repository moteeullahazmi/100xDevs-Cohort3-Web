const express = require("express")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "azmi1234"
const app = express();
app.use(express.json())
const users = []


app.get("/",(req,res)=>{
    res.json({
        message:"welcome"
    })
})

function logger (req,res,next){
    console.log(req.method + "request came")
    next();
}
app.post("/signup", logger, (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    users.push({
        username,password
    })

    // we should check if a user with this username already exist



    res.json({
        message: "You are signed in"
    })
})

app.post("/signin", logger, (req,res) => {
     const username = req.body.username
     const password =  req.body.password

     let foundUser = null;

     for(let i =0 ; i<users.length; i++){
        console.log(i)
        console.log(users)
        if(users[i].username === username && users[i].password===password){
            console.log(i)
            foundUser = users[i]
        }
     }

     if(!foundUser){
        res.json({
            message:"Credential in correct"
             })
             return 
            } else {
                const token = jwt.sign({
                    username 
                },JWT_SECRET)
                res.json({
                    token : token
                })
            }
     
})

function auth(req,res,next){
    const token = req.header.token
    const decodedData = jwt.verify(token,JWT_SECRET)

    if(decodedData.username){
    next()
    } else {
        res.jsom({
        })
    }
}



app.get("/me", logger,auth, (req,res)=>{
    
       let foundUser = null;

     for(let i =0 ; i<users.length; i++){
        if(users[i].username === decodedData.username ){
            foundUser = users[i]
        }
     }

     res.json({
        username:foundUser.username,
        password:foundUser.password,
        
     })
    }

    
    
)

    app.get("/todo", auth, (req,res)=>{

    })

    app.post("/todo", auth, (req,res)=>{

    })

    app.delete("/todo", auth, (req,res)=>{

    })

app.listen(3000,
    console.log("Server start")
)