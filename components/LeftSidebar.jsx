import React from 'react'
import Image from 'next/image';
import guy from "../assets/guy7.jpg";
import { MdHome, MdGroups } from "react-icons/md";
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineDesktop, AiFillClockCircle } from "react-icons/ai";
import { useSession } from 'next-auth/react';

const LeftSidebar = () => {
    const { data: session } = useSession()
    console.log(session)
  return (
    <div className='w-3/12 hidden lg:block relative'>
       <div className='flex flex-col font-light fixed'>
            <div className='btn-leftsidebar my-4'>
                <div className='w-12 h-10'>
                    <img className='rounded-full' src={session?.user?.image} alt='user image'/>
                </div>
                <h6 className='ml-2'>{session?.user?.name}</h6>
            </div>
            <div className='rounded-full btn-leftsidebar'>
                <MdHome className='w-12 h-9'/>
                <p className='ml-2'>Home</p>
            </div>
            <div className='space-y-6 my-4'>
                <div className='btn-leftsidebar'>
                    <AiOutlineDesktop className='w-12 h-8' />
                    <h6 className='ml-2'>Watch</h6>
                </div>
                <div className='btn-leftsidebar'>
                    <BsPeopleFill className='w-12 h-8' />
                    <h6 className='ml-2'>Friends</h6>
                </div>
                <div className='btn-leftsidebar'>
                    <MdGroups className='w-12 h-8' />
                    <h6 className='ml-2'>Groups</h6>
                </div>
                <div className='btn-leftsidebar'>
                    <BsCart3 className='w-12 h-8' />
                    <h6 className='ml-2'>Marketplace</h6>
                </div>
                <div className='btn-leftsidebar'>
                    <BsCalendar2Fill className='w-12 h-7' />
                    <h6 className='ml-2'>Events</h6>
                </div>
                <div className='btn-leftsidebar'>
                    <AiFillClockCircle className='w-12 h-8' />
                    <h6 className='ml-2'>Memories</h6>
                </div>
                <div className='btn-leftsidebar'>
                    <RiArrowDownSLine className='w-12 file:h-8' />
                    <h6 className='ml-2'>See more</h6>
                </div>
            </div>
       </div>
    </div>
  )
}

export default LeftSidebar