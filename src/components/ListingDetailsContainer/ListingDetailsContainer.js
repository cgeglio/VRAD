import React from 'react';
import PropTypes from 'prop-types';
import './ListingDetailsContainer.scss';
import ListingDetails from '../ListingDetails/ListingDetails';

const ListingDetailsContainer = (props) => {
  return (
    <ListingDetails
      {...props}
      key={props.listing_id}
    />
  );
};

export default ListingDetailsContainer;

ListingDetailsContainer.propTypes = {
  name: PropTypes.string.isRequired,
  listing_id: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};
