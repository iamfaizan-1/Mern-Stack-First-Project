import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'





function CreatePost() {
const navigate = useNavigate()
const handleSubmit = async (e)=>{
e.preventDefault()

const formData = new FormData(e.target)
 await axios.post("http://localhost:3000/create-post",formData)

.then((res)=>{
  navigate("/feed")
})
.catch((error)=>{
console.log(error)
})

}

  return (
    <section className="flex flex-col justify-center items-center h-screen">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white px-10 py-20 gap-6 ">
<input type="file" name="image" accept="image/*" className="border-[2px] rounded-md px-2 py-1 border-gray-600 " />
<input type="text" name="caption" placeholder="enter caption" className="border-[2px] rounded-md px-2 py-1 w-full  border-gray-600 " required />
<button className="bg-green-500 font-semibold w-[120px] py-2 rounded-md text-center text-white">Submit</button>

        </form>
    </section>
  )
}

export default CreatePost