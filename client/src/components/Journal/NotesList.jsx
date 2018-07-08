import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, Divider } from '@material-ui/core';

const NotesList = ({notes, handleNoteClick}) => {
  return (
    <div>
      <List>
        {
          notes.map(note => (
            <div>
              <ListItem key={note._id} id={note._id} onClick={handleNoteClick}>{note.title}</ListItem>
              <Divider />
            </div>
          ))
        }
      </List>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NotesList;