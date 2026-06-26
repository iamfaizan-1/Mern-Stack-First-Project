import mongoose from "mongoose"
import dns from "dns"
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async()=>{
   await mongoose.connect(process.env.MONGO_URI)
   console.log("mongo db connected")
}

export default connectDB