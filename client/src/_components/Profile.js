import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from './Header.js'
import Sidebar from './sidebar/Sidebar.js'
import ProfileFeed from './feed/ProfileFeed.js'
import Widgets from './widgets/Widgets.js'



import { useDispatch } from "react-redux";

function Profile( props) {


  console.log(props);


  return (
  
    
   <>
      <Sidebar />
      <ProfileFeed tabName={"Profile"} id={props.id} token={props.token} />
      <Widgets/>
    </>

   
      
      
      
     
   
    
  );
}

export default Profile;
