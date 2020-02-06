import React from 'react';
import PropTypes from 'prop-types';
import './ListingContainer.scss';
import Listing from '../Listing/Listing'

const ListingContainer = ({ areas }) => {
  let listings = areas.reduce((acc, area) => {
    area.listings.forEach(listing => acc.push(listing))
    return acc;
  },[]);

  return (
    <section>
      <h2>There Are {listings.length} Available Listings:</h2>
      {listings.map(listing => {
        return <Listing
          key={listing.name}
          {...listing}
        />
      })
    }
  </section>
  )
}

export default ListingContainer

ListingContainer.propTypes = {
  areas: PropTypes.array
};
