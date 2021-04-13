import React from "react"


function RelatedFeeds(props) {
    return(
        <div className="related-feed-item-child">
            <img className="related-feed-image" src={props.feedImageUrl} alt="img.jpg"/>
            <h5 className="related-feed-name">{props.feedName}</h5>
        </div>
    )
}

export default RelatedFeeds