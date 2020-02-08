import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListingPreview.scss';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';


class ListingPreview extends Component {
  constructor () {
    super();
    this.state = {favorite: ''}
  }

  determineIcon = () => this.props.listing.favorite ? 'filled' : 'unfilled';

  determineFavorite = () => {
    this.props.listing.favorite = !this.props.listing.favorite;
    this.setState({favorite: this.props.listing.favorite})
    this.props.addFavorite(this.props.listing)
  }

  render () {
    return (
      <article>
        <Carousel className='carousel' width='500px' showThumbs={false} infiniteLoop={true}>
          <div>
            <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${this.props.listing.listing_id}_a.jpg`} alt='listing 1' />
          </div>
          <div>
            <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${this.props.listing.listing_id}_b.jpg`} alt='listing 2' />
          </div>
          <div>
            <img className='listing-img' src={process.env.PUBLIC_URL + `/images/${this.props.listing.listing_id}_c.jpg`} alt='listing 3' />
          </div>
        </Carousel>
        <div className="listing-preview">
          <h2 className="listing-name">{this.props.listing.name}</h2>
          <div className="buttons">
            <Link to={`/area/${this.props.listing.area_id}/listings/${this.props.listing.listing_id}`}><button onClick={() => {this.props.setCurrentListing(this.props.listing)}} className="details-btn">View Details</button></Link>
            <button onClick={() => {this.determineFavorite()}} className="favorite-btn"><img src={process.env.PUBLIC_URL + `/${this.determineIcon()}-heart.png`} alt="Favorite icon" className="favorite-img"/></button>
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
