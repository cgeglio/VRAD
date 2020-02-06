import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'

export const Header = ({ user, logout }) => {
  return (
    <div className='header'>
      <header>
        <h1>Scout</h1>
        <Link to='/'><button className='logOut' onClick={() => logout()}>Log out</button></Link>
      </header>
      <section className='subheader'>
        <h3>Welcome {user.name}!</h3>
        <button className='favorites'>Favorites</button>
      </section>
    </div>
  )
}