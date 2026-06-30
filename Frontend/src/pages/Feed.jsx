import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaRegHeart } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Feed() {
 

useEffect(()=>{

    axios.get("http://localhost:3000/api/posts")
    .then((res)=>{
      setPosts(res.data.post)  
    })
},[])


 const [posts, setPosts] = useState([{
    _id:1,
    image:"https://images.unsplash.com/photo-1589223050279-18d1f14059cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmVyeSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    caption:"Beautiful Scenery"
 }]
 )
 
    return (
<main className="flex flex-col justify-center items-center" >

<Navbar/>

<section  className="  py-20 flex flex-col gap-10 justify-center items-center">
        {
            posts.length > 0 ? (
                posts.map((post)=>(
<div className="flex flex-col   bg-white rounded-lg p-6 sm:w-[400px] w-full"  key={post._id} >
{/* image */}

<div>
    <img
    src={post.image}
    className="w-full sm:h-70  object-cover rounded-t mb-5"
    alt=""
/>
</div>

{/* like comment */}

<div className="flex gap-5 mb-4">
    <div className="flex items-center justify-center gap-2">
    <FaRegHeart />
    <p className="text-[13px] font-semibold">25</p>
   
</div>

<div className="flex items-center justify-center gap-2">
  <FaRegCommentAlt />
    <p className="text-[13px] font-semibold">4</p>
</div>

<div className="flex items-center justify-center gap-2">
    <FaRegShareFromSquare />
</div>
</div>

{/* caption */}

<div>
    <p className="text-[15px]"  >
    {
        post.caption
    }
</p>
</div>

</div>

                ))
            )
            :
            (
                <h1>No post available</h1>
            )
        }

    </section>


<Footer/>

</main>

    
  )
}

export default Feed