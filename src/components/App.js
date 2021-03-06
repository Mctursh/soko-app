import React from "react"
import Footer from "./Footer/Footer";
import Header from "./Header/Header"
import { BrowserRouter as Router , Route, Switch } from "react-router-dom"
import {useState} from "react"
import SelectedFeed from "./Home/Selected-feeds/Selected-feed"
import Feeds from "./Home/Feeds/Feeds"
import Categories from "./Home/Categories/Categories"
import Bag from "./Home/Bag/Bag"



function App() {

  const [BagAmount, setBagAmount] = useState({
    isEmpty: true,
    content:[],
    totalInCart: 0
  })

  function ClearBag() {
    setBagAmount({
      isEmpty: true,
      content:[],
      totalInCart: 0
    })
  }

  function addToBag(id, amount = 1) {
    setBagAmount((exValue) => {
      let {content, totalInCart} = exValue
      console.log(content);
      console.log(totalInCart);
      if (content.length == 0 || content.length == undefined) {
        content.push({id, amount})
        totalInCart += 1
      } else {
        const status = content.every((curr) => curr.id != id)  
        if (status) {
          content.push({id, amount})
          totalInCart += 1         
        } else {
          content.forEach((item) => {
            if (item.id == id) {
              item.amount += 1  
            }
          })
        }
      }  
      return (
        {
         isEmpty: false,
         content,
         totalInCart 
        }
      )  
    })
  }

  const [HeaderBar, setHeaderBar] = useState({
    feedUtility: {status: false, category: null},
    searchBar: true
  })

  function changeHeaderState(categ) {
    setHeaderBar((exValue) => {
      return(
        {
          ...exValue,
          feedUtility: {status: true, category: categ},
          searchBar: false
        }
      )
    })
  }

  function goBack() {
    setHeaderBar((exValue) => {
      return (
        {
          feedUtility: {status: false, category: null},
          searchBar: true
        }
      )
    })
  }

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


const [ItemPieces, setItemPieces] = useState(1)

   function addToPiece() {
      setItemPieces(ItemPieces + 1)
   }

   function removeFromPiece() {
      setItemPieces(() => {
         if (ItemPieces == 1) {
            return ItemPieces
         } else {
            return ItemPieces - 1
         }
      }) 
   }

  return (
    <Router>
      <>  <Header header={HeaderBar} BagAmount={BagAmount} goBack={goBack} />  
          <Switch>  
            <Route path="/feed/:category/:id" render={({match}) => ( 
              
              <SelectedFeed match={match} ItemPieces={ItemPieces} addToPiece={addToPiece} removeFromPiece={removeFromPiece} addToBag={addToBag} changeState={changeHeaderState} />
            )}/>              
            <Route path="/" render={({match}) => (
              <>              
                <div className="flex">
                  <Categories Activity={Activity} toggleItem={toggleItem}/>
                  <Feeds addToBag={addToBag} currName={Activity.currName} currItem={Activity.currItem} />
                  <Bag ClearBag={ClearBag} ItemPieces={ItemPieces} addToPiece={addToPiece} removeFromPiece={removeFromPiece} BagAmount={BagAmount}/>
                </div>    
              </>
            )}/>
          </Switch>
          <Footer />                    
      </>
    </Router>
   
  );
}

export default App;


//header color #2766CC
// target store color #F2F2F2
// search bar color #F0F0F0
//hover categories #3671D0
//search icon color #F8DE4B
//item name color #5E5E5E
//chat with us color #40C251


