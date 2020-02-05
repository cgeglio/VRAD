import React from 'react';
import './AreaCard.scss';

export const AreaCard = ({ nickname, longname, description, selectArea }) => {
  console.log(longname);
  console.log(nickname);
  return (
  <div className='area-card'>
    <h2>{nickname}</h2>
    <span>{longname}</span>
    <p>{description}</p>
    <button className='view-listings' onClick={() => {selectArea(nickname)}}>View listings</button>
  </div>
  )
}
