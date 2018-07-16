import * as types from './types';
import axios from 'axios';

export function register(user) {
  return (dispatch, getState) => {
    axios.post('/register', user)
    .then(response => {
      const user = response.data
      localStorage.setItem('token', response.data.token)
      dispatch(registerSuccess(user));
  }
    )
    .catch(err => dispatch(registerFailure(err)))
  }
}

export const registerSuccess = (user) => {
  return {
    type: types.REGISTER_SUCCESS,
    data: user
  }
}

export const registerFailure = (error) => {
  return {
    type: types.REGISTER_FAILURE,
    data: error
  }
}

export const login = (user) => {
  return {
    type: types.LOGIN,
    data: user
  }
}

export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS
  }
}

export const loginFailure = (error) => {
  return {
    type: types.LOGIN_SUCCESS,
    data: error
  }
}
