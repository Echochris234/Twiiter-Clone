import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"; 
import { getPosts, deletePost, likePost } from "./../../_actions/getPosts";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { Button, Segment } from "semantic-ui-react";

// import { Link } from "react-router-dom";
// import { getPosts, deletePost, likePost } from "../../_actions/getPosts";
// import { Item, Icon } from "semantic-ui-react";

import ProfileTweetBox from './ProfileTweetbox.js'
import './Feed.css'
import Post from '../post/Post.js'

const axios = require('axios');

function ProfileFeed(props) {
console.log(props);
    const id = props.id;
    const token= props.token;
    const dispatch = useDispatch();

    

 
    
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>



            {/* TweetBox */}
            <ProfileTweetBox tabName={props.tabName.toLowerCase()} name={props.name} userData={id} token={token} />
            {/* <h2 style={{paddingLeft:20+"px"}}>{props.name}</h2> */}
{/*

            {post.map(tweet => {
                return (
                    <Post post={tweet} />

                )
            })} */}
            <Post tabName={props.tabName.toLowerCase()} id={props.id} token={props.token} />
        </div>
    )
}


export default ProfileFeed;
