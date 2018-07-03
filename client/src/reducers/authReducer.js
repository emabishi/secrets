import {LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS} from '../actions/types';

const authReducer = (state={}, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return true
    case REGISTER_SUCCESS:
      return true;
    case LOGIN_FAILURE:
      return true
    case REGISTER_FAILURE:
      return true;
    default:
      return state;
  }
}

export default authReducer;