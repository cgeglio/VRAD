import React, {Component} from 'react';
import './App.scss';
import ListingContainer from '../ListingContainer/ListingContainer'
import { fetchDetails } from './helpers.js'
import Loader from '../Loader/Loader'
import Form from '../Form/Form'
import { Header } from '../Header/Header'
import { AreasContainer } from '../AreasContainer/AreasContainer'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state= {
      isLoggedIn: false,
      areas: '', 
      error: '', 
      user: {name: '', email: '', purpose: ''},
      isLoading: true,
      listings: []
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
    console.log(allListings)
  }


  render () {
    return (
      <main className='app'>
        <Route exact path='/'>
          {this.state.isLoggedIn ? <Redirect to='/areas' /> : (
            <>
              <Header 
                user={this.state.user} 
                logout={this.logout} 
              />
              <Form
                addUser={this.addUser}
              />
              <Loader />
            </>  
          )}
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
      </main>
    )
  }
}

export default App;
