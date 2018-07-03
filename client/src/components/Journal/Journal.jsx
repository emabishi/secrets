import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Note from './Note'

class Journal extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Note />
      </div>
    );
  }
}

Journal.propTypes = {

};

export default Journal;