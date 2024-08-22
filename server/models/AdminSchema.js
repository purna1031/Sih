import { Mongoose, Schema,model,models } from "mongoose";

const AdminSchema =new Schema({

    name:{
        type:String,
        required:true
    },
   email:{
type:String,
required:true
   },
    password:{
        type:String,
        required:true
    },
    events:{
        type:Array,
        default:[]
    },

})
const Admin = mongoose.model('Admin', AdminSchema);

export default Admin
