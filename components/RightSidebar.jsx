import React from 'react'
import albert from "../assets/1albert.jpg";
import arnold from "../assets/1arnold.jpg";
import drphil from "../assets/1drphil.webp";
import elon from "../assets/1elon.webp";
import kobe from "../assets/1kobe.webp";
import miketyson from "../assets/1miketyson.jpg";
import mrbeast from "../assets/1mrbeast.jpg";
import rihana from "../assets/1rihana.jpg";
import therock from "../assets/1rock.jpg";
import Link from 'next/link';

import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import dots from "../assets/dots.png";
import Image from "next/image";


const RightSidebar = () => {
  return (
    <div className="relative">
        <div className='hidden sm:flex flex-col gap-4 my-4 px-7 py-2 flex-1 fixed'>
        <h1 className='w-2/12 hidden sm:block text-gray-500 font-bold'>Birthdays</h1>
        <div className='flex items-center gap-1'>
            <AiFillGift className='h-8 w-8'/>
            <p className='text-sm'><Link href='#' className='font-bold'>Margaret Deen's</Link> birthday is today.</p>
        </div>
        <div className='border-b-2 border-gray-300'></div>
        <div className='flex justify-between items-center'>
            <h1 className='w-2/12 hidden sm:block text-gray-500 font-bold'>Contacts</h1>
            <div className='flex gap-2 items-center'>
                <BsFillCameraVideoFill />
                <FiSearch />
                <div>
                    <Image src={dots} alt='dots' className='w-6 h-6'/>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={albert} alt='albert'/>
            </div>
            <p>Albert Einstein</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={arnold} alt='albert'/>
            </div>
            <p>Albert Einstein</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={drphil} alt='albert'/>
            </div>
            <p>Dr Phill</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={elon} alt='albert'/>
            </div>
            <p>Elon Musk</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={kobe} alt='albert'/>
            </div>
            <p>Kobe Bryant</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={miketyson} alt='albert'/>
            </div>
            <p>Mike Tyson</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={mrbeast} alt='albert'/>
            </div>
            <p>Mr Beast</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={rihana} alt='albert'/>
            </div>
            <p>Rihanna</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10'>
                <Image className='rounded-full h-full' src={therock} alt='albert'/>
            </div>
            <p>Dwayne Johnson</p>
        </div>
    </div>
    </div>
  )
}

export default RightSidebar