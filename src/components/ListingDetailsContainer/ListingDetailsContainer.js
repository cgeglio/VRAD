import React from 'react';
import PropTypes from 'prop-types';
import './ListingDetailsContainer.scss';
import ListingDetails from '../ListingDetails/ListingDetails'

const ListingDetailsContainer = (props) => {
  return (
      <ListingDetails
        {...props}
        key={props.listing_id}
      />
    )
}

export default ListingDetailsContainer;

ListingDetailsContainer.propTypes = {
  name: PropTypes.string,
  listing_id: PropTypes.number,
  address: PropTypes.object,
  details: PropTypes.object
};
