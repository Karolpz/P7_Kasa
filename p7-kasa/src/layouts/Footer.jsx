import React from 'react'
import logo from '../assets/images/logoFooter.png'

const Footer = () => {
  return (
    <footer>
      <div className='logoFooter'>
        <img src = { logo } alt = 'logo du site Kasa' />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer