import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'

export const Header = ({ user, logout }) => {
  return (
    <div>
      <header>Scout</header>
  <div className='subheader'>{user.name}</div>
      <Link to='/'><button className='logOut' onClick={() => logout()}>Log Out</button></Link>
    </div>
  )
}