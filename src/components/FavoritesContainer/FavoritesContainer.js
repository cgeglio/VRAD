import React from 'react';
import PropTypes from 'prop-types';
import './FavoritesContainer.scss';
import ListingPreview from '../ListingPreview/ListingPreview'

const FavoritesContainer = ({ favorites, addFavorite, setCurrentListing }) => {
  return favorites.map(favorite => {
    favorite.favorite = true;
    return (
      <ListingPreview
        listing={favorite}
        key={favorite.listing_id}
        addFavorite={addFavorite}
        setCurrentListing={setCurrentListing}
      />
    )
  })
}

export default FavoritesContainer

FavoritesContainer.propTypes = {
  favorites: PropTypes.array,
  addFavorite: PropTypes.func,
  setCurrentListing: PropTypes.func
};
