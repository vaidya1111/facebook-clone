import React,{useState} from 'react';
import '../CSS/MessageSender.css';
import { Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from '../FireBase/firebase';
import { collection, addDoc ,serverTimestamp  } from "firebase/firestore"; 

function MessageSender() {

    const [input,setInput]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const[{user},dispatch]=useStateValue();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await addDoc(collection(db, "posts"),{
            message: input,
            timestamp:serverTimestamp (),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
          });
        console.log(input);
        //some clever db stuff
        setInput("");
        setImageUrl("");
    }

    return (
        <div className='messageSender'>
           <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input className="messageSender__input"
                    placeholder={`What's on your mind ${user.displayName}`}
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}/>

                    <input placeholder={"imageURL (Optional)"}
                    value={imageUrl}
                    onChange={e=>setImageUrl(e.target.value)}/>

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
           </div>
           <div className="messageSender__bottom">
                <div className="messagesender__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messagesender__option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messagesender__option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
               
           </div>
        </div>
    )
}

export default MessageSender
