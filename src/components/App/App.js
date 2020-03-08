import React, { Component } from 'react';
import './App.scss';
import ListingContainer from '../ListingContainer/ListingContainer'
import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import { fetchDetails, getAreas } from '../../helpers';
import Loader from '../Loader/Loader'
import Form from '../Form/Form'
import { Header } from '../Header/Header'
import { AreasContainer } from '../AreasContainer/AreasContainer'
import { Route, Redirect, Link } from 'react-router-dom';
import AreaMap from '../AreaMap/AreaMap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      areas: '',
      error: '',
      user: { name: '', email: '', purpose: '' },
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: [],
    };
  }

  componentDidMount() {
    getAreas()
      .then(areas => fetchDetails(areas))
      .then(areaData => this.setState({ areas: areaData, isLoading: false }))
      .catch(error => this.setState({ error: 'Encountered error' }));
  }

  addUser = (user) => {
    this.setState({ user, isLoggedIn: true });
  }

  logout = () => {
    this.setState({ isLoggedIn: false, user: { name: '', email: '', purpose: '' }, favorites: [] });
  }

  addListingsToState = listings => {
    const allListings = listings.map(listing => listing);
    this.setState({ listings: allListings });
  }

  setCurrentListing = listing => {
    this.setState({ currentListing: listing });
  }

  addFavorite = listing => {
    const { favorites } = this.state;
    const ids = favorites.map(favorite => favorite.listing_id);
    return !ids.includes(listing.listing_id)
      ? this.setState({ favorites: [...favorites, listing] })
      : this.removeFavorite(listing.listing_id);
  }

  removeFavorite = listingId => {
    const { favorites } = this.state;
    this.setState({ favorites: favorites.filter(favorite => favorite.listing_id !== listingId) });
  }

  render() {
    const { favorites, user, listings, isLoading, isLoggedIn, areas, currentListing } = this.state;
    return (
      <main className="app">
        <Route exact path="/">
          <>
            {isLoggedIn ? <Redirect to="/areas" /> : (
              <>
                <img src={process.env.PUBLIC_URL + '/scoutGreen.png'} alt="Logo" className="logo" />
                <img src={process.env.PUBLIC_URL + '/rmnp.jpg'} alt="Rocky Mountain National Park" className="background-img" />
                <Form
                  addUser={this.addUser}
                />
              </>
            )}
          </>
        </Route>
        <Route exact path="/areas" render={() => {
          return !isLoggedIn ? <Redirect to="/" /> : (
            <>
              <Header
                favoritesNumber={favorites.length}
                user={user}
                logout={this.logout}
              />
              {!isLoading
                ? (
                  <>
                    <AreasContainer
                      areas={areas}
                      addListingsToState={this.addListingsToState}
                    />
                    <AreaMap />
                  </>
                )
                : <Loader />}
            </>
          );
        }}
        />
        <Route exact path="/area/:id/listings" render={() => {
          return !isLoggedIn ? <Redirect to="/" /> : (
            <>
              <Header
                favoritesNumber={favorites.length}
                user={user}
                logout={this.logout}
              />
              <ListingContainer
                favorites={favorites}
                listings={listings}
                addFavorite={this.addFavorite}
                setCurrentListing={this.setCurrentListing}
              />
              <Link to="/areas" className="back-btn">Back to Areas</Link>
            </>
          );
        }}
        />
        <Route exact path="/area/:id/listings/:id" render={() => {
          return !isLoggedIn ? <Redirect to="/" /> : (
            <>
              <Header
                favoritesNumber={favorites.length}
                user={user}
                logout={this.logout}
              />
              <ListingDetailsContainer
                {...currentListing}
              />
              <Link to="/area/:id/listings" className="back-btn">Back to Listings</Link>
            </>
          );
        }}
        />
        <Route exact path="/favorites" render={() => {
          return !isLoggedIn ? <Redirect to="/" /> : (
            <>
              <Header
                favoritesNumber={favorites.length}
                user={user}
                logout={this.logout}
              />
              {!favorites.length
                ? (
                  <div className="page">
                    <h2 className="no-favorites">You don't have any favorites yet!</h2>
                    <Link to="/area/:id/listings" className="back-btn">Back to Listings</Link>
                  </div>
                )
                : (
                  <div className="page">
                    <FavoritesContainer
                      favorites={favorites}
                      addFavorite={this.addFavorite}
                      setCurrentListing={this.setCurrentListing}
                    />
                    <Link to="/area/:id/listings" className="back-btn">Back to Listings</Link>
                  </div>
                )}
            </>
          );
        }}
        />
      </main>
    );
  }
}

export default App;
