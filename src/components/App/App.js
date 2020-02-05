import React, {Component} from 'react';
import './App.scss';
import ListingContainer from '../ListingContainer/ListingContainer'
import { fetchListings } from './helpers.js'
import Loader from '../Loader/Loader'
import Form from '../Form/Form'
import { AreasContainer } from '../AreasContainer/AreasContainer'

class App extends Component {
  constructor() {
    super()
    this.state= {areas: '', error: '', user: {name: '', email: '', purpose: ''}};
  }


  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas/')
      .then(response => response.json())
      .then(areas => fetchListings(areas))
      .then(areaData => {this.setState({ areas: areaData })
    console.log(areaData)})
      .catch(error => this.setState({ error:'Encountered error'}))
  }

  addUser = (user) => {
    this.setState({user: user});
  }


  render () {
    return (
      !this.state.areas ?
      <Loader /> :
      <main>
        <h1>Scout</h1>
        <Form
          addUser={this.addUser}
        />
        <AreasContainer areas={this.state.areas} />
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
