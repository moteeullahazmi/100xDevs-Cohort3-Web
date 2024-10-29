// importing a library express, mongoose, jsonwebtoken
const express =  require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
// import router
const   { userRouter } = require("./router/user")
const { courseRouter } = require("./router/course")
const { adminRouter } = require("./router/admin")

// imorting models
const {model} = require("./models/model")

// create an instance of express server
const app = express();

app.use("/user", userRouter)
app.use("/course" , courseRouter)
app.use("/admin", adminRouter)


mongoose.connect(process.env.MONGO_URL)
app.listen(3000)