import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, TextArea } from "semantic-ui-react";
import { getComments, comment } from "./../../_actions/getComments";
import './Tweetbox.css'



function Commentbox(props) {
console.log(props)
    const dispatch = useDispatch();
    const id = props.id;
    const postId=props.postId
    const token = props.token;
    const [userPost, updateUser] = useState({ author: id, postId: postId, comment: "" });


    return (
        <div className="tweetBox">


            <div className="tweetBox__input">

                <Form
                    onSubmit={(e) => {

                        dispatch(comment(token, userPost)).then(() => {
                            dispatch(getComments(postId))
                            updateUser({ ...userPost,  comment: "" });
                            // history.push(`/${props.tabName}`)
                        });
                    }}
                >
                    <TextArea style={{ height: 50, width: 350 }}
                        type="text"
                        value={userPost.comment}
                        placeholder="Create a new Post!"
                        onChange={(e) => {
                            updateUser({ ...userPost, comment: e.target.value });
                            // console.log(e.target.value)
                        }}
                    ></TextArea>
                    <Button>Post Comment</Button>
                </Form>

            </div>

        </div>
    )
}

export default Commentbox
