import React from "react"


function FeedItem(props) {
    return (
        <div>
            <div className="feed-item">
                <img src={props.ImageUrl} alt="item.jpg"/>
                <div className="feed-info">
                    <p className="feed-item-name">{props.name}</p>
                    <p className="feed-item-price" >{props.price}</p>                    
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