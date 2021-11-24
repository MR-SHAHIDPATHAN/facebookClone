import React from 'react';
import '../css/posts.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import { useStateValue } from '../context/StateProvider';

const Posts = ({photoURL,image,username,timestamp,message}) => {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="post">
        <div className="post__top">
        <div className="post__Topleft">
         <Avatar src={photoURL}/>
         <div className="postInfo">
           <h4>{username}</h4>
           <p>{timestamp} <PublicIcon/></p>
         
         </div>

          
          </div>
          <MoreHorizIcon/>
         
        </div>

      {/* middle secton start */}

      <div className="post__middle">
        <p>{message}</p>
       {  image && <img src={image} />}
      </div>


{/* bottom section start */}
      <div className="post__bottom">
         <div className="post__bottomOption">
           <ThumbUpIcon/> <p>Likes</p>


         </div>
         <div className="post__bottomOption">
           <ModeCommentIcon/> <p>Commnets</p>


         </div>
         <div className="post__bottomOption">
           <ShareIcon/> <p>Share</p>


         </div>

      </div>






    </div>
  )
}

export default Posts
