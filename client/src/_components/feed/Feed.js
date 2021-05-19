import React, {useEffect } from 'react';
import { useDispatch} from "react-redux";

import { getBookmarks } from "./../../_actions/bookmarks";


import TweetBox from './Tweetbox.js'
import './Feed.css'
import Post from '../post/Post.js'



function Feed(props) {

    
    let id =props.id;
    let token=props.token;
    const dispatch = useDispatch();
    

    useEffect(() => {
            dispatch(getBookmarks(id, token))
        ;
    }, [id, token, dispatch]);


    
    


    return (
        
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>

           
           
           
            <TweetBox tabName={props.tabName.toLowerCase()} id={props.id} token={props.token}/>
           
   
            <Post  tabName={props.tabName.toLowerCase()} id={props.id} token={props.token} />


           
            
          
  
        </div>
        
    )
    }
    



export default Feed;
