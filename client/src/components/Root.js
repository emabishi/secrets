import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Journal from '../components/Journal/Journal';


class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/journal" component={Journal} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Root;
