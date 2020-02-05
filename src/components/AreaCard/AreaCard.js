import React from 'react';
import './AreaCard.scss';

export const AreaCard = ({ nickname, longname, description }) => {
  return (
  <div>
    <h2>{nickname}</h2>
    <span>{longname}</span>
    <p>{description}</p>
    <button className='view-listings'>View listings</button>
  </div>
  )
}