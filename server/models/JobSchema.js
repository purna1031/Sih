import { Mongoose, Schema,SchemaType,model,models } from "mongoose";

const JobSchema =new Schema({

    JobTitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:
    {
        type:String,
        required:true
    },
    Salary:{
        type:Number,
        required:true
    },
    link:{
        type:String,
        required:true
    },

    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

})
const Job = mongoose.model('Job', JobSchema);

export default Job
