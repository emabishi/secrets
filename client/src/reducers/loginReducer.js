import types from '../actions/types';

export default loginReducer = (state={}, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return true
    default:
      return state;
  }
}