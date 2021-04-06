import React from "react"


function Feeds(props) {
    return (
        <div className="feeds">
            <div>
                <h4 className="feed-active">{props.currName}<span>{props.currItem}</span></h4>
            </div>
        </div>
    )
}

export default Feeds