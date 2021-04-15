import React from "react"



function Bag(props) {
    return (
        <div className="bag-container">
            <h4 className="feed-active target-details bag-header">Bag<span>{props.BagAmount.totalInCart}</span></h4>
            <div className="bag-content">
                <img src="https://mysoko.app/static/media/group@3x 3.2d2dde74.jpg" alt="oops.jpg"></img>
                <h4>It's empty here</h4>
                <p>Start shopping to add items to your bag</p>
            </div>
        </div>
    )
}

export default Bag;