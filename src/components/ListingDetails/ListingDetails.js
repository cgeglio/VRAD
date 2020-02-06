import React from 'react';
import PropTypes from 'prop-types';
import './ListingDetails.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ListingDetails = ({name, listing_id, address, details}) => {
  const createList = details.features.map(feature => <li>{feature}</li>)
  
  return (
    <article>
      <Carousel className='carousel' width='700px'>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_a.jpg`} />
          <p>sup</p>
        </div>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_b.jpg`} />
        </div>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_c.jpg`} />
        </div>
      </Carousel>

      <h1>{name}</h1>
      <p>{address.street}, {address.zip}</p>
      <p>Beds: {details.beds}</p>
      <p>Baths: {details.baths}</p>
      <ul>{createList}</ul>
    </article>
  )
}

export default ListingDetails


