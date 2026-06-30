import postModel from "../models/post.model.js"
import uploadFile from "../models/storage.service.js"

const createPost = async (req, res) => {
    try {
        console.log("req.file -->", req.file);
        
        const result = await uploadFile(req.file.buffer)
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: "post created successfully",
            post
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error creating post",
            error: error.message
        })
    }
}

const getPosts = async (req, res) => {
    try {
        const post = await postModel.find()

        return res.status(200).json({
            message: "posts fetched successfully",
            post
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching posts",
            error: error.message
        })
    }
}

export default { createPost, getPosts }
