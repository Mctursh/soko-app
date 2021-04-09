import React from "react"
import { useParams } from "react-router"



function SelectedFeed(props) {
    const {currFeed} = useParams()

    return (
        <div className="selected-feed">
            <div className="selected-feed-image">
                <img src="https://soko.fra1.digitaloceanspaces.com/TestImg/92b522c7-4633-4de1-83c4-42fb4505e2a5.jpg" alt="img.jpg" />                
            </div>
            <div className="selected-feed-info">
                <p className="selected-feed-name">Lorem Ipsum is simply dummy</p>
                <p className="selected-feed-details sub-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p className="selected-feed-price"> UGX 185,000 <span className="discount"><p>-20%</p></span></p>
                <p className="feed-item-promo-price">UGX 145,000</p>
                <div className="bag-add">
                    <button><i class="fas fa-minus"></i></button>
                    <p>1</p>
                    <button><i class="fas fa-plus"></i></button>
                </div>
                <div className="options">
                    <div className="add-to-bag"><a href="#" >Add to Bag</a></div>
                    <div className="buy-now"><a href="#">Buy Now</a></div>                
                </div>
            </div>
        </div>
    )
}


export default SelectedFeed