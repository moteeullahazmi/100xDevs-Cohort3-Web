const express = require("express")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose");
const z = require("zod")
const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken")
const {auth,JWT_SECRET} =  require("./auth")

// mongoose 

mongoose.connect(process.env.MONGO_URL)

// importing schema
const {UserModel,TodoModel} = require("./db")

// importing auth
const app = express()
app.use(express.json())
app.post("/signup", async (req,res) =>{
   
    // input Validation using ZOD

   const requireBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(100)
   })
    
//    parse the request body using the requireBody.safeParse() method to validate the data format

   const parseDataWithSuccess = requireBody.safeParse(req.body)

//    if the data format is incorrect, send an error message a client
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

     const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

   const hashedPassword = await bcrypt.hash(password,5)

    try {
        // Create a new user using the UserModel.create() method
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name,
        });
    } catch (error) {
        // If the user already exists, send an error message to the client
        return res.json({
            message: "User already exists!",
        });
    }

   
   res.json({
    message:"You are signed up",
   })
})

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // Find the user with the given email
    const user = await UserModel.findOne({
        email: email,
    });
    if(!user){
        return res.status(403).json({
            message:"Invalid Credential"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    // if the user password
    if(passwordMatch){
       
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET)

        res.json({
            token:token,
            message:'You are signed in'
        })} else {
        res.status(403).json({
            message: "Incorrect credentialfs"
        });
    }

    
});

    // create a POST route the todo endpoint
app.post("/todo", auth, async (req,res) =>{
   const userId = req.userId;
   const title = req.body.title;
   TodoModel.create ({
    title,
    userId
   })

   res.json({
    userId: userId,
    title: title
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