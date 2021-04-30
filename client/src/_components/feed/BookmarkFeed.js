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
import BookmarkPost from '../post/BookmarkPost.js'

const axios = require('axios');

function BookmarkFeed(props) {
    
    const id = props.id;
    const token = props.token;
    // const dispatch = useDispatch();

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>



            {/* TweetBox */}
            <TweetBox tabName={props.tabName.toLowerCase()} userData={id} token={token} />
      
            {/* Post that are bookmarked */}
            <BookmarkPost tabName={props.tabName.toLowerCase()} id={props.id} token={props.token} />
        </div>
    )
}


export default BookmarkFeed;
