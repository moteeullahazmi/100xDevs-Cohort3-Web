const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId =  mongoose.Types.ObjectId;

const courseSchema = new Schema ({
    id : objectId,
    title : String,
    description : String,
    price : Number,
    imageurl : String
});

const courseModel = mongoose.model("Courses", courseSchema);
module.exports ={
    courseModel
}