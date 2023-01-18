import React from 'react'
import facebookImg from '../assets/facebook1.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='ml-2 p-4'>
        {/* Left side */}
        <div className='flex items-center'>
            <div className='w-10 h-12'>
                <Image src={facebookImg}/>
            </div>
            <div className='ml-2'>
                <input type="text" placeholder='Search Facebook' className='soutline-0 bg-[#f2f3f7] p-2 rounded-full pl-4'/>
            </div> 
        </div>



        {/* Center */}
        {/* Right side */}
    </div>
  )
}

export default Header