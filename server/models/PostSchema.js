import { Mongoose, Schema,SchemaType,model,models } from "mongoose";

const PostSchema =new Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    link:{
        type:String,
    },

    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
const Post = mongoose.model('Post', PostSchema);

export default Post
