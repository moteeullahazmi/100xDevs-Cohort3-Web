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



    } catch (error: any) {
        res.json({
            message: error.message
        })
    }
})

// signin
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username: username,
        password: password
    })

    try {
        if (existingUser) {
            const token = jwt.sign({
                id: existingUser._id
            }, JWT_PASSWORD)
            res.json({
                token: token
            })

        } else {
            res.status(403).json({
                message: "Incorrect credentials"
            })
        }
    } catch (error: any) {
        console.log(error)
        res.json({
            message: error.message
        })
    }
}
)

// Post Content
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    try {
        await ContentModel.create({
            link,
            type,
            // @ts-ignore
            userId: req.userId
        })
        res.json({
            message: "Content added"
        })
    } catch (error: any) {
        console.log(error)
        res.json({
            message: error.message
        })
    }
})

// fetching all data 
app.get("/api/v1/content", userMiddleware, async (req, res) => {

    try {
        // @ts-ignore
        const userId = req.userId;
        const content = await ContentModel.find({
            userId
        }).populate("userId", "username")  //foreign key  and select
        res.json({
            content
        })
    } catch (error) {
        console.log(error);
        res.json({
            // @ts-ignore
            message: error.message
        })
    }
})


// deleting
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    try {
        await ContentModel.deleteMany({
            _id:contentId,
            // @ts-ignore
            userId: req.userId
        })
        res.json({
            message:"Delete Successful",contentId
        })
    } catch (error:any) {
        res.json({
            message: error.message
        })
    }
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