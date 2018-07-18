import { combineReducers } from 'redux';

import auth from './authReducer';
import notes from './notesReducer';

export default combineReducers({
  auth,
  notes
});