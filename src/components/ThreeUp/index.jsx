import React from "react"
import Card from "../Card"
import "./_threeUp.scss"


const ThreeUp= ({items}) => {
  return (
    <>
    <div className="title">Check out our top ad solutions</div> 
        <div className="threeup">  
        {items.map((item, index) =>
          <div key={index} className="threeup__card">
             <Card content={item} key={index} />
          </div>
        )}
    </div>
    </>
  )
}

export default ThreeUp;