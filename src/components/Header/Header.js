import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'

export const Header = ({ user, logout }) => {
  return (

    <div>
      <header><img src={process.env.PUBLIC_URL + `/scoutGreen.png`} alt="Logo" className="header-logo" /></header>
  <div className='subheader'>{user.name}</div>
      <Link to='/'><button className='logOut' onClick={() => logout()}>Log out</button></Link>
      <button className='favorites'>Favorites</button>
    </div>
  )
}
