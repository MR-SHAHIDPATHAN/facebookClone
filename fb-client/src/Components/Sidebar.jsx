import React from 'react';
import '../css/sidebar.css';
import SidebarOpitons from './SidebarOpitons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../context/StateProvider';

const Sidebar = () => {

  const [{user},dispatch]=useStateValue();
  return (
    <div className="sidebar">
       <SidebarOpitons  src={user.photoURL} title={user.displayName}/>
       <SidebarOpitons src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png" title="COVID-19 information Center"/>
       <SidebarOpitons src="https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Friends"/>
       <SidebarOpitons src="https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"title="Group"/>
       <SidebarOpitons src="https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch"/>
       <SidebarOpitons Icon= {ExpandMoreIcon} title="See More"/>
       
       
    </div>
  )
}

export default Sidebar
