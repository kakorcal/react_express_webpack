import 'babel-polyfill'
import React from 'react'
// import {Provider} from 'react-redux'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import ReactDOM from 'react-dom'
import UserIndex from './src/components/users/index'
import UserNew from './src/components/users/new'
import UserShow from './src/components/users/show'
import UserShow from './src/components/users/edit'
// import configureStore from './src/redux/store'
import App from './src/components/App'

// const initialState = {users: [], robots: []};
// const store = configureStore(initialState);

// redirect issue: https://github.com/reactjs/react-router/issues/1675
ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/users' component={UserIndex}>
        <Route path='/users/new' component={UserNew}/>
        <Route path='/users/:user_id' component={UserShow}/>
        <Route path='/users/:user_id/edit' component={UserEdit}/>
      </Route>
    </Route>
    <Redirect from='/' to='/users'/>
  </Router>
  , document.getElementById('root')
);