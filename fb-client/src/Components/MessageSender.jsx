import { Avatar, Button, IconButton, Modal } from '@mui/material';
import React, { useState } from 'react';
import '../css/messageSender.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import { useStateValue } from '../context/StateProvider';
import { db, storage } from './fb';
import firebase from 'firebase';

const MessageSender = () => {
  const [{user},dispatch]=useStateValue();

  const [open , setOpen] = useState(false);
  const [image ,setImage] = useState("");
  const [ message , setMessage] = useState("");
  const [progress , setProgress] = useState(0);



  const uploadFilewithClick = () =>{
    document.getElementById("imageFile").click();


  }

  const handleChange = (e) =>{
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }
    // console.log(image);

  }


  const handleUpload =(e) =>{
    e.preventDefault();
    if(image === ""){
      db.collection("posts").add({
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        message:message,
        username :user.displayName,
        photoURL:user.photoURL

      })
    }
    else{

      const uploadTask =storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot)=>{
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) *100);
          setProgress(progress);

        },
        (error)=>{
          console.log(error);
        },
        ()=>{
          storage.ref("images").child(image.name).getDownloadURL().then(url=>{
            db.collection("posts").add({
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
              message:message,
              username :user.displayName,
              photoURL:user.photoURL,
              image:url
      
            });
            handleClose();
            setProgress(0);
            setImage("");

        

            

          })
        }
      )
      
    }
   
  }




const handleClose =()=>{
  setOpen(false)

}

const handleOpen =() =>{
  setOpen(true)

}



  return (

    <>

    <Modal open={open} onClose={handleClose} >
        <div className="model__pop">
          <form >
            <div className="model__headding">
              <h3>Create Post </h3>
                <CloseIcon
                onClick={handleClose}
                 className="close__icon" />
            
            </div> 



            <div className="modelHeader__top">
              <Avatar src={user.photoURL}/>
              <h5>{user.displayName}</h5>
 
           </div>
            <div className="model__body">
              <textarea rows="5" placeholder={`What's on your mind , ${user.displayName}?`} onChange={e=>setMessage(e.target.value)}></textarea>
            </div>

            <div className="model__footer">
              <div className="footer__left">
                <h4>Upload Your Post</h4>
              </div>
              <div className="footer__right">
              <IconButton  onClick={uploadFilewithClick}>


                <PhotoLibraryIcon className="midIcn" fontSize="large" style={{color:"green"}} />
              </IconButton>

              <input type="file" id="imageFile" onChange={handleChange} style={{display:"none"}}/>
              
              <IconButton>
                <VideoCallIcon className="midIcn" fontSize="large" style={{color:"red"}}/>
              </IconButton>
              
              <IconButton>
                <InsertEmoticonIcon className="midIcn" fontSize="large" style={{color:"orange"}}/>
              </IconButton>
              
              </div>

              
            </div>

                 
          {   image!== "" &&  <h3 className="image_selected"> Image Selected Successfully </h3>}


            {
              progress!= "" && <progress value={progress} max="100" style={{"width":"100%","marginBottom":"20px"}} />
            }

            <Button type="submit" onClick={handleUpload} className="post__submit" value="Post">Post </Button>

          </form>
        </div>
     </Modal> 
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input 
          type="text" 
          onClick={handleOpen}
          placeholder={`What's on your mind , ${user.displayName}?`} />
        </form>
      </div>

      <div className="messageSender__bottom">
          <div className="messangerOptions">
           <VideoCallIcon  style={{color:"red"}} fontSize="large"/>
           <p>Live Video</p>

          </div>
          <div className="messangerOptions">
           <PhotoLibraryIcon style={{color:"green"}} fontSize="large"/>
           <p>Photo/Video</p>

          </div>
          <div className="messangerOptions">
           <InsertEmoticonIcon style={{color:"orange"}} fontSize="large"/>
           <p>Feeling/Activity</p>

          </div>


      </div>




    
    </div>
    </>
  )
}

export default MessageSender
