console.log("APP FILE LOADED")
import express from "express"
import multer from "multer"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import uploadFile from "./models/storage.service.js"
import postModel from "./models/post.model.js"
import userModel from "./models/user.model.js"
import cors from "cors"

const app = express()
const upload = multer({storage:multer.memoryStorage()})
app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>
{
    res.send("The server is running")
})

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

// user apis

app.post("/register",async(req,res)=>{

const {userName,email,password} = req.body

const isUserExists = await userModel.findOne({
    $or:[
        {userName},
        {email}
    ]
})





if(isUserExists){
    return res.status(409).json({
        message:"User already exists"
    })
}

const user = await userModel.create({
    userName,
    email,
    password
})


const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
res.cookie('token',token)


res.status(201).json({
    message:"User registered Successfully",
    user:{
        userName,
        email,
        password
    }
})




})





export default app