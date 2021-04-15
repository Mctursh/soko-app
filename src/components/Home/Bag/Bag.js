import React from "react"
import Content from "./Content";
import Empty from "./Empty";



function Bag(props) {
    return (
        <div className="bag-container">
            {props.BagAmount.isEmpty ? <Empty BagAmount={props.BagAmount} /> : <Content ClearBag={props.ClearBag} ItemPieces={props.ItemPieces} addToPiece={props.addToPiece} removeFromPiece={props.removeFromPiece} BagAmount={props.BagAmount} /> }       
        </div>
    )
}

export default Bag;