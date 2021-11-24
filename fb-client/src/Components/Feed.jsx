import React, { useState ,useEffect } from 'react';
import '../css/feed.css';
import { db } from './fb';
import MessageSender from './MessageSender';
import Posts from './Posts';
import StoryReel from './StoryReel';
// import {db} from './fb'
// import { collection, getDocs } from 'firebase/firestore/lite';

const Feed = () => {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })


  


}, []);


  return (
    <div className="feed">
    <StoryReel/>
   <MessageSender/>

   {
     posts.map(post =>{

     return <Posts photoURL={post.data.photoURL} image={post.data.image} username={post.data.username} timestamp="10:19" message={post.data.message} />

     })
   }
  
   
    </div>
  )
}

export default Feed
