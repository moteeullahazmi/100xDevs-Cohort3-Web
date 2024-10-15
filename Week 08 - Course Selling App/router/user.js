const express = require("express")
const userRouter = express.Router()

userRouter.post("/signup", function(req,res){
    res.json({
        messaage: "signup endpoint"
    })
    }
)

// user signin route
userRouter.post("/signin", function(req,res){
    res.json({
        messaage: "signup endpoint"
    })
    }
)

// my purchases route
userRouter.get("/purchase", function(req,res){
    res.json({
        messaage: "signup endpoint"
    })
    }
)

module.exports =  {userRouter }