import React, { useRef } from 'react'
import Image from 'next/image'
import guy from '../assets/guy7.jpg'
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
import { useSession } from 'next-auth/react';
import { addDoc, collection ,serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'

const CreatePost = () => {
  const { data: session } = useSession()
  const captionRef = useRef() 

const uploadPost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      profileImg: session?.user?.image,
      username: session?.user?.name,
      caption: captionRef.current.value,
      timestamp: serverTimestamp(),
    });
  }
   
  return (
        <div className='bg-white flex flex-col gap-2 mt-4 p-4 rounded-sm'>
          <div className='flex items-center bg-white p-1 border-b'>
             <div className='w-11 h-11 mr-2'>
               <img src={session?.user?.image} className='rounded-full' alt='profile pic'/>
             </div>
             <input type='text' placeholder="What's on your mind?" ref={captionRef} className='outline-0'/>
             <div className='flex flex-1 items-center justify-end' >
              <button onClick={uploadPost} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Post</button>
             </div>
          </div>
          <div className='flex justify-between mt-2'>
                <div className='cursor-pointer flex gap-1 p-2 items-center border-none justify-center text-sm text-center transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400'>
                  <Image className='w-7 h-7' src={camera} alt='camera'/>
                  <p className='hidden sm:block'>Live Video</p>
                </div>
                <div className='cursor-pointer flex gap-1 p-2 items-center border-none justify-center text-sm text-center transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400'>
                  <Image className='w-7 h-7' src={photos} alt='photos'/>
                  <p className='hidden sm:block'>Photo/Video</p>
                </div>
                <div className='cursor-pointer  flex gap-1 p-2 items-center border-none justify-center text-sm text-center transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400'>
                  <Image className='w-7 h-7' src={smile} alt='camera'/>
                  <p className='hidden sm:block'>Feeling/Activity</p>
                </div>
              </div>
        </div>
  )
}

export default CreatePost