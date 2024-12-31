import React from 'react'
import Navigation from '../components/Navigation'
import logo from '../assets/images/logoHeader.png'

const Header = () => {
  return (
    <header>
        <div className="logoHeader">
            <img src ={logo} alt ="logo du site Kasa" />
        </div>
        <Navigation />
    </header>
  )
}

export default Header