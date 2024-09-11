import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const PostSchema =new Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },


    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
const Post = mongoose.model('Post', PostSchema);

export default Post
