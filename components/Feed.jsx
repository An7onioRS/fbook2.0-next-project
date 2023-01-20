import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Stories from './Stories'
import CreatePost from './CreatePost'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className='flex bg-[#f2f3f7] bg-scroll'>
        <LeftSidebar /> 
        <div className='flex flex-col mx-2 lg:w-6/12 shadow-lg overflow-'>
          <Stories />
          <CreatePost />
          <Posts />
        </div>
        <RightSidebar />
    </div>
  )
}

export default Feed