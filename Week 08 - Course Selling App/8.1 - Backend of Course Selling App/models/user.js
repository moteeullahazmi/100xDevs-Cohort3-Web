const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId =  mongoose.Types.ObjectId;

const userSchema = new Schema ({
    id : objectId,
    email : {type:String, unique:true},
    password : String,
    first_name : String,
    last_name : String
});

const userModel = mongoose.model("Users", userSchema);
module.exports ={
    userModel
}