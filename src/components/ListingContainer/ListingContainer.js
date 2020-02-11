import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListingContainer.scss';
import ListingPreview from '../ListingPreview/ListingPreview';
import Loader from '../Loader/Loader';

class ListingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listings: '',
      error: '',
    };
  }

  componentDidMount() {
    const { listings } = this.props;
    const allListings = listings.map(listing => {
      return fetch(`http://localhost:3001${listing}`)
        .then(res => res.json())
        .then(data => data);
    });
    Promise.all(allListings)
      .then(data => data.map(listing => ({ ...listing, favorite: false })))
      .then(listingInfo => this.setState({ listings: listingInfo, isLoading: false }));
  }

  determineFavoriteStatus = () => {
    const { favorites } = this.props;
    const ids = favorites.map(favorite => favorite.listing_id);
    return this.state.listings.map(listing => {
      return ids.includes(listing.listing_id) ? listing.favorite = true : listing;
    });
  }

  createCards = () => {
    const { addFavorite, setCurrentListing } = this.props;
    const { listings } = this.state;
    this.determineFavoriteStatus();
    return listings.map(listing => {
      return (
        <ListingPreview
          listing={listing}
          key={listing.listing_id}
          addFavorite={addFavorite}
          setCurrentListing={setCurrentListing}
        />
      );
    });
  }


  render() {
    const { isLoading } = this.state;
    return (
      <>{isLoading
        ? <Loader />
        : <section>{this.createCards()}</section>}
      </>
    );
  }
}

export default ListingContainer;

ListingContainer.propTypes = {
  favorites: PropTypes.array.isRequired,
  listings: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
  setCurrentListing: PropTypes.func.isRequired,
};
