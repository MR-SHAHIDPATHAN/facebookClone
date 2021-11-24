import React from 'react';
import '../css/rightside.css'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';


const RightSidebar = () => {
  
  return (
    <div className="widget">
        <div className="widget__header">
              <h4>Your pages</h4>
            <MoreHorizIcon className="top__icon"/>
        </div>

        <div className="widget__body">
          <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://scontent-tir2-1.xx.fbcdn.net/v/t1.6435-9/100474208_701719450604194_3126921961708453888_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-Mzgi4h1gdoAX8DM9NK&_nc_ht=scontent-tir2-1.xx&oh=46acdb8aa8f86687dc1e571c8518352a&oe=617EE31A" />
          <h4>Shahid Pathan</h4>
            
          </div>

          <div className="widget__bodyOptions">
          <NotificationsNoneIcon/>
          <p>1 notification</p>
            
          </div>

          <div className="widget__bodyOptions">
         <VolumeUpIcon/>
          <p>Create Promotionns</p>
            
          </div>



        </div>

        {/*    widget bottom secton start */}

        <div className="widget__bottom">
              <h4>Contacts</h4>
              <div className="bottom__icon">
            <VideoCallIcon/>
            <SearchIcon/>
            <MoreHorizIcon />
            </div>
        </div>

        {/* contact list */}


    
    
         
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://scontent-tir2-1.xx.fbcdn.net/v/t1.6435-9/100474208_701719450604194_3126921961708453888_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-Mzgi4h1gdoAX8DM9NK&_nc_ht=scontent-tir2-1.xx&oh=46acdb8aa8f86687dc1e571c8518352a&oe=617EE31A" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/809/1003/746/5bd05b41a772b-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/21/919/714/the-witcher-netflix-tv-series-tv-series-henry-cavill-orange-eyes-hd-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/311/483/580/hrithik-roshan-actor-jacket-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/151/555/625/salman-khan-jacquelina-fernandez-bollywood-actors-bollywood-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/30/723/802/male-celebrities-shahid-kapoor-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/130/21/234/pose-actor-torso-muscle-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/517/908/1007/actors-twilight-twilight-robert-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/663/346/553/female-celebrities-genelia-d-souza-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/769/60/939/tamanna-bhatia-actress-model-dancer-wallpaper-preview.jpg" />
          <h4>Shahid Pathan</h4>
            
          </div>

    
         <div className="widget__bodyOptions">
          <Avatar alt="Shahid Pathan" src="https://c4.wallpaperflare.com/wallpaper/670/447/685/shah-rukh-khan-indian-actor-4k-5k-wallpaper-preview.jpg" />
          <h4>
            the rock
          </h4>
            
          </div>

    


    </div>
  )
}

export default RightSidebar;
