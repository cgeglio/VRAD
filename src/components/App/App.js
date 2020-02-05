import React, {Component} from 'react';
import './App.scss';
import ListingContainer from '../ListingContainer/ListingContainer'
import { fetchListings } from './helpers.js'
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
      isLoading: true
    };
  }


  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas/')
      .then(response => response.json())
      .then(areas => fetchListings(areas))
      .then(areaData => this.setState({ areas: areaData, isLoading: false }))
      .catch(error => this.setState({ error:'Encountered error'}))
  }

  addUser = (user) => {
    this.setState({user: user, isLoggedIn: true});
  }

  logout = () => {
    this.setState({ isLoggedIn: false, user: { name: '', email: '', purpose: ''} })
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
            </>  
          )}
        </Route>
        <Route exact path='/areas'>
          <Header 
            user={this.state.user} 
            logout={this.logout} 
          />
          {!this.state.isLoading 
          ? 
          <>
            <AreasContainer 
              areas={this.state.areas} 
            /> 
            <ListingContainer areas={this.state.areas} />
          </>  
          : <Loader />}
        </Route>
      </main>
    )
  }
}

export default App;
