import React from 'react';
import PropTypes from 'prop-types';
import './Listing.scss';

const Listing = ({ listing_id, name  }) => {
  return (
    <article>
      <img src={process.env.PUBLIC_URL + `/images/${listing_id}_a.jpg`} alt="Listing" className="preview-img" />
      <div className="listing-preview">
        <h2 className="listing-name">{name}</h2>
        <button className="details-btn">Details</button>
      </div>
    </article>
  )

}

export default Listing;

Listing.propTypes = {
  listing_id: PropTypes.number,
  name: PropTypes.string
};
