import React from 'react'
import imageBanner from '../assets/images/landscapeAbout.png'
import Banner from '../components/Banner'
import aboutContent from '../data/about.json'
import Collapse from '../components/Collapse'


const About = () => {
  return (
    <>

      <Banner srcImage={imageBanner} />

      <section className="aboutCollapses">
        {aboutContent.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            text={item.text}
          />
        ))}
      </section>

    </>
  )
}

export default About