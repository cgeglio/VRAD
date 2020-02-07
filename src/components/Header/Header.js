import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Link } from 'react-router-dom'

export const Header = ({ user, logout, favoritesNumber }) => {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + `/scoutGreen.png`} alt="Logo"/>
      <h2>Welcome {user.name}!</h2>
      <div>
        <Link to='/favorites'><button className='favorites'>Favorites ({`${favoritesNumber || 0}`})</button></Link>
        <Link to='/'><button className='logOut' onClick={() => logout()}>Log out</button></Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};
