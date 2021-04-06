import React from "react"
import CategoryItem from "./Category-item"
import {useState} from "react"
import Dummy from "./dummy-items"


function Category() {

    const [Activity, setActivity] = useState({
        prev: 1,
        current: 1
    })

    const toggleItem = (prev, current) => {
        setActivity((exValue) => {
            return (
                {...exValue, prev, current}
            )
        })
    }

    return (
        <div className="category">
            {Dummy.map((item) => { return (<CategoryItem key={item._id} itemNumber={item.itemNumber} toggle={toggleItem} itemName={item.name} amount={item.amount}  activity={Activity}/>)})}
        </div>
    )
}

export default Category