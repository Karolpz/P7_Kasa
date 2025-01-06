import React from 'react'
import logements from '../data/logements.json'
import { useParams } from "react-router-dom";
import SlideShow from '../components/SlideShow';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse'

const FicheLogement = () => {

  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  return (
    <>
      <div className='logementContainer'>

        <SlideShow
          key={logement.id}
          pictures={logement.pictures}
          title={logement.title}
        />

        <div className="logementInfo">
          <div className="logementLocation">
            <h2>{logement.title}</h2>
            <h3>{logement.location}</h3>
            {logement.tags.map((tag, index) => (
              <button key={index}>
                {tag}
              </button>
            ))}
          </div>

          <div className="logementHostRating">
            <div className="logementHost">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={`Portrait de ${logement.host.name}`} />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>

        <div className="logementCollapses">
          <Collapse
            title="Description"
            text={logement.description}
          />
          <Collapse
            title='Équipements'
            text={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>

    </>
  )
}

export default FicheLogement