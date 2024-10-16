const jwt = require("jsonwebtoken")
const JWT_USER_SECRET = "User_secret";
function userMiddleware (req,res,next){
    const token = req.headers.token;
    // token decoded
    const decoded = jwt.verify(token,JWT_USER_SECRET);
    if(decoded){
        req.userId = decoded.id;
        next()
    }
    else{
        res.status(403).json({
            message:"You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware
}