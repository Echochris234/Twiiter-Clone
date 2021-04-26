import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"; 
import { getPosts, deletePost, likePost } from "./../../_actions/getPosts";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { Button, Segment } from "semantic-ui-react";

// import { Link } from "react-router-dom";
// import { getPosts, deletePost, likePost } from "../../_actions/getPosts";
// import { Item, Icon } from "semantic-ui-react";

import TweetBox from './Tweetbox.js'
import './Feed.css'
import Post from '../post/Post.js'

const axios = require('axios');

function ProfileFeed(props) {
console.log(props);
    const id = props.id;
    const token= props.token;
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getPosts(id));
    }, [localStorage.getItem("userPosts"), dispatch]);

    // const img = useSelector((state) => {console.log(state)})
    
    // const posts = useSelector((state) => state.handlePost) || [];

    // console.log(posts);
    // console.log(posts)
    let tweets = JSON.parse(localStorage.getItem('userPosts'));
    // const posts = useSelector((state) => state.handlePost) || [];
    //    setPost(posts);
    console.log(tweets);
 
    
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>



            {/* TweetBox */}
             <TweetBox userData={id} token={token} />
{/*
            {post.map(tweet => {
                return (
                    <Post post={tweet} />

                )
            })} */}
            <Post tweet={tweets} tabName={props.tabName.toLowerCase()} id={props.id} token={props.token} />
        </div>
    )
}


export default ProfileFeed;
