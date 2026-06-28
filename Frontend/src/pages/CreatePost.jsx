import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

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





  const [imageName, setImageName] = useState("");
  const [preview, setPreview] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if(file){
      setImageName(file.name);
      setPreview(URL.createObjectURL(file));
    }
  };


  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">


        <h1 className="text-3xl font-bold text-center mb-8 
        bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 
        text-transparent bg-clip-text">
          Create Post
        </h1>


        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >


          {/* Image Upload */}

          <label 
          className="cursor-pointer border-2 border-dashed 
          border-gray-300 rounded-xl p-5 text-center
          hover:border-pink-500 transition"
          >

            {
              preview ? (
                <img 
                  src={preview}
                  className="w-full h-48 object-cover rounded-xl"
                />
              )
              :
              (
                <span className="text-gray-500">
                  Upload your photo 📸
                </span>
              )
            }


            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

          </label>


          {
            imageName && (
              <p className="text-sm text-green-600 text-center">
                ✓ {imageName} selected
              </p>
            )
          }



          {/* Caption */}

          <textarea
            name="caption"
            placeholder="Write a caption..."
            required
            rows="3"
            className="
            resize-none border border-gray-300 
            rounded-xl px-4 py-3 
            outline-none focus:ring-2 
            focus:ring-pink-400"
          />


          <button
            className="
            bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
            text-white font-semibold py-3 rounded-xl
            hover:scale-[1.02] transition shadow-md"
          >
            Share Post
          </button>


        </form>


      </div>

    </section>
  )
}

export default CreatePost;