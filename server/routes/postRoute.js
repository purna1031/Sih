import express from "express";
import { PostQuestion,getPosts } from "../ctrl/posts.js";
const Postrouter = express.Router();

// Route to handle posting a new job
Postrouter.post('/posts', PostQuestion);

// Route to handle getting all job posts
Postrouter.get('/posts', getPosts);

export default Postrouter;