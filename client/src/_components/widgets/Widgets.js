import React from 'react'
import './Widgets.css';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"


function Widgets() {
    // {/* A few plug ins will be used whats happening who to follow
    //         React Twitter */}

    // {/* Twitter Timeline
    //             Twitter ShareButton
    //             Twitter Tweet embed */}
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"932586791953158144"} />
                {/* <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="random"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"Google.com"}
                    options={{ text: "reactjs is awesome", via: "random" }}
                /> */}
            </div>
            
        </div>
    )
}

export default Widgets
