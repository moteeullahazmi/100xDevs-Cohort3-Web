const express = require('express')
const courseRouter = express.Router()

courseRouter.post("/course/purchase", function(req,res){
    res.json({
        messaage: "signup endpoint"
    })
    }
)

// purchases course route
courseRouter.post("/preview", function(req,res){
    res.json({
        messaage: "signup endpoint"
    })
    }
)

courseRouter.get("/bulk", function(req,res){
    res.json({
        messaage: "signup endpoint"
    })
    }
)

module.exports = {
    courseRouter
}

