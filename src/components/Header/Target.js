import React from "react"
import UserStatus from "./User-status"
import Address from "./Target-address"


function Target(props) {
    return (
        <div>
            <Address />
            <UserStatus BagAmount={props.BagAmount}/>
        </div>
    )
}

export default Target