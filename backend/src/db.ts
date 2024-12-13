import mongoose, {model, Schema} from "mongoose"
import 'dotenv/config'


try {
    mongoose.connect(process.env.MONGO_URL as string)
} catch (error) {
    console.log(error)
}


// UserSchema
const UserSchema = new Schema({
    username: {type:String, unique:true},
    password: {type:String}
})
export const UserModel = model("User" ,UserSchema)

// Content Schema
const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref:'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref:"User", required:true },
    
})
export const ContentModel = model("Content", ContentSchema)

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref:"User", required:true ,unique:true },
})

export const LinkModel = model("Link",LinkSchema)

