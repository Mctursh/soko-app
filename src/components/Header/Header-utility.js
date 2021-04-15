import React from "react"


function Utility(props) {
    return(
        <div onClick={() => {props.goBack()}} className="utility">
            <h3><span ><i class="fas fa-chevron-left"></i></span>{props.category}</h3>    
        </div>        
    )
}

export default Utility;