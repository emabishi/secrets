import * as types from './types';
import axios from 'axios';

export function register(user, history) {
  return (dispatch, getState) => {
    axios.post('/register', user)
    .then(response => {
      const user = response.data
      localStorage.setItem('token', response.data.token)
      dispatch(registerSuccess(user));
      history.push('/journal');
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

export function login(user, history) {
  console.log('USER>>>>>', user)
  return (dispatch, getState) => {
    axios.post('/login', user)
    .then(response => {
      console.log('response', response);
      localStorage.setItem('token', response.data.token);
      dispatch(loginSuccess(response.data))
      history.push('/journal');
    }).catch(error => dispatch(loginFailure(error)))
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
