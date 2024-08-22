import { Mongoose, Schema,SchemaType,model,models } from "mongoose";

const ReplySchema =new Schema({

 
    reply:{
        type:String,
        required:true
    },
   
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    },

    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
const Reply= mongoose.model('Reply', ReplySchema);

export default Reply