//account svg link    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAFO0lEQVR4Ae2cT0gUURzH3fVfhz0UxIqCpwUP0q2gCIy0TiKllFogQl2iSxASRYWn9CZBty4drPDfhhbiTY2EKNCrB3FPguISFLSHFN3t+4M3Om/2vXk7vtl1Z3wD8t683/vz+33mN795z9k3FRXmMAQMgSISiHjtO5fLRaempi4j7cTfebRviEQiDcjHvPZVzPrQKQOdNjHGJvIr+Jvp7u7+jjTrZdyCAS0uLp5Kp9OP0PkABo57GaRc6gJOGrqMxOPxN62trf8K0asgQBMTE7cA5TU6bCyk0wDU2QCsx729vZ9UukbdKgBKBHCGkCZRLyxwyORGsonZ5uokUiGDM4bOeqnHEB8T8KS78KicyMZKUSGVNTc3DyF5KJOHqPzc6upqdTKZXBDZJPQgFnPotnI75iEcr6mp+ba3t7fZ09OTcatcatnc3FxtJpNJZLPZi/COPtwRbW46oM5tUUzKA0RPq+3t7TV0Jos5qcrKynt4ZC65DVhuMkxNru7v77+FXk0S3Tbq6uqanE+3vCDNHuUyOEu1tbUXggaHgEDnr7FY7BKysgvbyGzn+HGA4IZ0PsDVODxZwwA3u7q6/hwWBSvX0dHxGxf4BrROSTSnOR7HhDthM2ThJBC31QMaQNJxYIrpAlOIECkMOHFiYJdxgFCh0y605efJRW3ngc6yEEEPmbzDycAJiNZWouOjqDDgZeMi/QGIY8ABQoMGUaNoNPpTVB7kMpqeSPTnGHCAMBfghFYHCM6yoGZVCVxKczeR0k4GVfZKcC/hvyza29t37PWs/PLycnUqlXqFdvdRdtYqL4cUhm5Bj1Gkg5jE7jp1oont+Hj+XeZkwAFydqI6X19fp+XIE1W945DD0HqM+5SN/eyoOnC32BE66T9Cm1I30dJRCxDc19N/50pNho2Xt5zyoocWIAw06mWw46iLW+29zrhaMYgCIBu8n93zOrr43fYX9HuXSCRe6nSsBYg9HSgAHjkI6ihfira6t1gpdDzWMQwgBX4DyABSEFCIjQcpAGk9xYK8FlNwORBrATJrsQOO0ozWOkfaq78CLR21YpBZi6mv5Ki6yvHWMGsxOX+zFpOz8U+iFYP8U6N8ezKAFNfGADKAFAQUYuNBCkBaS41irMUw+XR9n6Wwx3exFqBirMX8ep/lFyndW0xrnaMwoph9K4Y+FGsBKvJaTOt91qGJejktQBh6VG94eWvdNZS8Z28SrRgEDxpkw/n5XsyXNZQ3DPLaWoDMezE52BMj0Y1BoQdlACkusQFkACkIKMScB+GxLdyQMjk5KfztoqLvshbTZheRgmDw117OAcLkTPjLz6qqKuGvX+0dBS1PO4FEOoMBLZYPDg4QSoWAdnd3rxy0CEmGtklJTOEYcIDgXiuiRigP3a5D2NQnsXXZXu4ENGMXWnm43XVs8mixzoOe0t4x2NQmsgPgPtvLuRUzGkURkLeQinb8pGivWJC3Q5Hhs7OzZxB/fiDbZAdBecBJY/lUjzRryZweRIIRS+hIEzs7O19oAEd5YE6np6dPAw55SB4cZsSIHQ6VcYCogDbdI9mgvOBoIfrkogJZWRdRiMAFpvgiCxUbzHbODu4WsySFbOoF6QXcih9oJxBtdpHt57D6LHVKczeanrAn8B2Mf81NB9hT2KZeqxO26f65dR7mFHCGseP5hchGoQdRRXgHfXVhDNnQPeIdIFw/LJAXg6zGoJpjXyQYtsrCljLPkX51geyVepAdBotJJ/LjJgUBIljm8zh2l3HJ02QSj8wT84ElFxRGZAgYAvoE/gPgPfGx80UuAQAAAABJRU5ErkJggg==
//bag svg link    data:image/png;base64,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
//home svg link   data:image/png;base64,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
//confused face link svg   https://mysoko.app/static/media/group@3x 3.2d2dde74.jpg  



//image item URL https://soko.fra1.digitaloceanspaces.com/TestImg/6caccfa9-b489-46cd-9939-b91e09c24a05.jpg
//image item uRL https://soko.fra1.digitaloceanspaces.com/TestImg/5e4c0f63-74b3-4a4d-b3f2-d8420dde6c25.jpg
//image item URL https://soko.fra1.digitaloceanspaces.com/TestImg/8bd67a58-6137-4743-a07a-08a030bc3cfc.jpg
//image item URL https://soko.fra1.digitaloceanspaces.com/TestImg/92b522c7-4633-4de1-83c4-42fb4505e2a5.jpg


//fast delivery icon 
//buyer protection  
//customer support  
