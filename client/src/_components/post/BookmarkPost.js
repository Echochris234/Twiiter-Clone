import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  likePost} from "./../../_actions/getPosts";
import { getBookmarks,removeBookmark } from "./../../_actions/bookmarks";

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './Post.css'
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


import {  Button } from "semantic-ui-react";

import ReactHtmlParser from 'react-html-parser';
import Autolinker from 'autolinker';
function BookmarkPost(props) {
    const id = props.id;
    const token = props.token;
    // const tweets = props.tweet;
    const dispatch = useDispatch();
    // const history = useHistory();

    var autolinker = new Autolinker({
        urls: {
            schemeMatches: true,
            wwwMatches: true,
            tldMatches: true
        },
        email: true,
        phone: true,

        stripPrefix: true,
        stripTrailingSlash: true,
        newWindow: true,

        truncate: {
            length: 0,
            location: 'end'
        },

        className: ''
    });


    console.log(props);

    useEffect(() => {
        
        dispatch(getBookmarks(id, token));
    }, [id, token, dispatch]);

    
    let posts = useSelector((state) => state.bookmarks.bookmarks) || []


    
    let linkPost;
    return (

        
        <>
            {posts.length !== 0 ? (
                <>
                    {posts.map((post) => {
                        linkPost = autolinker.link(post.article);
                        return (

                            <div className="post">
                                <div className="post__avatar">
                                    <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div className="post__body">
                                    <div className="post__header">
                                        <div className="post__headerText">
                                            <h3>


                                                <Link
                                                    to={{
                                                        pathname: `/profile/`,
                                                        state: {
                                                            id: post.author._id,
                                                            token: token,
                                                        },
                                                    }}
                                                >
                                                    {post.author.name}
                                                </Link>
                                                <span className="post_headerSpecial">
                                                    <VerifiedUserIcon className="post_badge" /> @{post.author.email}
                                                </span>
                                            </h3>

                                        </div>

                                        <div className="post__headerDescription">
                                            <p>
                                                {ReactHtmlParser(linkPost)}
                                            </p>

                                        </div>

                                        {/* <img src="https://images.unsplash.com/photo-1518965493882-35b838ace024?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s" alt=""/> */}

                                        <div className="post__footer">
                                            <ChatBubbleOutlineIcon fontSize="small" />

                                            


                                          
                                            <Button disabled="true"
                                                onClick={(e) => {
                                                    dispatch(likePost(post._id, token));
                                                   
                                                }}
                                            >
                                                <FavoriteBorderIcon fontSize="small" style={{color:"red"}} /> Likes:  {post.likes.length}
                                            </Button>

                                          
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
                    <></>

                </>


            }
        </>


    );





}

export default BookmarkPost
