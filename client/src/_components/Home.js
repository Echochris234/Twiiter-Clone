import React from 'react'
import Sidebar from './sidebar/Sidebar.js'
import Feed from './feed/Feed.js'
import Widgets from './widgets/Widgets.js'
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Home(props) {

    let userData = localStorage.getItem("userInfo");

    console.log(JSON.parse(userData))
    // const tabName=props.location.state.tabName
    const id = JSON.parse(userData).result._id;
    const token = JSON.parse(userData).token;
    // console.log(id,token);
    console.log(props);


    const useStyles = makeStyles((theme) => ({
        icons: {


            [theme.breakpoints.down('md')]: {
                visibility: "hidden",



            },
        },
    }));

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    console.log(matches)
    const classes = useStyles();
    console.log(classes)

    return (
        <>

        <Sidebar />
            {/* Feed  userData={JSON.parse(userData).data.result}*/ }

        <Feed tabName={"Home"} id={id}  token={token} /> 

        {/* Widgets */ }
        {matches ? <Widgets /> : <></> }
        {/* <Widgets /> */}


    </>
    )
}

export default Home
