import React from "react"
import UserStatus from "./User-status"
import Address from "./Target-address"


function Target() {
    return (
        <div className="container">
            <Address />
            <UserStatus />
        </div>
    )
}

export default Target