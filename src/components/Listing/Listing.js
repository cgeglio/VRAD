import React from 'react'
import './Listing.css';

const Listing = (props) => {
  console.log(props.listing);
  return (
    <article>
      <h2>{props.listing.name}</h2>
      <h3>{props.listing.address.street}</h3>
    </article>
  )
}


export default Listing;
