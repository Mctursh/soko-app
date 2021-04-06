import React from "react"
import Categories from "./Categories/Categories"
import Feeds from "./Feeds/Feeds"
import {useState} from "react"


function Home() {

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
        <div className="flex">            
            <Categories Activity={Activity} toggleItem={toggleItem}/>
            <Feeds />
        </div>
    )
}

export default Home