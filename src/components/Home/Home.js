import React from "react"
import Categories from "./Categories/Categories"
import Feeds from "./Feeds/Feeds"
import {useState} from "react"


function Home() {

    const [Activity, setActivity] = useState({
        prev: 1,
        current: 1,
        currName: "Electronics",
        currItem: 12
    })

    const toggleItem = (prev, current, currName, currItem) => {
        setActivity((exValue) => {
            return (
                {...exValue, prev, current, currName, currItem}
            )
        })
    }

    return (
        <div className="flex">            
            <Categories Activity={Activity} toggleItem={toggleItem}/>
            <Feeds currName={Activity.currName} currItem={Activity.currItem} />
        </div>
    )
}

export default Home