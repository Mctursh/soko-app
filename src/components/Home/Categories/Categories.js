import React from "react"
import CategoryItem from "./Category-item"
import Dummy from "./dummy-items"


function Category(props) {
    return (
        <div className="category">
            {Dummy.map((item) => { return (<CategoryItem key={item._id} itemNumber={item.itemNumber} toggle={props.toggleItem} itemName={item.name} amount={item.amount}  activity={props.Activity}/>)})}
            <h4 className="category-child-item-active view-all">View all categories <span><i class="fas fa-chevron-right"></i></span></h4>
        </div>
    )
}

export default Category