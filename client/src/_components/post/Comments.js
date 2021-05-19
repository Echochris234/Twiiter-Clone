import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPosts, deletePost, likePost, getAllPosts } from "./../../_actions/getPosts";
import { addBookmark } from "./../../_actions/bookmarks";
import { getComments, comment } from "./../../_actions/getComments";

import { Link } from "react-router-dom";
import './Post.css'
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import { Button } from "semantic-ui-react";
import ReactHtmlParser from 'react-html-parser';
import Autolinker from 'autolinker';


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Comments(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

    const postId=props.postId;
    const id = props.id;
    const token = props.token;

    console.log(postId);



    useEffect(() => {
        dispatch(getComments(postId));
    }, [postId]);

    let comments = useSelector((state) => state.handleComment.postComments) || []
    console.log(comments);
    return (

        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <ChatBubbleOutlineIcon fontSize="small" />Comments: {comments.length}
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Please Type your comment below</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Comment"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={(e) => {
                        handleClose();
                       


                    }}
                        color="primary">
                        Comment
          </Button>
                </DialogActions>
            </Dialog>
        </div>

    );





}

export default Comments
