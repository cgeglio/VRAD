import React, { Component } from 'react';
import './ListingContainer.scss';
import Listing from '../Listing/Listing'

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
      .then(data => {
        this.setState({ listings: data, isLoading: false })
        console.log(this.state)
      })
  }


  render() {
    return (
      <div>{this.state.isLoading ? <h1>eh</h1> : <h2>meep</h2>}
        <h3>hi</h3>
        <p>{this.state.error}</p>
      </div>
    )
  }
}

export default ListingContainer
