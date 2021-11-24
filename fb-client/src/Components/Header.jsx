import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../css/Header.css'
import { useStateValue } from '../context/StateProvider';

const Header = () => {

const [{user},dispatch] = useStateValue();



  return (
    <div className="header">
        <div className="header__left">
          <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="facebook-logo" />

          <div className="header__search">
          <SearchIcon />
          <input type="text" className="inputfield" placeholder="Search" />
          </div>
          
        </div>

        <div className="header__middle">
          <div className="header__options header__options--active">
            <HomeIcon fontSize="large"/>
          </div>

          <div className="header__options">
            <OndemandVideoIcon fontSize="large"/>
          </div>

          <div className="header__options">
            <GroupIcon fontSize="large"/>
          </div>

          <div className="header__options">
            <SportsEsportsIcon fontSize="large"/>
          </div>

        </div>

        <div className="header__right">
          <div className="header__info">
            <Avatar src={user.photoURL}/>
            <h4>{user.displayName}</h4>
          </div>

         <IconButton>   
            <AppsIcon/>
          </IconButton> 

        <IconButton>   
            <MessageIcon/>
        </IconButton> 

       <IconButton>   
          <NotificationsIcon/>
        </IconButton> 

       <IconButton>   
          <ArrowDropDownIcon/>
        </IconButton> 

        
        </div>
    </div>
  )
}

export default Header
