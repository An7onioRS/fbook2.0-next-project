import Image from "next/image";
import React, { useRef, useState } from "react";
import guy from "../assets/guy7.jpg";
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { db, storage } from "../firebase";
import nouser from "../assets/nouser.png";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
const CreatePost = () => {
  const { data: session } = useSession();
  const captionRef = useRef(null);
  console.log(captionRef);
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  console.log(image);
  const [loading, setLoading] = useState(false);

  //Create data post and add it to the collection
  const uploadPost = async () => {
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      profileImg: session?.user?.image,
      username: session?.user?.name,
      caption: captionRef.current.value,
      timestamp: serverTimestamp(),
    });
    //Path for the image
    const imagePath = ref(storage, `posts/${docRef.id}/image`);

    //Upload image to that adress
    //Then with the snapshot declare the download URL
    await uploadString(imagePath, image, "data_url").then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imagePath);
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    });
    setImage("");
    setLoading(false);
    captionRef.current.value = null;
  };

  //Add the image to state
  const addImageToState = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };
  return (
        <div className='bg-white flex flex-col gap-2 mt-4 p-4 rounded-sm'>
          <div className='flex items-center bg-white p-1 border-b'>
             <div className='w-11 h-11 mr-2'>
               <img src={session ? session?.user?.image : nouser.src} className='rounded-full' alt='profile pic'/>
             </div>
             <input type='text' placeholder="What's on your mind?" ref={captionRef} className='outline-0'/>
             <div className='flex flex-1 items-center justify-end' >
                <button onClick={uploadPost} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                {loading ? "Loading" : "Post"}
              </button>
             </div>
          </div>
          <div className="">
                  {image ? (    
                    <div className="" onClick={() => setImage("")}>
                      <img src={image} className="p-4" alt="" />
                    </div>
                  ) : (
                    ""
              )}
        </div>
          <div className='flex justify-between mt-2'>
              <div className='cursor-pointer flex gap-1 p-2 items-center border-none justify-center text-sm text-center transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400'>
                <Image className='w-7 h-7' src={camera} alt='camera'/>
                <p className='hidden sm:block'>Live Video</p>
              </div>
              <div onClick={() => imageRef.current.click()} className='cursor-pointer flex gap-1 p-2 items-center border-none justify-center text-sm text-center transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400'>
                <Image className='w-7 h-7' src={photos} alt='photos'/>
                <input className='hidden' type='file' ref={imageRef} onChange={addImageToState}/>
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