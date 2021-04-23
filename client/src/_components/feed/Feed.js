import React, { useState,useEffect } from 'react';
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

function Feed(props) {
    const dispatch = useDispatch();

   const[post,setPost]=useState([]);

   useEffect(()=>{
       
           axios.get(`http://localhost:8000/posts/`)
               .then(res => {
                   
                   const postData = res.data;
                    
                   setPost(postData);
               })
       
   }, [])



   
    


    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>

           
           
            {/* TweetBox */}
            <TweetBox id={props.id} token={props.token}/>

            {post.map(tweet=>{
                return(
                    <Post post={tweet} id={props.id} token={props.token}/>
                    
                )
            })}
  
        </div>
    )
}


export default Feed;
