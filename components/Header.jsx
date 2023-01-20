import React from 'react'
import facebookImg from '../assets/facebook1.png'
import Image from 'next/image'
import { MdHome } from "react-icons/md";
import { FiPlayCircle, FiFlag, FiMessageCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GrGroup, GrAppsRounded } from "react-icons/gr";
import { FaBell } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import userImg from '../assets/guy7.jpg'

const Header = () => {
  return (
        <div className='flex p-2 items-center justify-between border-b sticky top-0 z-30 w-full bg-white'>
            <div className='flex items-center'>
                <div className='w-10 h-12 cursor-pointer'>
                    <Image src={facebookImg} alt='facebook logo'/>
                </div>
                <div className='ml-2'>
                    <input type="text" placeholder='Search Facebook' className='hidden sm:block sm:w-72 outline-0 bg-[#f2f3f7] rounded-full p-4'/>
                </div> 
            </div>

            <div className='hidden lg:flex flex-grow items-center justify-evenly'>
                <MdHome className='w-9 h-8 cursor-pointer'/>
                <FiFlag className='w-7 h-8 cursor-pointer' />
                <FiPlayCircle className='w-7 h-8 cursor-pointer' />
                <BsCart3 className='w-7 h-8 cursor-pointer' />
                <GrGroup className='w-7 h-8 cursor-pointer' />
            </div>
        
            <div className='flex items-center space-x-6 ml-4'>
                <div className='hidden lg:flex items-center space-x-6'>
                    <GrAppsRounded className='w-7 h-8 cursor-pointer' />
                    <FaBell className='w-7 h-7 cursor-pointer' />
                    <AiOutlineMessage className='w-7 h-10 cursor-pointer' />
                </div>
                <div className='sm:block w-10 h-10'>
                    <Image src={userImg} className='rounded-full cursor-pointer' alt='user image'/>
                </div>
            </div>
    </div>
  )
}

export default Header