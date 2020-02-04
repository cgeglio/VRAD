import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {name:'', email:'', purpose:''};
  }

  handleChange = e => {

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
      </form>
    )
  }


}

export default Form
