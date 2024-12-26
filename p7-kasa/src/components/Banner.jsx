import React from 'react'
import logo from '../assets/images/landscape.png'

const Banner = () => {
  const title = 'Chez vous, partout et ailleurs'

  return (
    <div className="banner">
      <img src={ logo } alt='Bannière payasage du site' className='logoBanner' />
      <h1 className='titleBanner'>{ title }</h1>
    </div>
  )
}

export default Banner