const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const user = require("../hard/routes/user")
const todo = require("../hard/routes/todo");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

app.use("/user",user)
//  start writing your routes here

app.use("/todo", todo)

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

