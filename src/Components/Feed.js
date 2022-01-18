import React,{useState,useEffect} from 'react';
import '../CSS/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db,{collection, getDocs} from '../FireBase/firebase';
import { doc, onSnapshot,orderBy,query } from "firebase/firestore";

function Feed() {
    const[posts,setPosts]=useState([]);

    useEffect(() => {
       const querySnapFunc=async()=>{
           const q=query(collection(db, "posts"),orderBy("timestamp","desc"));
           const querySnapshot = await getDocs(q);
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    setPosts(querySnapshot.docs.map((doc)=> ({id:doc.id,data:doc.data()})));
              });
        }
        querySnapFunc();
    }, []);

    return (
        <div className='feed'>
           <StoryReel/>
           <MessageSender/>
           {posts.map((post)=>{
               return(
                   <Post
                   key={post.id}
                   profilePic={post.data.profilePic}
                   message={post.data.message}
                   timestamp={post.data.timestamp}
                   username={post.data.username}
                   image={post.data.image} />
                     
               )
           })}
        </div>
    )
}

export default Feed;
