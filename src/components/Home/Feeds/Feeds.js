import React from "react"
import DummyFeeds from "./Dummy-feeds"
import FeedItem from "./Feed-Item"


function Feeds(props) {
    return (
        <div className="feeds">
            <div>
                <h4 className="feed-active">{props.currName}<span>{props.currItem}</span></h4>
            </div>
            {DummyFeeds.map((feed) => <FeedItem ImageUrl={feed.ItemImageUrl} key={feed._id} name={feed.ItemName} promoPrice={feed.ItemPromoPrice} price={feed.ItemPrice} details={feed.ItemDetaiils} />)}            
        </div>
    )
}

export default Feeds