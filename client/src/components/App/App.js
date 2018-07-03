import React, { Component } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';

// TODO: Render login or register dependent on routes

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}

export default App;
