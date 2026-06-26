import express from "express"
import multer from "multer"
import uploadFile from "./models/storage.service.js"
import postModel from "./models/post.model.js"
import cors from "cors"

const app = express()
const upload = multer({storage:multer.memoryStorage()})
app.use(cors())

app.use(express.json())


app.post("/create-post", upload.single("image"),async (req,res)=>{



const result = await uploadFile(req.file.buffer)
const post = await postModel.create({
    image:result.url,
    caption:req.body.caption
})

return res.status(201).json({
    message:"post created successfully",
    post
})

})

app.get("/posts",async(req,res)=>{

    const post = await postModel.find()

    return res.status(201).json({
        message:"posts fetched successfully",
        post
    })

})
export default app