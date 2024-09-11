import express from 'express';
import { PostJob,getJob } from '../ctrl/jobs.js';
const Jobrouter = express.Router();

// Route to handle posting a new job
Jobrouter.post('/jobs', PostJob);

// Route to handle getting all job posts
Jobrouter.get('/jobs', getJob);

export default Jobrouter;
