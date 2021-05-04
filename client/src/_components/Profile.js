import React from "react";


import Sidebar from './sidebar/Sidebar.js'
import ProfileFeed from './feed/ProfileFeed.js'
import Widgets from './widgets/Widgets.js'
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';





function Profile( props) {
  let userData = localStorage.getItem("userInfo");

  // console.log(JSON.parse(userData))
  
  const id = JSON.parse(userData).result._id;
  const token = JSON.parse(userData).token;


  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));


  return (
  
    
   <>
      <Sidebar />
      <ProfileFeed tabName={"Profile"} id={id} token={token} />
      {matches ? <Widgets /> : <></>}
    </>

   
      
      
      
     
   
    
  );
}

export default Profile;
