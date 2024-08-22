import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rollno: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    posts: {
        type: Array,
        default: [],
    },
    answers: {
        type: Array,
        default: [],
    },
    role: {
        type: Number,
        // 0 -> student, 1 -> Alumni
        default: 0,
        required: true,
    },
});


const User = mongoose.model('User', UserSchema);
export default User;