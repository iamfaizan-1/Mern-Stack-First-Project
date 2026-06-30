import express from "express"
import multer from "multer"
import postController from "../controllers/post.controller.js"

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

router.post("/create-post", upload.single("image"), postController.createPost)
router.get("/posts", postController.getPosts)

export default router
