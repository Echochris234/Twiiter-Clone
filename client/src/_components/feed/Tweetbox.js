
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {Avatar} from "@material-ui/core"
import { post,getPosts } from "../../_actions/getPosts.js";
import { Form, Button, TextArea } from "semantic-ui-react";
import './Tweetbox.css'



function Tweetbox(props) {
    // console.log(props);
    const history = useHistory();
    const dispatch = useDispatch();
    const id = props.id;
    const token = props.token;
    const [userPost, updateUser] = useState({ userId: id, article: "" });
    // console.log(id, token);
    
    return (
        <div className="tweetBox">

            {/* <form> */}
                <div className="tweetBox__input">
                    <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    {/* <input placeHolder="Whats happening" type="text"></input> */}
                    <Form
                        onSubmit={(e) => {
                           
                            dispatch(post(token, userPost));
                            // dispatch(getAllPosts());
                            
                            
                            updateUser({...userPost,article:""});
                            
                            // history.push(`/${props.tabName}`);
                        // window.location.reload(false);
                        
                            
                        }}
                    >
                    <TextArea style={{ height: 50 , width:375}}
                            type="text"
                            value={userPost.article}
                            placeholder="Create a new Post!"
                            onChange={(e) => {
                                updateUser({ ...userPost, article: e.target.value });
                            }}
                        ></TextArea>
                        <Button>Create Post</Button>
                    </Form>
                
                </div>
                {/* <input className="tweetBox__imageInput" placeHolder="Enter image URL" type="text"></input> */}

                {/* <Button className="tweetBox__tweetButton">Tweet</Button> */}
            {/* </form> */}
            
        </div>
    )
}

export default Tweetbox
