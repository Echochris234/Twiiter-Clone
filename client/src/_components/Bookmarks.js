import React from 'react'
import Sidebar from './sidebar/Sidebar.js'
import BookmarkFeed from './feed/BookmarkFeed.js'
import Widgets from './widgets/Widgets.js'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Bookmarks(props) {

    let userData = localStorage.getItem("userInfo");


    const id = JSON.parse(userData).result._id;
    const token = JSON.parse(userData).token;



   

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>

            <Sidebar />
            {/* Feed  userData={JSON.parse(userData).data.result}*/}

            <BookmarkFeed tabName={"Bookmarks"} id={id} token={token} />

            {/* Widgets */}
            {matches ? <Widgets /> : <></>}
            {/* <Widgets /> */}


        </>
    )
}

export default Bookmarks
