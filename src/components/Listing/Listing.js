import React from 'react'
import './Listing.scss';

const Listing = (props) => {
  return (
    <article>
      <img src={process.env.PUBLIC_URL + `/images/${props.listing.listing_id}_a.jpg`} alt="Listing" className="preview-img" />
      <div className="listing-preview">
        <h2 className="listing-name">{props.listing.name}</h2>
        <button className="details-btn">Details</button>
      </div>
    </article>
  )

}

export default Listing;
