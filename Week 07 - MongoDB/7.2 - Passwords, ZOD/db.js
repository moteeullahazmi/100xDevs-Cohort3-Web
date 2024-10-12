const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: String, // String is shorthand for {type: String}
  email: {type:String, unique:true},
  password: String
});


const Todo = new Schema ({
    userId: ObjectId,
    title: String,
    done:Boolean
})

const UserModel = mongoose.model('users-data', User)
const TodoModel = mongoose.model('todos-data', Todo)

// Yeh lines: UserModel aur TodoModel create kar rahi hain.
// 1. mongoose.model function ko pehla argument dena hota hai jo collection ka naam hai (jaise 'users' ya 'todos'), aur doosra argument hai schema jo aapne define kiya hai.
// 2. Yeh models aapko MongoDB mein documents create, read, update, aur delete karne ke liye methods provide karte hain.

module.exports = {
    UserModel,
    TodoModel
}
