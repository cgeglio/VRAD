import React from 'react'
import './Listing.scss';

const Listing = (props) => {
  return (
    <article>
      <h2>{props.listing.name}</h2>
      <h3>{props.listing.address.street}</h3>
    </article>
  )
}


export default Listing;
