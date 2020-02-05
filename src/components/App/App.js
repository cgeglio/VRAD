import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state= {user: {name: '', email: '', purpose: ''}};
  }

  addUser = (user) => {
    this.setState({user: user});
  }

  render () {
    return (
      <main>
        <h1>Denver Digs</h1>
        <Form
          addUser={this.addUser}
        />
      </main>
    )
  }
}

export default App;
