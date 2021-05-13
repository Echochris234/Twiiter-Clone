import React from 'react'
import Sidebar from './sidebar/Sidebar.js'
import Feed from './feed/Feed.js'
import Widgets from './widgets/Widgets.js'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Home(props) {

    let userData = localStorage.getItem("userInfo");


    const id = JSON.parse(userData).result._id;
    const token = JSON.parse(userData).token;


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  
 


    return (
        <>

        <Sidebar />
            

        <Feed tabName={"Home"} id={id}  token={token} /> 

        {matches ? <Widgets /> : <></> }

        

    </>
    )
}

export default Home
