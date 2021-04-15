import React from "react"
import Feeds from "../Feeds/Dummy-feeds"
import { useEffect, useState } from "react"



function SelectedFeed(props) {

   const [selected] = Feeds.filter((feed) => feed._id == props.match.params.id)   

   const [Selected, setSelected] = useState(selected) 
   
   
   

   useEffect(() => {
      props.changeState(Selected.category)      
   }, [])
   

   return (
      <div className="">
         <div className="selected-feed">
               <div className="selected-feed-image">
                  <img src={Selected.ItemImageUrl} alt="img.jpg" />
                  <div className="selected-feed-circle">
                     <i class="fas fa-circle active-selected-image"></i>
                     <i class="fas fa-circle"></i>
                     <i class="fas fa-circle"></i>
                     <i class="fas fa-circle"></i>
                  </div>                
               </div>
               <div className="selected-feed-info">
                  <p className="selected-feed-name">{Selected.ItemName}</p>
                  <p className="selected-feed-details sub-text">{Selected.ItemDetaiils}</p>
                  <p className="selected-feed-price"> {Selected.ItemPrice} {Selected.Discount && <span className="discount"><p>{Selected.Discount}</p></span>}</p>
                  {Selected.ItemPromoPrice && <p className="feed-item-promo-price">{Selected.ItemPromoPrice}</p>}
                  <div className="bag-add">
                     <button onClick={props.removeFromPiece}><i class="fas fa-minus"></i></button>
                     <p>{props.ItemPieces}</p>
                     <button onClick={props.addToPiece}><i class="fas fa-plus"></i></button>
                  </div>
                  <div className="options">
                     <div onClick={() => {props.addToBag(Selected.itemNumber, props.ItemPieces)}} className="add-to-bag"><a href="#" >Add to Bag</a></div>
                     <div className="buy-now"><a href="#">Buy Now</a></div>                
                  </div>
               </div>
            </div>         
      </div>    
   )
}

{/* <div className="selected-feed related-feed">
               <div className="related-feed-header">
                  <h4>RELATED PRODUCTS</h4>
                  <div className="flex">
                     <div id="left"><i className="fas fa-chevron-left" href="#carouselExampleControls" role="button" data-slide="prev"></i></div>
                     <div id="right"><i className="fas fa-chevron-right" href="#carouselExampleControls" role="button" data-slide="next"></i></div>
                  </div>
               </div>            
            </div> */}
// {Related.map(item => {                        
//    return(
//       <RelatedFeeds key={item._id} feedImageUrl={item.ItemImageUrl} feedName={item.ItemName} />
//    )
// })}




export default SelectedFeed