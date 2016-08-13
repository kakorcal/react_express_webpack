import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'

// TODO: Add redux-promise

export default function configureStore(initialState = {users: [], robots: []}){
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(logger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}