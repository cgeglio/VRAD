import React, {Component} from 'react';
import './App.css';
import ListingContainer from '../ListingContainer/ListingContainer'
import { fetchListings } from './helpers.js'
import Loader from '../Loader/Loader'

class App extends Component {
  constructor() {
    super()
    this.state= {areas: '', error: ''};
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
      !this.state.areas ?
      <Loader /> :
      <main>
        <h1>Scout</h1>
        <section>
          {!this.state.areas[0].listings ?
            <Loader /> :
            <ListingContainer areas={this.state.areas} />
          }
        </section>
      </main>
    )
  }
}

export default App;
