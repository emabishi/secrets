import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Drawer } from '@material-ui/core';
import NotesList from './NotesList';

import data from '../../data';

const styles = {
  drawer: {
    drawerPaper: { position: 'relative', width: 240 }
  }
}

const Sidebar = ({handleNoteClick}) => {
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <NotesList notes={data.notes} handleNoteClick={handleNoteClick}/>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {

};

export default Sidebar;