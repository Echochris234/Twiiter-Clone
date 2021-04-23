import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPosts,deletePost,likePost } from "./../../_actions/getPosts";
import './Post.css'
import { Avatar} from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import axios from 'axios';
import { Item, Icon, Button } from "semantic-ui-react";
function Post(props) {

 
console.log(props)
console.log(props);
    const dispatch = useDispatch();
    const history = useHistory();
    props.post.likes.forEach((like)=>{
        // console.log(like);
        axios.get(`http://localhost:8000/posts/?userId=+${like}`)
            .then(res => {

                const postData = res.data;

          
            })
    })
    
 
    return (
        <div className="post">
           <div className="post__avatar">
                <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div> 
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            
                            {props.post.author.name}
                            <span className="post_headerSpecial">
                                <VerifiedUserIcon className="post_badge" /> @{props.post.author.email}
                            </span>
                        </h3>

                    </div>

                    <div className="post__headerDescription">
                        <p>
                           {props.post.article}
                        </p>

                    </div>

                    <img src="https://images.unsplash.com/photo-1518965493882-35b838ace024?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s" alt=""/>

                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small"/>
                        <RepeatIcon fontSize="small"/>
                        {/* <FavoriteBorderIcon fontSize="small"/>{props.post.likes.length} */}
                        <Button
                            onClick={(e) => {
                                dispatch(likePost(props.post._id, props.token));
                             
                                
                                
                            }}
                        >
                            <FavoriteBorderIcon fontSize="small" />
                    </Button>
                        {props.post.likes.length}
                        <PublishIcon fontSize="small"/>

                    </div>
                </div>


            </div>
    
        </div>
    
    )}

export default Post
