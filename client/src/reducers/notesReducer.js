import * as types from '../actions/types';
import initialState from '../store/initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NOTE_SUCCESS:
      return Object.assign([], state.notes, action.data);
    case types.ADD_NOTE_FAILURE:
      return Object.assign({}, state.notesError, action.data);
    default:
      return state;
  }
}