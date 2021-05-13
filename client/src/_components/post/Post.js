import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPosts, deletePost, likePost, getAllPosts } from "./../../_actions/getPosts";
import {addBookmark} from "./../../_actions/bookmarks";

import { Link } from "react-router-dom";
import './Post.css'
import { Avatar} from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { Button } from "semantic-ui-react";
import ReactHtmlParser from 'react-html-parser';
import Autolinker from 'autolinker';


function Post(props) {
    const id= props.id;
    const token =props.token;
    
    const dispatch = useDispatch();
    const history = useHistory();

    let userData = localStorage.getItem("userInfo");
    const currId = JSON.parse(userData).result._id;
    
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



    useEffect (()=>{
        if(props.tabName==="home"){
            dispatch(getAllPosts());

        }else if(props.tabName==="profile"){
            
            dispatch(getPosts(id));
        }  
        
        ;
    },[id,dispatch]);
    

     let posts = useSelector((state) => state.handlePost.postData) || []



    let linkPost;

    return (

    <>
      {posts.length!==0?(
          <>
            {posts.map((post)=>{
                linkPost=autolinker.link(post.article);
                

                return(

                <div className="post">
                   <div className="post__avatar">
                        <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div> 
                    <div className="post__body">
                        <div className="post__header">
                             
                            <div className="post__headerText">
                                <h3>

                                        <Link style={{ textDecoration: 'none', color:'#50b7f5'}}
                                            
                                            to={{
                                                pathname: `/profile/`,
                                                state: {
                                                    name: post.author.name,
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

                                <div className="post__headerDescription" id="articles" >
                                <p>
          
                                        {ReactHtmlParser(linkPost) }
                                        
                                </p>
                                      
                            </div>
                    
                                
                         

                            <div className="post__footer">
                                <ChatBubbleOutlineIcon fontSize="small"/>

                                    {post.author._id === currId ? <Button
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
                                    
                                
                                
                                <Button
                                    onClick={(e) => {
                                        dispatch(likePost(post._id, token));
                                      
                                    
                                    }}
                                >
                                        <FavoriteBorderIcon fontSize="small" style={{ color: "red" }} /> Likes:  {post.likes.length}
                            </Button>

                              

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
      
      <></>

      </>
      
      
      }
     </>
    
    
    );

   



}

export default Post
