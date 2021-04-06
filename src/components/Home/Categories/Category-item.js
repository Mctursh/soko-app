import React from "react"


function CategoryItem (props) {
    return (
        <div onClick={(() => {props.toggle(props.activity.prev, props.itemNumber)})} className={props.activity.current === props.itemNumber ? "category-parent-item-active" : "category-parent-item-inactive"}>
            {props.activity.current === props.itemNumber ? <h4 className="category-child-item-active">{props.itemName}  <span> ({props.amount})</span></h4> : <h4 className="category-child-item-inactive">{props.itemName}  <span> ({props.amount})</span></h4>}
        </div>
    )
}

export default CategoryItem