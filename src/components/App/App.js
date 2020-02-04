import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state= {};
  }

  render () {
    return (
      <main>
        <h1>Denver Digs</h1>
        <Form />
      </main>
    )
  }
}

export default App;
