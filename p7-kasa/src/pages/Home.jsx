import React from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../data/logements.json'
import imageBanner from '../assets/images/landscapeHome.png'


const Home = () => {
  return (
    <>
      <Banner
        srcImage={imageBanner}
        titleImage="Chez vous, partout et ailleurs"
      />
      <section className='cardsContainer'>
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            image={logement.cover}
            title={logement.title}
          />
        ))}
      </section>
    </>
  )
}

export default Home