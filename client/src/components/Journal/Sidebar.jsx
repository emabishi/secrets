import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddNote from './AddNote';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <AddNote />
      </div>
    );
  }
}

Sidebar.propTypes = {

};

export default Sidebar;