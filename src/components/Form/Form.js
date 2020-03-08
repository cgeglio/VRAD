import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = { name: '', email: '', purpose: '', error: false };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, error: false });
  }

  checkInputs = event => {
    event.preventDefault();
    const formValues = Object.values(this.state);
    if (!formValues.includes('')) {
      this.addUser(event);
    } else {
      this.setState({ error: true });
    }
  }

  addUser = event => {
    event.preventDefault();
    const { name, email, purpose } = this.state;
    const { addUser } = this.props;
    addUser({ name, email, purpose });
    this.setState({ name: '', email: '', purpose: '', error: false });
  }


  render() {
    const { name, email, purpose, error } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Email..."
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Purpose..."
          name="purpose"
          value={purpose}
          onChange={this.handleChange}
          list="purpose"
        />
        <datalist id="purpose">
          <option value="Vacation" />
          <option value="Business" />
          <option value="Other" />
        </datalist>
        <button type="button" className="submit-button" onClick={this.checkInputs}>Submit</button>
        { error ? <p>Please complete all fields!</p> : null }
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  addUser: PropTypes.func.isRequired,
};
