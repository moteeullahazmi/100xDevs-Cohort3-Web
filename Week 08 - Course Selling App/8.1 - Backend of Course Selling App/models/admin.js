const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId =  mongoose.Types.ObjectId;

const adminSchema = new Schema ({
    id : objectId,
    email : {type:String, unique:true},
    password : String,
    first_name : String,
    last_name : String
});

const adminModel = mongoose.model("Admin", adminSchema);
module.exports ={
    adminModel
}