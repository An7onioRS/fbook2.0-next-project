import React from 'react'
import Image from 'next/image';
import guy from "../assets/guy7.jpg";
import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";

const LeftSidebar = () => {
  return (
    <div className='w-[10rem] hidden sm:block'>
       <div className='flex flex-col pt-4 pl-7'>
            <div className='flex items-center font-bold cursor-pointer'>
                <MdHome className='w-9 h-9'/>
                <p className='ml-2'>Home</p>
            </div>

            <div className='flex items-center mt-4 cursor-pointer'>
                <div className='w-10 h-10'>
                    <Image className='rounded-full' src={guy} alt='user image'/>
                </div>
                <p className='ml-2 font-bold'>Some Guy</p>
            </div>
            <div className='border-b my-4'></div>
            <div className='space-y-6'>
                <div className='flex items-center font-bold cursor-pointer'>
                    <AiOutlineDesktop className='w-8 h-8' />
                    <p className='ml-2'>Watch</p>
                </div>
                <div className='flex items-center font-bold cursor-pointer'>
                    <BsPeopleFill className='w-8 h-8' />
                    <p className='ml-2'>Friends</p>
                </div>
                <div className='flex items-center font-bold cursor-pointer'>
                    <MdGroups className='w-8 h-8' />
                    <p className='ml-2'>Groups</p>
                </div>
                <div className='flex items-center font-bold cursor-pointer'>
                    <BsCart3 className='w-8 h-8' />
                    <p className='ml-2'>Marketplace</p>
                </div>
                <div className='flex items-center font-bold cursor-pointer'>
                    <BsCalendar2Fill className='w-7 h-7' />
                    <p className='ml-2'>Events</p>
                </div>
                <div className='flex items-center font-bold cursor-pointer'>
                    <AiFillClockCircle className='w-8 h-8' />
                    <p className='ml-2'>Memories</p>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <RiArrowDownSLine className='w-8 h-8' />
                    <p className='ml-2'>See more</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default LeftSidebar