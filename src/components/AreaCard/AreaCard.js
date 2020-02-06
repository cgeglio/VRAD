import React from 'react';
import PropTypes from 'prop-types';
import './AreaCard.scss';

export const AreaCard = ({ nickname, longname, description }) => {
  return (
  <div className='area-card'>
    <h2>{nickname}</h2>
    <span>{longname}</span>
    <p>{description}</p>
    <button className='view-listings'>View listings</button>
  </div>
  )
}

AreaCard.propTypes = {
  nickname: PropTypes.string,
  longname: PropTypes.string,
  description: PropTypes.string
};
