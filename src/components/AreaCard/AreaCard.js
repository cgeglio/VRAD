import React from 'react';
import PropTypes from 'prop-types';
import './AreaCard.scss';
import { Link } from 'react-router-dom';

export const AreaCard = ({ id, nickname, longname, description, listings, addListingsToState }) => {
  return (
    <div className="area-card">
      <img src={process.env.PUBLIC_URL + `/${nickname.split(' ').join('')}.jpg`} alt="Area" />
      <h2>{nickname}</h2>
      <span>{longname}</span>
      <p>{description}</p>
      <Link to={`/area/${id}/listings`}>
        <button type="button" className="view-listings" onClick={() => addListingsToState(listings)}>View Listings</button>
      </Link>
    </div>
  );
};

AreaCard.propTypes = {
  id: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  longname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  listings: PropTypes.array,
  addListingsToState: PropTypes.func,
};
