const express =  require("express")
const app = express();
const jwt = require("jsonwebtoken")
const JWT_SECRET = "USER_APP";



//create meomry users
const users = []

// // Generate token
// function generateToken(){
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token =""
//     for (let i=0; i<32; i++){
//         // use a simple funciton here
//         token += options[Math.floor(Math.random() * options.length)]
//     }
//     console.log(token)
//     return token;
// }

// middleware json
app.use(express.json())

//rout signup
app.post("/signup",function (req,res){
    const username = req.body.username
    const password = req.body.password

    // users.push.username ----->  wrong way to push 
    // users.push.password

// push to array with object using parameter
    users.push({username,password})

    res.json({
        message: "You have singed up"
    })
    console.log(users)
})


//route signin
app.post("/signin",function (req,res){
     const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password)

    if(user) {
        const token =   jwt.sign({
            username: user.username
        }, JWT_SECRET)           //generateToken()

        user.token =token
        res.send({
            token
        })

        console.log(users)
    }

    else{
        res.status(403).send({
            message : "Invalid username or password"
        })
    }
})

//route me


app.get("/me", (req, res) => {
    const token = req.headers.token;
    const userDetails = jwt.verify(token, JWT_SECRET);

    const username =  userDetails.username;
    const user = users.find(user => user.username === username);

    if (user) {
        res.send({
            username: user.username,
            password: user.password
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

//define server start with port
app.listen(3000,function(){
    console.log("Server port start 3000")
})