
import React from "react";
import Follow from "./Follow.js";
import { Avatar } from "@material-ui/core"

import './Tweetbox.css'



function ProfileTweetbox(props) {
    
   
    const profileId = props.userData;
    

    let loggedInId = JSON.parse(localStorage.getItem("userInfo")).result._id;
    console.log(loggedInId)
    console.log(profileId)

    return (
        <div className="tweetBox">
            
            
            <div className="tweetBox__input">
                <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                
                <h3 style={{paddingRight:20+"px"}}>{props.name}</h3>
                <Follow id={profileId} />
               

            </div>
        </div>
    )
}

export default ProfileTweetbox
