import React from 'react'
import logements from '../data/logements.json'
import { useParams } from "react-router-dom";
import SlideShow from '../components/SlideShow';
import Rating from '../components/Rating';

const FicheLogement = () => {

  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  const fullStars = logement.rating;
  const emptyStars = fullStars - 5


  return (
    <div>

      <div className='logementContainer'>

        <SlideShow
          key={logement.id}
          pictures={logement.pictures}
          title={logement.title}
        />
        <div className="logementLocation">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
          {logement.tags.map((tag, index) => (
            <button key={index}>
              {tag}
            </button>
          ))}
        </div>
        <div className="logementInfo">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={`Portrait de ${logement.host.name}`} />
          <Rating rating={logement.rating} />
        </div>
      </div>
    </div>
  )
}

export default FicheLogement