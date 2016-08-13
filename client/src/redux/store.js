import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers/index'
import promise from 'redux-promise'
import logger from 'redux-logger'

export default function configureStore(initialState = {users: [], robots: []}){
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(promise, logger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}