import React from 'react'
import { FaRegHeart } from 'react-icons/fa6';
import { IoSearch } from "react-icons/io5";
function Navbar() {
  return (
    <div className="flex justify-between px-5 items-center fixed top-0 left-0 bg-white w-full ">

<div>
    <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg" alt="" width="140px"  />
</div>

<div className="flex gap-10 items-center">
    <div className="flex   items-center bg-primary sm:w-[250px] w-[150px] gap-2 rounded-3xl sm:py-3 py-1 ps-[10px]">
    <IoSearch className="sm:text-xl text-[13px] text-gray-600"/>
    <input type="text" placeholder="Search" className="w-full
    border-none
   outline-none
    rounded-xl
    
    focus:border-pink-500
    focus:ring-2
    focus:ring-red-200
    transition
    duration-300  ps-1 sm:w-[180px] w-[60px] sm:text-[14px] text-[12px]" />
</div>

<div>
     <FaRegHeart className="sm:text-2xl text-xl " />
</div>
</div>

    </div>
  )
}

export default Navbar