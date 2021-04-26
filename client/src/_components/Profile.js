import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from './Header.js'
import Sidebar from './sidebar/Sidebar.js'
import ProfileFeed from './feed/ProfileFeed.js'
import Widgets from './widgets/Widgets.js'



import { useDispatch } from "react-redux";

function Profile( props) {
  let userData = localStorage.getItem("userInfo");

  console.log(JSON.parse(userData))
  // const tabName=props.location.state.tabName
  const id = JSON.parse(userData).result._id;
  const token = JSON.parse(userData).token;

  // window.location.reload();
  console.log(props);


  return (
  
    
   <>
      <Sidebar />
      <ProfileFeed tabName={"Profile"} id={id} token={token} />
      <Widgets/>
    </>

   
      
      
      
     
   
    
  );
}

export default Profile;
