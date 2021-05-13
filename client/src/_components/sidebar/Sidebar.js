import React  from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import {Link } from 'react-router-dom';




function Sidebar() {

 
 

    
    return (
    
            <div >
            {/* <Grid container> */}
            <Link to="/" style={{ textDecoration: 'none' }} className="text-dark">
                <TwitterIcon className="sidebar__twitterIcon" />
                {' '}
                        
            </Link>
            {/* <TwitterIcon className="sidebar__twitterIcon"/> */}

            <Link to="/home" style={{ textDecoration: 'none' }} className="text-dark">
                <SidebarOption active text="Home" Icon={HomeIcon} />
                {' '}

            </Link>
            {/* <SidebarOption active text="Home" Icon={HomeIcon} /> */}

            <Link to="/explore" style={{ textDecoration: 'none', color: '#50b7f5' }} className="text-dark">
                <SidebarOption text="Explore" Icon={SearchIcon} />
                {' '}

            </Link>
            {/* <SidebarOption text="Explore" Icon={SearchIcon} /> */}

            <Link to="/notifications" style={{ textDecoration: 'none', color: '#50b7f5' }} className="text-dark" disabled="true">
                <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
                {' '}

            </Link>
            {/* <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/> */}

            <Link to="/messages" style={{ textDecoration: 'none', color: '#50b7f5' }} className="text-dark" disabled="true">
                <SidebarOption text="Messages" Icon={MailOutlineIcon} />
                {' '}

            </Link>
            {/* <SidebarOption text="Messages" Icon={MailOutlineIcon}/> */}

            <Link to="/bookmarks" style={{ textDecoration: 'none', color: '#50b7f5' }} className="text-dark">
                <SidebarOption active text="BookMarks" Icon={BookmarkBorderIcon} />
                {' '}

            </Link>
            {/* <SidebarOption text="BookMarks" Icon={BookmarkBorderIcon}/> */}
            <Link to="/lists" style={{ textDecoration: 'none', color: '#50b7f5' }} className="text-dark " >
                <SidebarOption text="Lists" Icon={ListAltIcon} />
                {' '}

            </Link>
            
            {/* <SidebarOption text="Lists" Icon={ListAltIcon}/> */}

            <Link to="/profile" style={{ textDecoration: 'none', color: '#50b7f5' }} >
                <SidebarOption active text="Profile" Icon={PermIdentityIcon} />
                {' '}
            </Link>

            {/* <SidebarOption text="Profile" Icon={PermIdentityIcon}/> */}

            <SidebarOption text="More" Icon={MoreHorizIcon} />
           
           
        </div>
        
    
    
    )
}

export default Sidebar
