
const jwt = require("jsonwebtoken")
const JWT_SECRET = "s3cret"
function auth (req,res,next){

    const token = req.headers.token
    
    const decodedData =  jwt.verify(token,JWT_SECRET)

    if(decodedData){
            req.userId = decodedData.id
            next()
    }
    else {
        res.status(403).json({
            message:"Incorrect credential"
        })
    }
}




module.exports = {
    auth,
    JWT_SECRET
}