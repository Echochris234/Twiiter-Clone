import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Avatar} from "@material-ui/core"
import { post} from "../../_actions/getPosts.js";
import { Form, Button, TextArea } from "semantic-ui-react";
import './Tweetbox.css'



function Tweetbox(props) {
    
    const dispatch = useDispatch();
    const id = props.id;
    const token = props.token;
    const [userPost, updateUser] = useState({ userId: id, article: "" });
    
    
    return (
        <div className="tweetBox">

            
                <div className="tweetBox__input">
                    <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    
                    <Form
                        onSubmit={(e) => {
                           
                            dispatch(post(token, userPost));
                            
                            updateUser({...userPost,article:""});
                        
                            
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
            
        </div>
    )
}

export default Tweetbox
