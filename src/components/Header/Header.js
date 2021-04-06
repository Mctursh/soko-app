import React from "react"
import Watermark from "./Watermark"
import Target from "./Target"
import SearchBar from "./Search-bar/Search-bar"


function Header () {
    return (
        <div className="header">
            <Watermark />
            <Target />
            <SearchBar />
        </div>
    )
}

export default Header