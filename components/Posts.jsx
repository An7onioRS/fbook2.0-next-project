import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import React, { useEffect, useState } from 'react'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])
  console.log(posts)

  useEffect(() => {
    const unSubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
        setPosts(snapshot.docs)
      }
    )
    
    return () => {
      unSubscribe()
    }
  }, [db])

  return (
    <div>
        {posts.map(post => {
          return (
            <Post 
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            caption={post.data().caption}
            timestamp={post.data().timestamp}
          />
          )
        })}
    </div>
  )
}

export default Posts