import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListingPreview.scss';
import { Link } from 'react-router-dom';


class ListingPreview extends Component {
  constructor() {
    super();
    this.state = { favorite: '' };
  }

  determineIcon = () => {
    const { listing } = this.props;
    return listing.favorite ? 'filled' : 'unfilled';
  };

  determineFavorite = () => {
    const { listing, addFavorite } = this.props;
    listing.favorite = !listing.favorite;
    this.setState({ favorite: listing.favorite });
    addFavorite(listing);
  }

  render() {
    const { listing, setCurrentListing } = this.props;
    return (
      <article>
        <img src={process.env.PUBLIC_URL + `/images/${listing.listing_id}_a.jpg`} alt="Listing" className="preview-img" />
        <div className="listing-preview">
          <h2 className="listing-name">{listing.name}</h2>
          <div className="buttons">
            <Link to={`/area/${listing.area_id}/listings/${listing.listing_id}`}><button type="button" onClick={() => { setCurrentListing(listing) }} className="details-btn">View Details</button></Link>
            <button type="button" onClick={() => { this.determineFavorite() }} className="favorite-btn"><img src={process.env.PUBLIC_URL + `/${this.determineIcon()}-heart.png`} alt="Favorite icon" className="favorite-img" /></button>
          </div>
        </div>
      </article>
    );
  }
}

export default ListingPreview;

ListingPreview.propTypes = {
  listing: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
  setCurrentListing: PropTypes.func.isRequired,
};
