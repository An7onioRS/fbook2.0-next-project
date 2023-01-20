import React from 'react'
import Image from 'next/image'
import therock from "../assets/therock.jpg";
import therock2 from "../assets/therock2.webp";
import therock20 from "../assets/therock20.jpg";
import mike from "../assets/1miketyson.jpg";
import mikeprofile from "../assets/mikeprofile.webp";
import mrbeastbackground from "../assets/mrbeastbackground.webp";
import mrbeast from "../assets/1mrbeast.jpg";
import kobebackground from "../assets/kobebackground.jpg";
import kobe from "../assets/1kobe.webp";
import arnoldbackground from "../assets/arnoldbackground.webp";
import arnold from "../assets/1arnold.jpg";

const Stories = () => {
    const stories = [
        {
            profile: mikeprofile,
            background: mike
        },
        {
            profile: mrbeast,
            background: mrbeastbackground
        },
        {
            profile: kobe,
            background: kobebackground
        },
        {
            profile: arnold,
            background: arnoldbackground
        },
        {
            profile: therock,
            background: therock20
        }
    ]   
    
  return (
    <div className='flex items-center space-x-2 mt-4 p-2 bg-[#ffffff] h-36 sm:h-44'>
        {stories.map((story) => ( 
            <div key={story.uid} className='relative flex flex-1 w-[4.6] h-32 sm:w-24 sm:h-36'>
                <Image className='object-fill rounded-[1rem]' src={story.background} alt='celebrity'/>
                <div className='flex absolute top-1 left-1 w-9 h-9 p-1 rounded-full bg-blue-500'>
                    <Image className='rounded-full object-cover' src={story.profile} alt='celebrity profile pic'/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Stories