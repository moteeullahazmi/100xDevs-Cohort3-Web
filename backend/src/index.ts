import 'dotenv/config'
import express from "express";
import { UserModel, ContentModel, LinkModel } from "./db";
import z, { string } from "zod";
import jwt from "jsonwebtoken";
import { userMiddleware } from "./middleware";
import { random } from './utils';
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors())

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
            }, process.env.JWT_PASSWORD as string)
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
    const title = req.body.title;
    try {
      const content =   await ContentModel.create({
            link,
            type,
            title,
            // @ts-ignore
            userId: req.userId
        })
        res.json({
            message: "Content added", content
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
            _id: contentId,
            // @ts-ignore
            userId: req.userId
        })
        res.json({
            message: "Delete Successful", contentId
        })
    } catch (error: any) {
        res.json({
            message: error.message
        })
    }
})

// sharable post link
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        try {
            const hash = random(10)
            await LinkModel.create({
                //@ts-ignore
                userId: req.userId,
                hash: hash
                //blog.com/share/dkslfjd997
            })
            res.json({
                message: "share/" + hash
            })
        } catch (error: any) {
            res.json({
                message: error.message
            })
        }
    } else {
        await LinkModel.deleteOne({
            // @ts-ignore
            userId: req.userId
        })
        res.json({
            message: "Removed Link"
        })
    }
})

// fetch user share details about
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink

    const link = await LinkModel.findOne({
        hash,
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry Incorrect Input"
        })
        return; //return if you not use else
    }
    // userId
    const content = await ContentModel.find({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "User not found, error should ideally not happen"
        })
    }

    res.json({
        username: user?.username,
        content: content
    })


})

// defining port
app.listen(4000, () => {
    console.log("server is start port Number is : 4000")
})


