import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body

        const isUserExists = await userModel.findOne({
            $or: [
                { userName },
                { email }
            ]
        })

        if (isUserExists) {
            return res.status(409).json({
                message: "User already exists"
            })
        }

        const user = await userModel.create({
            userName,
            email,
            password
        })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.cookie('token', token)

        res.status(201).json({
            message: "User registered Successfully",
            user: {
                userName,
                email,
                password
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error registering user",
            error: error.message
        })
    }
}

export default { registerUser }

