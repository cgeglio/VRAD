import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListingContainer.scss';
import ListingPreview from '../ListingPreview/ListingPreview'
import Loader from '../Loader/Loader'

class ListingContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      listings: '',
      error: ''
    }
  }

  componentDidMount() {
    let allListings = this.props.listings.map(listing => {
      return fetch(`http://localhost:3001${listing}`)
        .then(res => res.json())
        .then(data => data)
    })
    Promise.all(allListings)
      .then(data => this.setState({ listings: data, isLoading: false }))
  }

  createCards = () => {
    return this.state.listings.map(listing => {
      return(
        <ListingPreview
          listing={listing}
          key={listing.listing_id}
          setCurrentListing={this.props.setCurrentListing}
        />
      )
    })
  }


  render() {
    return (
      <>{this.state.isLoading
        ? <Loader />
        : <section>{this.createCards()}</section>}
      </>
    )
  }
}

export default ListingContainer

ListingContainer.propTypes = {
  areas: PropTypes.array
};
