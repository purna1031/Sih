import Post from "../models/PostSchema.js";

export const post = async(req,res)=>{

    try{
        const{title,description,link}=req.body;

        const newPost = new  Post(
            {
                title,
                description,
                link
            }
        )

const savedPost = await newPost.save();
res.status(201).json(savedPost);
    }
    catch(err){
        throw new err;
        console.log(err);
    }

}