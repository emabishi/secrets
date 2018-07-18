import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { TextField, Button } from '@material-ui/core';

import * as actions from '../../actions/creators';

import { bindActionCreators } from 'redux';

class Login extends Component {
  state = {
    username: '', password: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLoginClick = (event) => {
    this.props.actions.login(this.state, this.props.history)
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="wrap-login">
          <TextField
            name="username"
            label="Username"
            required
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <TextField
            name="password"
            label="Password"
            required
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <div className="register-btn"><Button variant="contained" name="login" onClick={this.handleLoginClick}>Login</Button></div>
          <span className="sign-up-redirect">Don't have an account?<Link to="/register">Sign Up</Link></span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);