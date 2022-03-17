import React from 'react'
import  Card   from '../Card'
import "./_oneUp.scss"


const OneUp = ({ oneUp, list }) => (

  <div className="oneUp">
  <img className="oneUp__image" src={oneUp.image.src} alt={oneUp.image.alt}/> 
    <div className="oneUp__body"> 
        {list.items.map((item, index) => (
          <div key={index}>
            <Card content={item} />
          </div>
        ))}  
    </div>
</div>
);

export default OneUp;
