import React from "react";
import Dummy from "../Feeds/Dummy-feeds"
import Product from "./Product";
import { useState, useEffect } from "react";



function Content(props) {

    const [BagItems, setBagItems] = useState([])

    useEffect(() => {
        let arr = [];
        props.BagAmount.content.forEach((item) => {
            Dummy.forEach((feed) => {
                if (item.id == feed._id) {
                    arr.push(feed)
                }
            })
        })

        setBagItems(arr)
        
    })
    

    return(
        <div >
            <div className="flex bag-subheader" >
                <h4 className="feed-active target-details bag-header">Bag<span>{props.BagAmount.totalInCart}</span></h4>
                <p onClick={() => {props.ClearBag()}} >Clear Bag</p>
            </div>
            <div className="bag-content">
                {BagItems.map((item) => {
                    return(
                        <Product key={item._ids} addToPiece={props.addToPiece} ItemPieces={props.ItemPieces} removeFromPiece={props.removeFromPiece} item={item}/>   )
                    })}
            </div>
        </div>
    )
}

export default Content



