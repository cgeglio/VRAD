import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {name:'', email:'', purpose:'', error: false}
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value, error: false});
  }

  checkInputs = event => {
    event.preventDefault();
    let formValues = Object.values(this.state);
    if (!formValues.includes('')) {
      this.addUser(event);
    } else {
      this.setState({error: true})
    }
  }

  addUser = event => {
    event.preventDefault();
    this.props.addUser({name: this.state.name, email: this.state.email, purpose: this.state.purpose})
    this.setState({name:'', email:'', purpose:'', error: false});
  }


  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Email..."
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Purpose..."
          name="purpose"
          value={this.state.purpose}
          onChange={this.handleChange}
          list="purpose"/>
        <datalist id="purpose">
          <option value="Vacation"/>
          <option value="Business"/>
          <option value="Other"/>
        </datalist>
        <button className="submit-button" onClick={this.checkInputs}>Submit</button>
        { this.state.error ? <p>Please complete all fields!</p> : null }
      </form>
    )
  }
}

export default Form
