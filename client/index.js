import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import RouterComponents from './routes'
import configureStore from './src/redux/store'

const initialState = {users: []};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    {RouterComponents}
  </Provider>  
  , document.getElementById('root')
);