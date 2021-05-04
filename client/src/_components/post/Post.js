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
import ReactHtmlParser from 'react-html-parser';
import Autolinker from 'autolinker';


function Post(props) {
    const id= props.id;
    const token =props.token;
    const tweets=props.tweet;
    const dispatch = useDispatch();
    const history = useHistory();
    
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

    useEffect (()=>{
        if(props.tabName==="home"){
            dispatch(getAllPosts());

        }else if(props.tabName==="profile"){
            console.log(id)
            dispatch(getPosts(id));
        }  
        
        ;
    },[id,,dispatch]);
    

     let posts = useSelector((state) => state.handlePost.postData) || []



    let linkPost;

    return (

    <>
      {posts.length!==0?(
          <>
            {posts.map((post)=>{
                linkPost=autolinker.link(post.article);
                console.log(linkPost);
                // doc = parser.parseFromString(linkPost, 'text/html');
                // article=doc.body;
                // console.log(article)
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

                                <div className="post__headerDescription" id="articles">
                                <p>
                                   
                                      {/* {} */}
                                   {/* {post.article} */}
                                        {ReactHtmlParser(linkPost)}
                                        
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
