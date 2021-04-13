import React from "react"
import Watermark from "./Watermark"
import Target from "./Target"
import SearchBar from "./Search-bar/Search-bar"
import Utility from "./Header-utility"
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom"


function Header (props) {

    let selectedFeedMatch = useRouteMatch("/feed/:category/:id");

    return (
        <div className="header">
            <Watermark />
            <Target />
            {props.header.feedUtility.status && <Utility category={props.header.feedUtility.category} />}
            {props.header.SearchBar && <SearchBar />}
            
            {/* {selectedFeedMatch && <h1>Matches {selectedFeedMatch.match.params.category}</h1>} */}
            {/* <Router>
                <Switch>
                    <Route path="/feed/:category/:id" component={Utility}/>
                    <Route path="/" component={SearchBar}/>
                </Switch>
            </Router>         */}
        </div>
    )
}

export default Header