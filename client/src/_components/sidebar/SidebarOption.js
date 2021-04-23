import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './SidebarOption.css'
// sidebarOptions is the functionality of the sidebar since they all
// turn blue on hover only difference is the icon and text
// passing components as props[icons]
function SidebarOption({active,text,Icon}) {


    console.log(Icon)
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
    
            <Icon />
            <h2>{text}</h2>
            
        </div>
    );
}

export default SidebarOption
