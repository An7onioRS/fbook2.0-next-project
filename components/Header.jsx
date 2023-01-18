import React from 'react'
import facebookImg from '../assets/facebook1.png'
import Image from 'next/image'
import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const Header = () => {
  return (
    <div className='flex p-4 items-center justify-between'>
        {/* Left side */}
        <div className='flex items-center'>
            <div className='w-10 h-12'>
                <Image src={facebookImg}/>
            </div>
            <div className='ml-2'>
                <input type="text" placeholder='Search Facebook' className='outline-0 bg-[#f2f3f7] p-2 rounded-full pl-4'/>
            </div> 
        </div>

        <div className='flex items-center space-x-7'>
            <MdHome className='w-9 h-8'/>
            <FiFlag className='w-7 h-8' />
            <FiPlayCircle className='w-7 h-8' />
            <BsCart3 className='w-7 h-8' />
            <GrGroup className='w-7 h-8' />
        </div>
        {/* Right side */}
    </div>
  )
}

export default Header