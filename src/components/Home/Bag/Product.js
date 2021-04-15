import React from "react";



function Product(props) {
    return (
        <div className="product">
                    <h5>{props.item.ItemName}</h5> 
                    <h6>Per piece</h6>
                    <div className="product-amount">
                        <p>{props.item.ItemPrice}</p>
                        <div className="bag-add">
                            <button onClick={props.removeFromPiece}><i class="fas fa-minus"></i></button>
                            <p>{props.ItemPieces}</p>
                            <button onClick={props.addToPiece}><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>           
    )
}

export default Product