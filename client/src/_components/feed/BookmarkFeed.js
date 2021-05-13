import React from 'react'
import TweetBox from './Tweetbox.js'
import './Feed.css'
import BookmarkPost from '../post/BookmarkPost.js'



function BookmarkFeed(props) {
    
    const id = props.id;
    const token = props.token;
    

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>



            {/* TweetBox */}
            <TweetBox tabName={props.tabName.toLowerCase()} userData={id} token={token} />
      
            {/* Post that are bookmarked */}
            <BookmarkPost tabName={props.tabName.toLowerCase()} id={props.id} token={props.token} />
        </div>
    )
}


export default BookmarkFeed;
