import * as types from '../actions/types';
import initialState from '../store/initialState';

export default (state=initialState, action) => {
  switch(action.type) {
    case types.REGISTER_SUCCESS:
      return Object.assign({}, state.user, action.data);
    case types.REGISTER_FAILURE:
      return Object.assign({}, state.authError, action.data);
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state.user, action.data);
    case types.LOGIN_FAILURE:
      return Object.assign({}, state.authError, action.data);
    default:
      return state;
  }
}