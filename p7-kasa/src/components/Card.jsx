import React from 'react'
import logements from '../logements.json'

const Card = () => {
  return (
    <div className='cardsContainer'>

            {logements.map((logement) => (
                <div key = {logement.id} className='cardContent'>
                    <img src = {logement.cover} alt = {logement.title} className='cardPicture'/>
                    <h2>{logement.title}</h2>
                </div>
            ))}

    </div>
  )
}

export default Card