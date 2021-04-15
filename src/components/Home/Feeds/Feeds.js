import React from "react"
import { Link } from "react-router-dom"
import DummyFeeds from "./Dummy-feeds"
import FeedItem from "./Feed-Item"



function Feeds(props) {

    

    return (    
             <div className="feeds">
                <div>
                    <h4 className="feed-active">{props.currName}<span>{props.currItem}</span></h4>
                </div>
                
                    {DummyFeeds.map((feed) => {
                        return(
                            <Link to={`/feed/${feed.category}/${feed._id}`}>
                                <FeedItem addToBag={props.addToBag} id={feed.itemNumbers} ImageUrl={feed.ItemImageUrl} key={feed._id} name={feed.ItemName} promoPrice={feed.ItemPromoPrice} price={feed.ItemPrice} details={feed.ItemDetaiils} />
                            </Link>
                        )
                    })}
                                       
            </div> 
    )
}

export default Feeds