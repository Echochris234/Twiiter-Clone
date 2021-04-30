import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost, likePost,getAllPosts } from "./../../_actions/getPosts";
import { useHistory } from "react-router-dom";
import { getBookmarks } from "./../../_actions/bookmarks";

// import { useDispatch } from "react-redux";
// import { Button, Segment } from "semantic-ui-react";

// import { Link } from "react-router-dom";
// import { getPosts, deletePost, likePost } from "../../_actions/getPosts";
// import { Item, Icon } from "semantic-ui-react";

import TweetBox from './Tweetbox.js'
import './Feed.css'
import Post from '../post/Post.js'

const axios = require('axios');

function Feed(props) {

    console.log(props);
    let id =props.id;
    let token=props.token;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
            dispatch(getBookmarks(id, token))
        ;
    }, [id, token, dispatch]);


    // const posts = useSelector((state) => state.handlePost.postData) || []
    const dbInfo = useSelector((state) => state) || []
    console.log(dbInfo, "Bookmarks")


    return (
        
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>

           
           
            {/* TweetBox */}
            <TweetBox tabName={props.tabName.toLowerCase()} id={props.id} token={props.token}/>
           
        {/* {

            posts.map((tweet)=>{
               return <Post tweet={tweet} id={props.id} token={props.token} />
            })
        }        */}
            <Post  tabName={props.tabName.toLowerCase()} id={props.id} token={props.token} />

         
            {/* <Post tabName={props.tabName} id={props.id} token={props.token}/> */}
           
            
          
  
        </div>
        
    )
    }
    



export default Feed;
