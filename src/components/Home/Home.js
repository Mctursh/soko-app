import React from "react"
import Categories from "./Categories/Categories"
import Feeds from "./Feeds/Feeds"
import { useState, useEffect } from "react"
import Bag from "./Bag/Bag"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SelectedFeed from "./Selected-feeds/Selected-feed"


function Home(props) {

    // useEffect(() => {
    //     console.log(match);
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [])

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
            <Router>
                <Switch>
                    <Route path="/feed/:category/:id" render={({match}) => ( 
                        <SelectedFeed match={match} changeState={props.changeState} />
                    )}/>
                    <Route path="/">
                        <Categories Activity={Activity} toggleItem={toggleItem}/>
                        <Feeds currName={Activity.currName} currItem={Activity.currItem} />
                        <Bag />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Home