import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// TODO: Edit for development, not to use redux immutable state invariant
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../reducers/rootReducer';
import initialState from '../reducers/initialState';

const configureStore = () => {
  return createStore(
    rootReducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxImmutableStateInvariant(), thunk))
}

export default configureStore;