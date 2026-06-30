console.log("APP FILE LOADED")
import express from "express"
import cors from "cors"
import authRoutes from "../src/routes/auth.routes.js"
import postRoutes from "../src/routes/post.routes.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("The server is running")
})

// auth routes
app.use("/api/auth", authRoutes)

// post routes
app.use("/api", postRoutes)

export default app