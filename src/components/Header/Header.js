import React from "react"
import Watermark from "./Watermark"
import Target from "./Target"
import SearchBar from "./Search-bar/Search-bar"
import Utility from "./Header-utility"
import { Link } from "react-router-dom"


function Header (props) {    

    return (
        <div className="header">
            <Watermark />
            <Target BagAmount={props.BagAmount} />
            <Link to="/">
              {props.header.feedUtility.status && <Utility goBack={props.goBack} category={props.header.feedUtility.category} />}
            </Link>
            {props.header.searchBar && <SearchBar />}
            
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