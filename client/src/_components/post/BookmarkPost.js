import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPosts, deletePost, likePost, getAllPosts } from "./../../_actions/getPosts";
import { getBookmarks, addBookmark, removeBookmark } from "./../../_actions/bookmarks";

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './Post.css'
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import { Item, Icon, Button } from "semantic-ui-react";
function BookmarkPost(props) {
    const id = props.id;
    const token = props.token;
    const tweets = props.tweet;
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(props);

    useEffect(() => {
        console.log("IM IN BOOKMARKS");
        dispatch(getBookmarks(id, token));
    }, [id, token, dispatch]);

    // let posts;
    let posts = useSelector((state) => state.bookmarks.bookmarks) || []

    // const dbInfo = useSelector((state) => state) || []
    // if(props.tabName==="home" || props.tabName==="profile"){
    //     posts= dbInfo.handlePost.postData;
    // }else if(props.tabName==="bookmarks"){
    //     posts=dbInfo.bookmarks.bookmarks
    // }

    // console.log(posts, props.tabName);
    console.log("bookmarkPost", posts);

    return (

        // <></>
        <>
            {posts.length !== 0 ? (
                <>
                    {posts.map((post) => {
                        return (

                            <div className="post">
                                <div className="post__avatar">
                                    <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className="post__body">
                                    <div className="post__header">
                                        <div className="post__headerText">
                                            <h3>

                                                {post.author.name}
                                                <span className="post_headerSpecial">
                                                    <VerifiedUserIcon className="post_badge" /> @{post.author.email}
                                                </span>
                                            </h3>

                                        </div>

                                        <div className="post__headerDescription">
                                            <p>
                                                {post.article}
                                            </p>

                                        </div>

                                        {/* <img src="https://images.unsplash.com/photo-1518965493882-35b838ace024?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s" alt=""/> */}

                                        <div className="post__footer">
                                            <ChatBubbleOutlineIcon fontSize="small" />

                                            {/* {post.author._id === id ? <Button
                                                onClick={(e) => {
                                                    dispatch(deletePost(post._id, token));
                                                    history.push(`/${props.tabName}`)
                                                }}
                                            >
                                                <RepeatIcon fontSize="small" />Delete
                      </Button> : <></>} */}


                                            {/* <FavoriteBorderIcon fontSize="small"/>{props.post.likes.length} */}
                                            <Button disabled="true"
                                                onClick={(e) => {
                                                    dispatch(likePost(post._id, token));
                                                    // history.push(`/${props.tabName}`) 
                                                    // window.location.reload(false); 

                                                }}
                                            >
                                                <FavoriteBorderIcon fontSize="small" style={{color:"red"}} /> Likes:  {post.likes.length}
                                            </Button>

                                            {/* {post.likes.length} */}
                                            {/* {props.tabName !== "bookmarks" ? <Button
                                                onClick={(e) => {
                                                    dispatch(addBookmark(id, post, token));
                                                }}
                                            >
                                                <PublishIcon fontSize="small" /> Bookmark
                                 </Button>
                                                :

                                                <Button
                                                    onClick={(e) => {
                                                        dispatch(removeBookmark(id, post, token));
                                                    }}
                                                >
                                                    <PublishIcon fontSize="small" /> Unbookmark
                                 </Button>
                                            } */}
                                            <Button
                                                onClick={(e) => {
                                                    dispatch(removeBookmark(id, post, token));
                                                }}
                                            >
                                                <BookmarkBorderIcon fontSize="small" style={{ color: "blue" }} /> Unbookmark
                                            </Button>



                                        </div>
                                    </div>


                                </div>

                            </div>
                        );
                    })}

                </>
            ) :
                <>
                    {/* <h1>NO POST FOUND</h1> */}
                    <></>

                </>


            }
        </>


    );





}

export default BookmarkPost
