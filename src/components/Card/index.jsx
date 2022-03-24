import React from 'react'
import "./_card.scss"

const Card = ({content}) => {

    console.log(content)

  return(
    <div className="card">
  
        <div className="card__image">
            {content.image && <img src={content.image.src} alt={content.image.alt} />}
            <div className="card__body">
               <p>{content.eyebrow}</p>
                <h2>{content.heading}</h2>
                <h4>{content.title}</h4>
                <h6 >{content.body}</h6>
                <a href='#' className="card__button">{content.button}</a>
            </div>
        </div> 
    </div>
   )
}

export default Card;