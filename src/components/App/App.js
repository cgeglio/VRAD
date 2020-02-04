import React, {Component} from 'react';
import './App.css';
import ListingContainer from '../ListingContainer/ListingContainer'
import { fetchListings } from './helpers.js'

class App extends Component {
  constructor() {
    super()
    this.state= {areas: [], error: ''};
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas/')
      .then(response => response.json())
      .then(areas => fetchListings(areas))
      .then(areaData => this.setState({ areas: areaData }))
      .catch(error => this.setState({ error:'Encountered error'}))
  }

  render () {
    return (
      <main>
        <h1>Scout</h1>
        {
          !this.state.areas.length ?
          <Loader /> :
          <ListingContainer areas={this.state.areas} />
        }
      </main>
    )
  }
}

export default App;
