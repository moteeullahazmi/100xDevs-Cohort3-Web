// importing a library express, mongoose, jsonwebtoken
const express =  require("express")
const mongoose = require("mongoose")

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


mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/azmi_course_selling_app")
app.listen(3000)