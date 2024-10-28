const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/Moteeullah-Azmi-taskify"
);

// Define schemas

const UserSchema = new mongoose.Schema({
  // Schema definition here
  id: ObjectId,
  username: { type: String, unique: true },
  password: String,
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    complete: Boolean
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

console.log("connect mongoose")

module.exports = {
    User,
    Todo
}