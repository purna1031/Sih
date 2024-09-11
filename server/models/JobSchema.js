import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const JobSchema = new Schema({
    JobTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    Salary: {
        type: Number,
        required: true  // Make sure Salary is required
    },
    link: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Job = model('Job', JobSchema);
export default Job;
