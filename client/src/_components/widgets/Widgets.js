import React from 'react'
import './Widgets.css';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"
import Grid from "@material-ui/core/Grid"
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Widgets() {
    // {/* A few plug ins will be used whats happening who to follow
    //         React Twitter */}

    // {/* Twitter Timeline
    //             Twitter ShareButton
    //             Twitter Tweet embed */}




    // const useStyles = makeStyles((theme) => ({
    //     icons: {


    //         [theme.breakpoints.down('sm')]: {
    //             visibility: "hidden",



    //         },
    //     },
    // }));

    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down('sm'));
    // console.log(matches)
    // const classes = useStyles();
    // console.log(classes)


    return (
        <Grid container >
            <div className={` widgets `} >
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

                <div className={`widgets__widgetContainer `}>
                <h2>What's happening</h2>
                    {/* {matches ? <></> : <TwitterTweetEmbed tweetId={"932586791953158144"} /> } */}
            <TwitterTweetEmbed tweetId={"932586791953158144"}  />
                {/* <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="random"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"Google.com"}
                    options={{ text: "reactjs is awesome", via: "random" }}
                /> */}
            </div>
            
        </div>
        </Grid>
    
    
    )}

export default Widgets
