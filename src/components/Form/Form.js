import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {name:'', email:'', purpose:''};
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  addUser = event => {
    event.preventDefault();
    this.props.addUser({name: this.state.name, email: this.state.email, purpose: this.state.purpose})
    this.setState({name:'', email:'', purpose:''});
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
        <button onClick={this.addUser}>Submit</button>
      </form>
    )
  }


}

export default Form
