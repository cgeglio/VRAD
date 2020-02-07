import React from 'react';
import PropTypes from 'prop-types';
import './ListingDetails.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ListingDetails = ({ name, listing_id, address, details }) => {
  const createList = details.features.map(feature => <li key={Math.random()}>{feature}</li>)
  
  return (
    <article className='listing'>
      <Carousel className='carousel' width='700px'>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_a.jpg`} alt='listing 1' />
        </div>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_b.jpg`} alt='listing 2' />
        </div>
        <div>
          <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${listing_id}_c.jpg`} alt='listing 3' />
        </div>
      </Carousel>

      <section className='listing-details'>
        <div className='title'>
          <h2>{name}</h2>
          <p>{address.street}, {address.zip}</p>
        </div>
        <div>
          <p className='cost'>${details.cost_per_night} per night</p>
        </div>
        <div className='bed-bath'>
          <p>Beds: {details.beds} / Baths: {details.baths}</p>
        </div>
        <div className='features'>
          <h3>Features:</h3>
          <ul>{createList}</ul>
        </div>
      </section>
    </article>
  )
}

export default ListingDetails