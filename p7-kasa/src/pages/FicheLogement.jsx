import React, { useEffect } from 'react'
import logements from '../data/logements.json'
import { useParams, useNavigate } from "react-router-dom";
import SlideShow from '../components/SlideShow';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse'

const FicheLogement = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("*");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <>

      <section className='logementContainer'>

        <SlideShow
          pictures={logement.pictures}
          title={logement.title}
        />

        <div className="logementInfo">
          <div className="logementLocation">
            <h2>{logement.title}</h2>
            <h3>{logement.location}</h3>
            {logement.tags.map((tag, index) => (
              <span key={index}>
                {tag}
              </span>
            ))}
          </div>

          <div className="logementHostRating">
            <div className="logementHost">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={`Portrait de ${logement.host.name}, propriétaire du logement`} />
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
                  <li key={index}>
                    {equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>

    </>
  )
}

export default FicheLogement