import React from 'react'
import logo from '../assets/images/logoFooter.png'

const Footer = () => {
  return (
    <footer>
      <img src = { logo } alt = 'logo du site Kasa' className='logoFooter' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer