import React from 'react'
import { HiHome, HiOutlinePlus } from "react-icons/hi2";
import { MdExplore } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { FaShare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center sm:gap-25 gap-10 bg-white h-[50px] items-center text-[18px] sm:text-[25px]">

      <HiHome />
      <MdExplore />
      <Link to="/create-post">
        <HiOutlinePlus />
      </Link>


      <BiSolidVideos />

      <FaShare />
    </div>
  )
}

export default Footer