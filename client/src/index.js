import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import './index.css';
import Root from './components/Root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, 
  document.getElementById('root'));
