import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TextField, Button, FormControl, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import './Register.css';

import * as actions from '../../actions/creators';

class Register extends Component {
  state = {
    user: {
      fullname: '', username: '', email: '', password: ''
    },
    showPassword: false,
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({ user: { [name]: value } });
  }

  handleRegisterClick = () => {
    const user = this.state.user;
    this.props.actions.register(user);
  }

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          <FormControl>
          <TextField
            required
            label="Password"
            type={this.state.showPassword ? 'text' : 'password'}
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            endadornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  {"here"}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
          <div className="register-btn"><Button variant="contained" name="login" onClick={this.handleRegisterClick}>Register</Button></div>
          <span className="sign-up-redirect">Don’t have an account?<a href="#">Sign Up</a></span>
        </div>
      </div>
    );
  }
}

// Declare what part of the redux store you'd like to expose to the component as props
const mapStateToProps = (state, ownProps) => {
  // props: state
  return {
  }
}

// Declare actions we want to expose as props to the component
const mapDispatchToProps = (dispatch) => {
  // props: actions
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Register.propTypes = {
  // name: PropTypes.string,
};

export default connect((mapStateToProps), mapDispatchToProps)(Register);

