import React from 'react'
import "./_card.scss"

const Card = ({content}) => {

  return(
    <div className="card">
        <div className="card__image">
            {content.image && <img src={content.image.src} alt={content.image.alt} />}
            <div className="card__body">
                <h4>{content.title}</h4>
                <p>{content.body}</p>
                <a href='#' className="card__button">{content.button}</a>
            </div>
        </div> 
    </div>
   )
}

export default Card;