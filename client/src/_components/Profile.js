import React from "react";


import Sidebar from './sidebar/Sidebar.js'
import ProfileFeed from './feed/ProfileFeed.js'
import Widgets from './widgets/Widgets.js'
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';





function Profile( props) {
  let userData = localStorage.getItem("userInfo");

  // console.log(JSON.parse(userData))
  
  // if (props.location.state){
  //     console.log(props.location.state.id); 
  // }
  const id = JSON.parse(userData).result._id;
  // const profId = props.location.state.id;
  const token = JSON.parse(userData).token;


  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));


  return (
  
    
   <>
      <Sidebar />
      {props.location.state ? <ProfileFeed tabName={"Profile"} id={props.location.state.id} name={props.location.state.name} token={token} /> : <ProfileFeed tabName={"Profile"} id={id} name={JSON.parse(userData).result.name} token={token} /> }
      {/* <ProfileFeed tabName={"Profile"} id={id} token={token} /> */}
      {matches ? <Widgets /> : <></>}
    </>

   
      
      
      
     
   
    
  );
}

export default Profile;
