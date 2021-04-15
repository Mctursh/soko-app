import React from "react"
import {Link} from "react-router-dom"


function FeedItem(props) {
    return (
        <div>
            <div className="feed-item">
                <img src={props.ImageUrl} alt="item.jpg"/>                         
                <div className="feed-info">
                    <Link to={`/feed/${props.category}/${props.id}`}>
                        <p className="feed-item-name">{props.name}</p>
                        <p className="feed-item-price" >{props.price}</p> 
                    </Link>                                   
                    <div className="feed-addition">
                        <p className="feed-item-promo-price">{props.promoPrice}</p>
                        <button onClick={(() => {props.addToBag(props.id)})}> <span><i class="fas fa-plus"></i></span>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedItem;