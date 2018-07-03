import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DeleteNote from './DeleteNote';

class Note extends Component {
  render() {
    return (
      <div>
        <DeleteNote />
      </div>
    );
  }
}

Note.propTypes = {

};

export default Note;