import mongoose from 'mongoose'; 
const { Schema, model, models } = mongoose;

const AdminSchema =new Schema({

    name:{
        type:String,
        required:true
    },
   email:{
        type:String,
        required:true,
        unique:true
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
const Admin = models.Admin || model('Admin', AdminSchema);

export default Admin
