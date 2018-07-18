import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

import * as actions from '../../actions/creators';

class Journal extends Component {
  state = {
    note: 'Say something'
  }

  handleAddNoteClick = (event) => {
    console.log('add note clicked');
  // Save notes in collection under logged in user - use token saved in state
  const note = this.state.note;
  this.props.actions.addNote(note);
  }

  handleDeleteNoteClick = (event) => {
    console.log('delete note clicked');
  }

  handleInputChange = (event) => {
    const note = event.target.value;
    this.setState({ note });
  }

  render() {
    return (
      <div>
        <TextField
          multiline
          autoFocus
          defaultValue={this.state.note}
          onChange={this.handleInputChange}
        />
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Add Note" icon={<RestoreIcon />} onClick={this.handleAddNoteClick} />
          <BottomNavigationAction label="Delete Note" icon={<FavoriteIcon />} onClick={this.handleDeleteNoteClick} />
        </BottomNavigation>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // props: state
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Journal.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Journal);
