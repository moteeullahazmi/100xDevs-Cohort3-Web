const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId =  mongoose.Types.ObjectId;

const purchaseSchema = new Schema ({
    id : objectId,
    courseId : objectId,
    userId: objectId
});

const purchaseModel = mongoose.model("Purchases", purchaseSchema);
module.exports ={
    purchaseModel
}