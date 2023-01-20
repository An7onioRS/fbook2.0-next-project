import React from 'react'
import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import heart from "../assets/heart.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { AiOutlineClose } from 'react-icons/ai'
import Image from "next/image";
import { useSession } from 'next-auth/react';

const Post = () => {
    const { data: session } = useSession()
  return (
    <div className='bg-[#ffffff] p-4 mt-4'>
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 cursor-pointer'>
                    <div>
                        <img className='w-10 h-10 rounded-full' src={session?.user?.image} alt='profile pic'/>
                    </div>
                    <div>
                        <h3 className='6t-bold'>{session?.user?.name}</h3>
                        <p className='text-xs'>5 hours ago &#8226; <BiWorld className='inline' /></p>
                    </div>
                </div>
                <div className='flex flex-grow justify-end text-state-500'>
                    <div className='w-8 h-8 cursor-pointer'>
                        <Image src={dots} alt='dots' className='w-8 h-8'/>
                    </div>
                        <AiOutlineClose className='w-6 h-8 cursor-pointer'/>
                </div>
            </div>
            <div className='my-3'>
                <p>Take a look at my brand new car!</p>
                <div>
                    <Image src={car} alt='car' className='mt-3 -mx-4'/>
                </div>
            </div>
            <div className='flex justify-between text-state-500 pb-3'>
                <div className='flex items-center flex-grow text-right cursor-pointer'>    
                    <Image src={like} alt='like' className='w-5 h-5' />
                    <div className='w-5 h-5'>
                        <Image src={heart} alt='heart'/>
                    </div>
                    <p className='ml-1'>Michelle Sailor and others</p>
                </div>
                <div className="flex items-center cursor-pointer">
                    <p>16 comments</p>
                </div>
            </div>
        </div>
        <div className='border-y-2 flex justify-center items-center border-b-2'>
            <div className='flex-1 flex justify-center cursor-pointer hover:bg-gray-100 p-4 rounded-lg'>
                <BiLike className='w-6 h-6'/>
                <p className='ml-1'>Like</p>
            </div>
            <div className='flex-1 flex justify-center items-center cursor-pointer hover:bg-gray-100 p-4 rounded-lg'>
                <FaRegCommentAlt className='w-6 h-5 cursor-pointer'/>
                <p className='ml-1'>Comment</p>
            </div>
            <div className='flex-1 flex justify-center items-center cursor-pointer hover:bg-gray-100 p-4 rounded-lg'>
                <Image src={share} alt='share' className='w-6 h-5'/>
                <p className='ml-1'>Share</p>
            </div>
        </div>
        <div className='max-h-40 overflow-y-auto'>
            <div className='flex justify-between items-center mt-2'>
                <p className='flex-1 cursor-pointer'>See 26 comments</p>
                <div className='flex justify-center items-center gap-1'>
                    <p>Most Relevant</p>
                    <RiArrowDownSLine />
                </div>
            </div>
            <div className='flex gap-2 items-center mt-2'>
            <div className='w-10 h-10'>
                <Image src={guy} alt='profile pic' className='rounded-full'/>
            </div>
            <p className='font-semibold'>Joe Doe</p>
            <p>A beast of a car man!</p>
            </div>
            <div className='ml-12 text-gray-800 flex gap-2 items-center'>
                <h6 className='cursor-pointer'>Like</h6>
                <h6 className='cursor-pointer'>Reply</h6>
                <h6>46 minutes ago</h6>
            </div>
            <div className='flex gap-2 items-center mt-2'>
                <div className='w-10 h-10'>
                    <Image src={guy} alt='profile pic' className='rounded-full'/>
                </div>
                <p className='font-semibold'>Joe Doe</p>
                <p>Insane!</p>
            </div>
            <div className='ml-12 text-gray-800 flex gap-2 items-center'>
                <h6 className='cursor-pointer'>Like</h6>
                <h6 className='cursor-pointer'>Reply</h6>
                <h6>14 minutes ago</h6>
            </div>
            <div className='mt-4 flex items-center gap-2'>
                <div>
                    <Image src={guy} alt='profile pic' className='w-10 h-10 rounded-full'/>
                </div>
                <div className='flex justify-between items-center flex-grow text-gray-500'>
                    <input type="text" placeholder='Write a comment...' className='outline-0'/>
                    <div className='flex items-center gap-1'>
                        <AiOutlineCamera className='cursor-pointer' />
                        <AiOutlineGif className='cursor-pointer'/>
                        <BiSmile className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post