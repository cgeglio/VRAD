import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListingPreview.scss';
import { Link } from 'react-router-dom';


class ListingPreview extends Component {
  constructor() {
    super();
    this.state = {favorite: false}
  }

  setFavorite = (listing) => {
    this.setState({favorite: !this.state.favorite})
    this.props.addFavorite(listing);
  }

  getImageName = () => this.state.favorite ? 'filled' : 'unfilled';

  render () {
    const icon = this.getImageName();
    return (
      <article>
        <img src={process.env.PUBLIC_URL + `/images/${this.props.listing.listing_id}_a.jpg`} alt="Listing" className="preview-img" />
        <div className="listing-preview">
          <h2 className="listing-name">{this.props.listing.name}</h2>
          <div className="buttons">
            <Link to={`/area/${this.props.listing.area_id}/listings/${this.props.listing.listing_id}`}><button onClick={() => {this.props.setCurrentListing(this.props.listing)}} className="details-btn">View Details</button></Link>
            <button onClick={() => {this.setFavorite(this.props.listing)}} className="favorite-btn"><img src={process.env.PUBLIC_URL + `/${icon}-heart.png`} alt="Favorite icon" className="favorite-img"/></button>
          </div>
        </div>
      </article>
    )
  }
}

export default ListingPreview;

ListingPreview.propTypes = {
  listing_id: PropTypes.number,
  name: PropTypes.string
};
