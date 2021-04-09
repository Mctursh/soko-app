import React from "react"
import Watermark from "./Watermark"
import Target from "./Target"
import SearchBar from "./Search-bar/Search-bar"
import Utility from "./Header-utility"


function Header () {
    return (
        <div className="header">
            <Watermark />
            <Target />
            {/* <SearchBar /> */}
            <Utility />
        </div>
    )
}

export default Header