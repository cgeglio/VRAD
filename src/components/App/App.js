import React, {Component} from 'react';
import './App.scss';
import ListingContainer from '../ListingContainer/ListingContainer'
import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import { fetchDetails } from './helpers.js'
import Loader from '../Loader/Loader'
import Form from '../Form/Form'
import { Header } from '../Header/Header'
import { AreasContainer } from '../AreasContainer/AreasContainer'
import { Route, Redirect } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

class App extends Component {
  constructor() {
    super()
    this.state= {
      isLoggedIn: false,
      areas: '',
      error: '',
      user: {name: '', email: '', purpose: ''},
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas/')
      .then(response => response.json())
      .then(areas => fetchDetails(areas))
      .then(areaData => this.setState({ areas: areaData, isLoading: false }))
      .catch(error => this.setState({ error:'Encountered error'}))
  }

  addUser = (user) => {
    this.setState({user: user, isLoggedIn: true});
  }

  logout = () => {
    this.setState({ isLoggedIn: false, user: { name: '', email: '', purpose: ''} })
  }

  addListingsToState = listings => {
    const allListings = listings.map(listing => listing)
    this.setState({ listings: allListings })
  }

  setCurrentListing = listing => {
    this.setState({currentListing: listing})
  }

  addFavorite = listing => {
    !this.state.favorites.includes(listing) ?
    this.setState({favorites: [...this.state.favorites, listing]}) :
    this.removeFavorite(listing.listing_id);
  }

  removeFavorite = listingId => {
    this.setState({favorites: this.state.favorites.filter(favorite => favorite.listing_id !== listingId)});
  }

  render () {

    return (
      <main className='app'>
        <Route exact path='/'>
          <>
          {this.state.isLoggedIn ? <Redirect to='/areas' /> : (
            <>
              <img src={process.env.PUBLIC_URL + `/scoutGreen.png`} alt="Logo" className="logo" />
              <img src={process.env.PUBLIC_URL + `/rmnp.jpg`} alt="Rocky Mountain National Park" className="background-img" />
              <Form
                addUser={this.addUser}
              />
              <Loader />
            </>
          )}
          </>
        </Route>
        <Route exact path='/areas' render={() => {
          return (
          <>
            <Header
              user={this.state.user}
              logout={this.logout}
            />
            {!this.state.isLoading
            ?
            <>
              <AreasContainer
                areas={this.state.areas}
                addListingsToState={this.addListingsToState}
              />
            </>
            : <Loader />}
          </>
          )
        }}/>
        <Route exact path='/area/:id/listings' render={({ match }) => {
          return (
            <>
              <Header
                user={this.state.user}
                logout={this.logout}
              />
              <ListingContainer
                favorites={this.state.favorites}
                listings={this.state.listings}
                addFavorite={this.addFavorite}
                setCurrentListing={this.setCurrentListing}
              />
            </>
          )
        }} />
        <Route exact path='/area/:id/listings/:id' render={({ match }) => {

          return (
            <>
              <Header
                user={this.state.user}
                logout={this.logout}
              />
              <ListingDetailsContainer
                {...this.state.currentListing}
              />
            </>
          )
        }} />
      <Route exact path='/favorites' render={({ match }) => {

        return (
          <>
            <Header
              user={this.state.user}
              logout={this.logout}
            />
            <FavoritesContainer
              favorites={this.state.favorites}
              addFavorite={this.addFavorite}
              setCurrentListing={this.setCurrentListing}
            />
          </>
        )
      }} />
    </main>
    )
  }
}

export default App;
