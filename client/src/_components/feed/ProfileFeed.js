import React from 'react'



import ProfileTweetBox from './ProfileTweetbox.js'
import './Feed.css'
import Post from '../post/Post.js'



function ProfileFeed(props) {

    const id = props.id;
    const token= props.token;
    

    

 
    
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>{props.tabName}</h2>
            </div>

            <ProfileTweetBox tabName={props.tabName.toLowerCase()} name={props.name} userData={id} token={token} />

            <Post tabName={props.tabName.toLowerCase()} id={props.id} token={props.token} />
        </div>
    )
}


export default ProfileFeed;
