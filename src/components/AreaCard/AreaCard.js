import React from 'react';
import './AreaCard.scss';

export const AreaCard = ({ nickname, longname, description, listings, addListingsToState }) => {
  return (
  <div className='area-card'>
    <h2>{nickname}</h2>
    <span>{longname}</span>
    <p>{description}</p>
    <button className='view-listings' onClick={() => addListingsToState(listings)}>View listings</button>
  </div>
  )
}