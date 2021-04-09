import React from "react"
import Categories from "./Categories/Categories"
import Feeds from "./Feeds/Feeds"
import {useState} from "react"
import Bag from "./Bag/Bag"
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom"
import SelectedFeed from "./Selected-feeds/Selected-feed"


function Home() {

    const { feed } = useParams()


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
            {/* <Router>
                <Switch>
                    <Route path="/feed/electronics">
                        <SelectedFeed />
                    </Route>
                    <Route path="/">
                        <Categories Activity={Activity} toggleItem={toggleItem}/>
                        <Feeds currName={Activity.currName} currItem={Activity.currItem} />
                        <Bag />
                    </Route>
                </Switch>
            </Router>                      */}
            <SelectedFeed />
        </div>
    )
}

export default Home