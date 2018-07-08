import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

// TODO: Text field is to be used to enter notes

class Note extends Component {

  handleAddNoteClick = (event) => {
    console.log('add note clicked');
  }

  handleDeleteNoteClick = (event) => {
    console.log('delete note clicked');
  }

  render() {
    return (
      <div>
        <TextField />
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Add Note" icon={<RestoreIcon />} onClick={this.handleAddNoteClick} />
          <BottomNavigationAction label="Delete Note" icon={<FavoriteIcon />} onClick={this.handleDeleteNoteClick} />
        </BottomNavigation>
      </div>
    );
  }
}

Note.propTypes = {

};

export default Note;