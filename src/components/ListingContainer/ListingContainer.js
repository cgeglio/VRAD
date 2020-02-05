import React from 'react';
import './ListingContainer.scss';
import Listing from '../Listing/Listing'

const ListingContainer = (props) => {
  let listings = props.areas.reduce((acc, area) => {
    console.log(area.listings);
    area.listings.forEach(listing => acc.push(listing))
    return acc;
  },[]);

  return (
    <section>
      <h2>Listings:</h2>
      {listings.map(listing => {
        return <Listing
          key={listing.id}
          listing={listing}
        />
      })
    }
  </section>
  )
}





export default ListingContainer
