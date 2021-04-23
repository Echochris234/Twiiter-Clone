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
    const id = props.id;
    const token= props.token;
    const dispatch = useDispatch();
    console.log(props)
    // let user=props.userData.userData._id
    const [post, setPost] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/posts/${id}`)
            .then(res => {

                const postData = res.data;

                setPost(postData);
            })

    }, [])

    useEffect(() => {
        dispatch(getPosts(props.id));
        console.log(dispatch(getPosts(props.id)))
    }, [id, localStorage.getItem("posts"), dispatch]);
    // const posts = useSelector((state) => state.getPosts.result) || [];
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>



            {/* TweetBox */}
            <TweetBox userData={props.id} token={props.token} />

            {post.map(tweet => {
                return (
                    <Post post={tweet} />

                )
            })}

        </div>
    )
}


export default ProfileFeed;
