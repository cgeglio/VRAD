import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FavoritesContainer.scss';
import ListingPreview from '../ListingPreview/ListingPreview'

const FavoritesContainer = ({ favorites }) => {
  return favorites.map(favorite => {
    return (
      <ListingPreview
        listing={favorite}
        key={favorite.listing_id}
        addFavorite={this.addFavorite}
        setCurrentListing={this.props.setCurrentListing}
      />
    )
  })
}



export default FavoritesContainer
