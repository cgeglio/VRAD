import React from 'react';
import PropTypes from 'prop-types';
import './ListingDetails.scss';

const ListingDetails = ({ name, listing_id, area_id, address, details, area }) => {
  return (
    <article>
      <h1>{name}</h1>
    </article>
  )
}

export default ListingDetails
