const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "azmi";
const app = express();
app.use(express.json());
const users = [];
// azmi
// Serve the homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Logger middleware
function logger(req, res, next) {
    console.log(req.method + " request came (logger)");
    next();
}

// Signup route
app.post("/signup", logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.json({ message: "User already exists" });
    }

    users.push({ username, password });

    res.json({
        message: "You are signed up"
    });
});

// Signin route
app.post("/signin", logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (!foundUser) {
        return res.json({
            message: "Credentials are incorrect"
        });
    } else {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({ token });
    }
});

// Auth middleware
function auth(req, res, next) {
    const token = req.headers.token; // Get token from headers

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        if (decodedData.username) {
            next(); // Call next middleware if token is valid
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
}

// Route for user profile
app.get("/me", auth, (req, res) => {
    const token = req.headers.token; // Use token from headers
    const userDetails = jwt.verify(token, JWT_SECRET);
    
    const username = userDetails.username;
    const user = users.find(user => user.username === username);

    if (user) {
        res.send({ username: user.username });
    } else {
        res.status(401).send({ message: "Unauthorized" });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
