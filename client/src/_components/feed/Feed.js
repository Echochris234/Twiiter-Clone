import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost, likePost,getAllPosts } from "./../../_actions/getPosts";
import { useHistory } from "react-router-dom";

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
    // function getPost(){
    //     dispatch(getAllPosts());
    // }
    console.log(props);
    const dispatch = useDispatch();
    const history = useHistory();

   const[post,setPost]=useState([]);

    
    const posts = useSelector((state) => state.handlePost) ||[]
    useEffect(() => {
        dispatch(getAllPosts());
    }, []);
    // getPost();
    let tweets = JSON.parse(localStorage.getItem('posts'));
    // const posts = useSelector((state) => state.handlePost) || [];
//    setPost(posts);
    console.log(tweets);
    

    // setPost(localStorage.getItem("post"));
   
    // JSON.parse(user).data.result._id




    return (
        
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>

           
           
            {/* TweetBox */}
            <TweetBox id={props.id} token={props.token}/>
           
        {/* {

            posts.map((tweet)=>{
               return <Post tweet={tweet} id={props.id} token={props.token} />
            })
        }        */}
            <Post tweet={tweets} tabName={props.tabName.toLowerCase()} id={props.id} token={props.token} />

         
            {/* <Post tabName={props.tabName} id={props.id} token={props.token}/> */}
           
            
          
  
        </div>
        
    )
    }
    



export default Feed;
