import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPosts, deletePost, likePost, getAllPosts } from "./../../_actions/getPosts";
import { getBookmarks, addBookmark, removeBookmark } from "./../../_actions/bookmarks";


import './Post.css'
import { Avatar} from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import axios from 'axios';
import { Item, Icon, Button } from "semantic-ui-react";


function Post(props) {
    const id= props.id;
    const token =props.token;
    const tweets=props.tweet;
    const dispatch = useDispatch();
    const history = useHistory();
console.log(props);

    useEffect (()=>{
        if(props.tabName==="home"){
            dispatch(getAllPosts());

        }else if(props.tabName==="profile"){
            console.log(id)
            dispatch(getPosts(id));
        }  
        
        ;
    },[id,,dispatch]);
    
// let posts;
     let posts = useSelector((state) => state.handlePost.postData) || []

    const dbInfo = useSelector((state) => state) || []
    // if(props.tabName==="home" || props.tabName==="profile"){
    //     posts= dbInfo.handlePost.postData;
    // }else if(props.tabName==="bookmarks"){
    //     posts=dbInfo.bookmarks.bookmarks
    // }
 
    // console.log(posts, props.tabName);
    // console.log(dbPost,dbInfo);
    
    return (

    // <></>
    <>
      {posts.length!==0?(
          <>
            {posts.map((post)=>{
                return(

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
                                <ChatBubbleOutlineIcon fontSize="small"/>

                                    {post.author._id === id ? <Button
                                        onClick={(e) => {
                                            dispatch(deletePost(post._id, token));
                                            history.push(`/${props.tabName}`)
                                        }}
                                    >
                                        <DeleteOutlineIcon fontSize="small" style={{ color: "black" }}/> Delete
                      </Button> : 
                        <Button disabled="true"
                                        onClick={(e) => {
                                            dispatch(deletePost(post._id, token));
                                            history.push(`/${props.tabName}`)
                                        }}
                                    >
                                        <DeleteOutlineIcon fontSize="small" style={{ color: "black" }} /> Delete
                      </Button>}
                                    
                                
                                {/* <FavoriteBorderIcon fontSize="small"/>{props.post.likes.length} */}
                                <Button
                                    onClick={(e) => {
                                        dispatch(likePost(post._id, token));
                                        // history.push(`/${props.tabName}`) 
                                        // window.location.reload(false); 
                                    
                                    }}
                                >
                                        <FavoriteBorderIcon fontSize="small" style={{ color: "red" }} /> Likes:  {post.likes.length}
                            </Button>

                                {/* {post.likes.length} */}
                                {/* {props.tabName !== "bookmarks" ? <Button
                                        onClick={(e) => {
                                            dispatch(addBookmark(id, post, token));
                                        }}
                                    >
                                        <BookmarkBorderIcon fontSize="small" style={{ color: "blue" }} /> Bookmark
                                 </Button> 
                                 :

                                 <Button
                                        onClick={(e) => {
                                            dispatch(removeBookmark(id, post, token));
                                            }}
                                    >
                                        <BookmarkBorderIcon fontSize="small" /> Unbookmark
                                 </Button> 
                                 } */}

                                    <Button
                                        onClick={(e) => {
                                            dispatch(addBookmark(id, post, token));
                                        }}
                                    >
                                        <BookmarkBorderIcon fontSize="small" style={{ color: "blue" }} /> Bookmark
                                 </Button>
                              
                             

                            </div>
                        </div>


                    </div>

                </div>
                );
            })}

          </>
      ):
      <>
      {/* <h1>NO POST FOUND</h1> */}
      <></>

      </>
      
      
      }
     </>
    
    
    );





}

export default Post
