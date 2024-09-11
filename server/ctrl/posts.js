import Post from "../models/PostSchema.js";



export const PostQuestion = async (req, res) => {
    try {
        const {  title, description} = req.body;

       
        const newQuestion = new Post({
       
         title, 
          description,
          
        });

        const savedPost = await newQuestion.save();

        
        res.status(201).json(savedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while creating the job post.' });
    }
};


export const getPosts = async (req, res) => {
  try {

    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while retrieving the job posts.' });
  }
};
