import React from 'react'
import Sidebar from './sidebar/Sidebar.js'
import Feed from './feed/Feed.js'
import Widgets from './widgets/Widgets.js'
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useDispatch } from "react-redux";
import { logout } from "./../_actions/auth.js"
import { Button } from "semantic-ui-react"

function Home(props) {

    let userData = localStorage.getItem("userInfo");


    const id = JSON.parse(userData).result._id;
    const token = JSON.parse(userData).token;

  

    const history=useHistory();
    const dispatch=useDispatch();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  
 


    return (
        <>

        <Sidebar />
            {/* Feed  userData={JSON.parse(userData).data.result}*/ }

        <Feed tabName={"Home"} id={id}  token={token} /> 

        {/* Widgets */ }
        {matches ? <Widgets /> : <></> }

        {/* <Widgets /> */}
            {/* <Button
                onClick={(e) => {

                    dispatch(logout(JSON.parse(localStorage.getItem("userInfo")).token));


                    history.push("/");


                }}
            >
                LOGOUT
            </Button> */}


    </>
    )
}

export default Home
