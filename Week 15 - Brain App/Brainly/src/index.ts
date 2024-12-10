import express from "express";
import { UserModel, ContentModel } from "./db";
import z from "zod";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config"
import { userMiddleware } from "./middleware";


const app = express();
app.use(express.json());

// signup
// Todo: ZOD, Hash, crash
app.post("/api/v1/signup", async (req, res) => {

    try {
        const username = req.body.username;
        const password = req.body.password;



        await UserModel.create({
            username: username,
            password: password
        })
        res.status(200).json({
            message: "User signed Up"
        })



    } catch (error) {
        res.status(411).json({
            message: "User already exist"
        })
    }
})

// signin
app.post("/api/v1/signin", async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username: username,
        password: password
    })

    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        },JWT_PASSWORD )
        res.json({
           token: token
        })

    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}
)

// Post Content
app.post("/api/v1/content",userMiddleware, async(req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        // @ts-ignore
        userId: req.userId,

    })
    res.json({
        message: "Content added"
    })
})

// fetching all data 
app.get("/api/v1/content", (req, res) => {

})


// deleting
app.delete("/api/v1/content", async (req, res) => {

})

// sharable link
app.post("/api/v1/brain/share", () => {

})

// fetch user share details about
app.get("/api/v1/brain/:shareLink", () => {

})

// defining port
app.listen(4000, () => {
    console.log("server is start port Number is : 4000")
})