const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const bcrypt =  require("bcrypt");
const {User,Todo} = require("../database/index");
const jwt = require("jsonwebtoken");
const JWT_USER_SECRET = "xyz@123";



// User Routes


router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const hashPassword = await bcrypt.hash(password,10)

    // storing data

     await User.create({
        username : username,
        password : hashPassword
    });
    res.json({
        result : "Singup Successfull"
    })
});

router.post('/login', async (req, res) => {
     const username = req.body.username;
     const password = req.body.password;

    const user=  await User.findOne({
        username,
    })

    if(!user){
        return res.status(403)({
          messaage: "Incorrect Credentials",
        });
    }

    const passwordMatch = await bcrypt.compare(password,user.password)

    if(passwordMatch){
        const token = jwt.sign({ id: user._id },JWT_USER_SECRET);
        res.status(200).json({
            token
        })
    }

});

router.get('/todos', userMiddleware, async (req, res) => {
    const userId = req.userId;

    try{
        const todos = await Todo.find({userId});

        res.status(200).json({todos})
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve todos' });
    }
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    res
      .status(200)
      .json({
        message: "Logout successful. Please remove your token from storage.",
      });
     
});

module.exports = router