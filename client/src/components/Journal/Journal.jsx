import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Note from './Note'

class Journal extends Component {
  handleNoteClick = (event) => {
    console.log('note clicked', event.target.id);
  }

  render() {
    return (
      <div>
        <Sidebar handleNoteClick={this.handleNoteClick}  />
        <Note />
      </div>
    );
  }
}

Journal.propTypes = {

};

export default Journal;