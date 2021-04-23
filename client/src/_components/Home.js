import React from 'react'
import Sidebar from './sidebar/Sidebar.js'
import Feed from './feed/Feed.js'
import Widgets from './widgets/Widgets.js'
import { useHistory } from "react-router-dom";

function Home(props) {
    // let loggedIn;
    // let userName = "";
    // let userData = localStorage.getItem("userData");
    // if (userData) {
    //     loggedIn = true;
    //     userName += `, ${JSON.parse(userData).data.result.name}`;
    // } else {
    //     loggedIn = false;
    // }

    console.log(props)
    return (
        <>
    <Sidebar />
          {/* Feed  userData={JSON.parse(userData).data.result}*/ }

    <Feed tabName={"Home"} id={props.id}  token={props.token} /> 

    {/* Widgets */ }
    <Widgets />
    </>
    )
}

export default Home
