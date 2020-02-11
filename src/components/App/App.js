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
import { Route, Redirect, Link } from 'react-router-dom'

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
    this.setState({ isLoggedIn: false, user: { name: '', email: '', purpose: ''}, favorites: [] })
  }

  addListingsToState = listings => {
    const allListings = listings.map(listing => listing)
    this.setState({ listings: allListings })
  }

  setCurrentListing = listing => {
    this.setState({currentListing: listing})
  }

  addFavorite = listing => {
    let ids = this.state.favorites.map(favorite => favorite.listing_id);
    !ids.includes(listing.listing_id) ?
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
            </>
          )}
          </>
        </Route>
        <Route exact path='/areas' render={() => {
          return !this.state.isLoggedIn ? <Redirect to='/' /> : (
          <>
            <Header
              favoritesNumber={this.state.favorites.length}
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
          return !this.state.isLoggedIn ? <Redirect to='/' /> : (
            <>
              <Header
                favoritesNumber={this.state.favorites.length}
                user={this.state.user}
                logout={this.logout}
              />
              <ListingContainer
                favorites={this.state.favorites}
                listings={this.state.listings}
                addFavorite={this.addFavorite}
                setCurrentListing={this.setCurrentListing}
              />
              <Link to='/areas' className="back-btn">Back to Areas</Link>
            </>
          )
        }} />
        <Route exact path='/area/:id/listings/:id' render={({ match }) => {
          return !this.state.isLoggedIn ? <Redirect to='/' /> : (
            <>
              <Header
                favoritesNumber={this.state.favorites.length}
                user={this.state.user}
                logout={this.logout}
              />
              <ListingDetailsContainer
                {...this.state.currentListing}
              />
              <Link to='/area/:id/listings' className="back-btn">Back to Listings</Link>
            </>
          )
        }} />
      <Route exact path='/favorites' render={({ match }) => {
        return !this.state.isLoggedIn ? <Redirect to='/' /> : (
          <>
            <Header
              favoritesNumber={this.state.favorites.length}
              user={this.state.user}
              logout={this.logout}
            />
        {!this.state.favorites.length ?
          <div className='page'>
            <h2 className="no-favorites">You don't have any favorites yet!</h2>
            <Link to='/area/:id/listings' className="back-btn">Back to Listings</Link>
          </div> :
          <div className='page'>
            <FavoritesContainer
              favorites={this.state.favorites}
              addFavorite={this.addFavorite}
              setCurrentListing={this.setCurrentListing}
            />
            <Link to='/area/:id/listings' className="back-btn">Back to Listings</Link>
          </div>
          }
          </>
        )
      }} />
    </main>
    )
  }
}

export default App;
