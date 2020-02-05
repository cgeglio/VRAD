import React, {Component} from 'react';
import './App.scss';
import ListingContainer from '../ListingContainer/ListingContainer'
import { fetchListings } from './helpers.js'
import Loader from '../Loader/Loader'
import Form from '../Form/Form'
import { AreasContainer } from '../AreasContainer/AreasContainer'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state= {
      isLoggedIn: false,
      areas: '', 
      error: '', 
      user: {name: '', email: '', purpose: ''}
    };
  }


  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas/')
      .then(response => response.json())
      .then(areas => fetchListings(areas))
      .then(areaData => this.setState({ areas: areaData }))
      .catch(error => this.setState({ error:'Encountered error'}))
  }

  addUser = (user) => {
    this.setState({user: user, isLoggedIn: true});
  }


  render () {
    return (
      <main className='app'>
        <Route exact path='/'>
          {this.state.isLoggedIn ? <Redirect to='/areas' /> : (
            <>
              <h1>Scout</h1>
              <Form
                addUser={this.addUser}
              />
            </>  
          )}
        </Route>
        <Route exact path='/areas'>
          <AreasContainer areas={this.state.areas} />
        </Route>
      </main>
    )
  }
}

export default App;
