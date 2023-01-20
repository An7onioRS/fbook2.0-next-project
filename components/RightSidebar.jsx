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
    const contacts = [
        {
            name: 'Albert Einstein',
            profilePic: albert
        },
        {
            name: 'Arnold Schwarzenegger',
            profilePic: arnold
        },
        {
            name: 'Dr. Phill',
            profilePic: drphil
        },
        {
            name: 'Elon Musk',
            profilePic: elon 
        },
        {
            name: 'Kobe Bryant',
            profilePic: kobe
        },
        {
            name: 'Mike Tyson',
            profilePic: miketyson
        },
        {
            name: 'Mr. Beast',
            profilePic: mrbeast 
        },
        {
            name: 'Rihanna',
            profilePic: rihana 
        },
        {
            name: 'Dwayne Johnson',
            profilePic: therock
        },
    ]

  return (
    <div className="relative">
        <div className='hidden lg:flex flex-col gap-4 my-4 px-7 py-2 flex-1 fixed'>
        <h1 className='w-2/12 hidden sm:block text-gray-500 font-bold'>Birthdays</h1>
        <div className='flex items-center gap-1'>
            <AiFillGift className='h-8 w-8'/>
            <p className='text-sm'><Link href='#' className='font-bold'>Margaret Deen's</Link> birthday is today.</p>
        </div>
        <div className='border-b-2 border-gray-300'></div>
            <div className='flex justify-between items-center'>
                <h1 className='w-2/12 hidden sm:block text-gray-500 font-bold'>Contacts</h1>
                <div className='flex gap-2 items-center'>
                    <BsFillCameraVideoFill className='cursor-pointer' />
                    <FiSearch className='cursor-pointer' />
                    <div className='cursor-pointer'>
                        <Image src={dots} alt='dots' className='w-6 h-6'/>
                    </div>
                </div>
            </div>
            {
                contacts.map(contact => (
                    <div key={contact.name} className='flex items-center gap-2 cursor-pointer'>
                        <div className=' relative w-10 h-10'>
                            <Image className='rounded-full h-full' src={contact.profilePic} alt='albert'/>
                            <div className='w-3 h-3 absolute bg-green-500 bottom-0 right-1 rounded-full p-1 border border-white border-3'></div>
                        </div>
                        <p>{contact.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RightSidebar