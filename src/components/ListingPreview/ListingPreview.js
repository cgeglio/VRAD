import React from 'react';
import PropTypes from 'prop-types';
import './ListingPreview.scss';
import { Link } from 'react-router-dom';

const ListingPreview = ({ listing, setCurrentListing  }) => {

  return (
    <article>
      <img src={process.env.PUBLIC_URL + `/images/${listing.listing_id}_a.jpg`} alt="Listing" className="preview-img" />
      <div className="listing-preview">
        <h2 className="listing-name">{listing.name}</h2>
        <Link to={`/area/${listing.area_id}/listings/${listing.listing_id}`}><button onClick={() => {setCurrentListing(listing)}} className="details-btn">Details</button></Link>
      </div>
    </article>
  )
}

export default ListingPreview;

ListingPreview.propTypes = {
  listing_id: PropTypes.number,
  name: PropTypes.string
};
