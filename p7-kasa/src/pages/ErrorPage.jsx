import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='errorPage'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to='/'>
        <p>Retourner sur la page d’accueil</p>
        </NavLink>
    </section>
  )
}

export default ErrorPage