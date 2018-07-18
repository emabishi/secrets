import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// TODO: Edit for development, not to use redux immutable state invariant
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../reducers/rootReducer';
import initialState from '../reducers/initialState';


const configureStore = () => {
  return createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant(), thunk)),
  )
}

export default configureStore;