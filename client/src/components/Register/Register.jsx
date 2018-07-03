import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TextField, Button } from '@material-ui/core';
import './Register.css';


class Register extends Component {
  state = {
    fullname: '', username: '', email: '', password: ''
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name] : value });
  }

  handleRegisterClick = (event) => {
    // todo: Dispatch register action that sets whatever th user has entered this in state
    console.log('clicked');
  }

  render() {
    return (
      <div className="register-form-container">
        <div className="wrap-login">
          <TextField
            name="fullname"
            autoFocus
            label="Full Name"
            required
            value={this.state.fullname}
            onChange={this.handleInputChange}
            />
          <TextField
            name="username"
            label="Username"
            required
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <TextField
            name="email"
            label="Email"
            required
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <TextField
            name="password"
            label="Password"
            required
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <div className="register-btn"><Button variant="contained" name="login" onClick={this.handleRegisterClick}>Register</Button></div>
          <span className="sign-up-redirect">Don’t have an account?<a href="#">Sign Up</a></span>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  // name: PropTypes.string,
};

export default Register;

