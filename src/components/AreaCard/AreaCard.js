import React from 'react';
import PropTypes from 'prop-types';
import './AreaCard.scss';
import { Link } from 'react-router-dom';

export const AreaCard = ({ id, nickname, longname, description, listings, addListingsToState }) => {

  return (
  <div className='area-card'>
    <h2>{nickname}</h2>
    <span>{longname}</span>
    <p>{description}</p>
    <Link to={`/area/${id}/listings`}>
      <button className='view-listings' onClick={() => addListingsToState(listings)}>View listings</button>
    </Link>
  </div>
  )
}

AreaCard.propTypes = {
  nickname: PropTypes.string,
  longname: PropTypes.string,
  description: PropTypes.string
};
