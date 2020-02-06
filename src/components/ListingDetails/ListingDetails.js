import React from 'react';
import PropTypes from 'prop-types';
import './ListingDetails.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ListingDetails = ({name, listing_id, address, details }) => {
  const createList = details.features.map(feature => <li>{feature}</li>)
  
  return (
    <article>
      <Carousel className='carousel' width='700px'>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_a.jpg`} />
        </div>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_b.jpg`} />
        </div>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_c.jpg`} />
        </div>
      </Carousel>

      <div className='title'>
        <h2>{name}</h2>
        <p>{address.street}, {address.zip}</p>
      </div>
      <div className='cost'>
        <p>${details.cost_per_night} per night</p>
      </div>
      <div className='bed-bath'>
        <p>Beds: {details.beds}</p>
        <p>Baths: {details.baths}</p>
      </div>
      <div className='features'>
        <h3>Features:</h3>
        <ul>{createList}</ul>
      </div>

    </article>
  )
}

export default ListingDetails


