import React from 'react'
import './Listing.scss';

const Listing = (props) => {
  return (
    <article>
      <img src={process.env.PUBLIC_URL + `/images/${props.listing.listing_id}_a.jpg`} alt="Listing" />
      <h2>{props.listing.name}</h2>
      <button>Details</button>
    </article>
  )

}

export default Listing;
