const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const jwt = require("jsonwebtoken")
const {auth,JWT_SECRET} =  require("./auth")

console.log(process.env.MONGO_URL)
// mongoose 
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

// importing schema
const {UserModel,TodoModel} = require("./db")

// importing auth

app.use(express.json())
app.post("/signup", async (req,res) =>{
   const  name = req.body.name;
   const  email = req.body.email;
   const  password = req.body.password;

   await UserModel.create({
    name:name,
    password:password,
    email:email
   })

   res.json({
    message:"You are signed up"
   })
})

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password,
    });

    console.log(user)

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET)

        res.json({
            token:token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentialfs"
        })
    }
});

app.post("/todo", auth, async (req,res) =>{
   const userId = req.userId;
   const title = req.body.title;
   TodoModel.create ({
    title,
    userId
   })

   res.json({
    userId: userId,
   })
})

app.get("/todos", auth, async (req,res) =>{
    const userId = req.userId;
    const todos=  await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    })
})

app.listen(3000,()=>{
    console.log("server start from 3000 port")
})