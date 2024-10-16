const express = require("express")
const adminRouter = express.Router()

adminRouter.post("/signup", function(req,res){
    res.json({
        messaage: "signup endpoint"
    })
    }
)

adminRouter.post("/signin",(req,res)=>{
    res.json({
        "message": "login working"
    })
})

adminRouter.post("/course",(req,res)=>{
    res.json({
        "message": "login working"
    })
})

adminRouter.put("/course",(req,res)=>{
    res.json({
        "message": "login working"
    })
})

adminRouter.get("/bulk",(req,res)=>{
    res.json({
        "message": "login working"
    })
})

module.exports = {
    adminRouter
}