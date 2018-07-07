import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TextField, Button } from '@material-ui/core';

class Login extends Component {
  state = {
    username: '', password: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLoginClick = (event) => {
    // todo: Dispatch login action that sets whatever th user has entered this in state
    console.log('clicked');
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
          <div className="register-btn"><Button variant="contained" name="login" onClick={this.handleRegisterClick}>Login</Button></div>
          <span className="sign-up-redirect">Don't have an account?<Link to="/register">Register</Link></span>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  // name: PropTypes.string,
};

export default Login;