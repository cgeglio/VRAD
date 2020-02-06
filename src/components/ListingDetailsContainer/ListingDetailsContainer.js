import React from 'react';
import PropTypes from 'prop-types';
import './ListingDetailsContainer.scss';
import ListingDetails from '../ListingDetails/ListingDetails'

const ListingDetailsContainer = ({ name, listing_id }) => {
  return (
      <ListingDetails
        name={name}
        key={listing_id}
      />
    )
}

export default ListingDetailsContainer;
